#!/usr/bin/env python

import rospy
from sensor_msgs.msg import NavSatFix

import argparse


class SetDatum:
	def __init__(self, navsat_node_ = "/navsat_transform", gps_topic = "/gps/fix", bind_ = True):
		self.gps_sub = rospy.Subscriber(gps_topic, NavSatFix, self.gps_callback)
		self.navsat_node = navsat_node_
		self.bind = bind_

	def gps_callback(self, data):
		if data.position_covariance[0] < 100 and data.position_covariance[4] < 100:
			rospy.set_param(self.navsat_node + "/datum", [data.latitude, data.longitude, data.altitude])

			if self.bind:
				self.gps_sub.unregister()
				rospy.signal_shutdown("Done setting datum")

if __name__ == "__main__":
	rospy.init_node('set_localization_datum')

	parser = argparse.ArgumentParser()
	parser.add_argument('-i', '--input_gps',
	                    help='Input GPS topic', type=str, default='/gps/fix')
	parser.add_argument('-n', '--navsat_node', 
						help='Navsat node to set datum', type=str, default='navsat_transform')
	parser.add_argument('-b', '--bind',
		                help='Shutdown after setting datum', type=bool, default=True)

	args, unknown = parser.parse_known_args()

	set_datum = SetDatum(args.navsat_node, args.input_gps, args.bind)
	rospy.spin()