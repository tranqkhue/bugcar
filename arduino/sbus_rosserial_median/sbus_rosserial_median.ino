#include <sbus.h>

#include <ros.h>
#include <geometry_msgs/Twist.h>
#include <geometry_msgs/Vector3.h>
#include <diagnostic_msgs/DiagnosticStatus.h>

//===================================================================================================================

// used pins
#define SBUS_PIN 4   // D3
SBUS sbus;

int data[17];
int ch_1_min = 985;
int ch_2_min = 985;
int ch1;
int ch2;
int switch_1;
int switch_2;

int auto_threshold = 1000;
int tx_threshold = 1500;
int stop_threshold = 2000;

// Variables used for crude median filter
const int filterWindow = 5;
int channel1_filter = 0;
int channel2_filter = 0;
int channel1_buffer[filterWindow] = {0, 0, 0, 0, 0};
int channel1_filterArray[filterWindow] = {0, 0, 0, 0, 0};
int channel2_buffer[filterWindow] = {0, 0, 0, 0, 0};
int channel2_filterArray[filterWindow] = {0, 0, 0, 0, 0};
int count = 0;

int last_switch_1 = 0;
int last_switch_2 = 0;



//===================================================================================================================



ros::NodeHandle_<ArduinoHardware, 1, 2, 32, 512> nh;

geometry_msgs::Twist cmd_vel;
diagnostic_msgs::KeyValue rc_status;

//ros::Publisher pub_cmd("/Diff_Drive/diff_drive_controller/cmd_vel", &cmd_vel);
ros::Publisher rc_cmd("rc_controller/cmd_vel", &cmd_vel);
ros::Publisher rc_diag("diagnostics/rc_status", &rc_status);
uint32_t seq;

float &vel_forward = cmd_vel.linear.x;
float &angular_speed = cmd_vel.angular.z;

//===================================================================================================================

void setup() {
  sbus.begin(SBUS_PIN, sbusBlocking);
  nh.getHardware()->setBaud(115200);
  nh.initNode();
  nh.advertise(rc_cmd);
  nh.advertise(rc_diag);
  seq = 0;
}

//===================================================================================================================

void loop() {
  while (true) {
    if (!sbus.waitFrame()) {
      ;
    }

    else {
      ch1 = sbus.getChannel(1);
      ch2 = sbus.getChannel(2);
      switch_1 = sbus.getChannel(5);
      switch_2 = sbus.getChannel(8);
      if ((abs(switch_1 - last_switch_1) > 100) && (abs(switch_2 - last_switch_2) > 100)) {
        last_switch_1 = switch_1;
        last_switch_2 = switch_2;
        continue;
      }

      /*
      if (sbus.signalLossActive() or sbus.failsafeActive()) {
        rc_status.key = "SIGNAL_LOSS";
        cmd_vel.linear.x = 0;
        cmd_vel.angular.z = 0;
        rc_cmd.publish(&cmd_vel);
      }
      */


      //rc_status.key = "RUNNING";

      if (abs(switch_1 - auto_threshold) < 250 && abs(switch_2 - auto_threshold) < 250) {
      }

      else if (abs(switch_1 - tx_threshold) < 10 && abs(switch_2 - tx_threshold) < 10) {
        updateBuffer(channel1_buffer, filterWindow, ch1, count);
        updateBuffer(channel2_buffer, filterWindow, ch2, count);
        count += 1;
        if ((ch1 > ch_1_min) && (ch2 > ch_2_min)) {
          channel1_filter = getMedian(channel1_buffer,channel1_filterArray, filterWindow);
          channel2_filter = getMedian(channel2_buffer,channel2_filterArray, filterWindow);
          channel1_filter = constrain(channel1_filter, 1000, 2000);
          channel2_filter = constrain(channel2_filter, 1000, 2000);
          vel_forward = (float)round(map(channel1_filter, 1000, 2000, 0 , 2000) / 25) / 40;
          angular_speed = -(float)round(map(channel2_filter, 1000, 2000, -30, 30) / 5) / 10;
          
          rc_cmd.publish(&cmd_vel);
          //Serial.print(cmd_vel.linear.x); Serial.print(" : ");
          //Serial.println(cmd_vel.angular.z);
        }

      }

      else if (abs(switch_1 - stop_threshold) < 250 && abs(switch_2 - stop_threshold) < 250) {
        vel_forward  = 0;
        angular_speed = 0;
        rc_cmd.publish(&cmd_vel);

      }
    }
    //rc_diag.publish(&rc_status);

    //}
    delay(50);
    nh.spinOnce();
  }
}

void updateBuffer(int *channel_readings, int buffer_len, int new_value, int &count) {
  if (count >= buffer_len) count = 0;
  *(channel_readings + count) = new_value;
}
int getMedian(int *channel_readings, int *filterArray, int buffer_len) {
  for(int i = 0; i < buffer_len; ++i){
    *(filterArray+i) = *(channel_readings+i);
  }
  for(int i = 1; i < buffer_len; ++i)
  {
    int j = *(filterArray+i);
    int k;
    for(k = i - 1; (k >= 0) && (j < *(filterArray+k)); k--)
    {
      *(filterArray + (k+1)) = *(filterArray+k);
    }
    *(filterArray + (k+1)) = j;
  }
  return filterArray[buffer_len/2];
}
