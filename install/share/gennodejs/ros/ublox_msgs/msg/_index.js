
"use strict";

let TimTM2 = require('./TimTM2.js');
let NavVELECEF = require('./NavVELECEF.js');
let CfgNAVX5 = require('./CfgNAVX5.js');
let CfgANT = require('./CfgANT.js');
let CfgNAV5 = require('./CfgNAV5.js');
let NavSBAS_SV = require('./NavSBAS_SV.js');
let Inf = require('./Inf.js');
let CfgRATE = require('./CfgRATE.js');
let CfgSBAS = require('./CfgSBAS.js');
let CfgINF = require('./CfgINF.js');
let EsfRAW = require('./EsfRAW.js');
let AidALM = require('./AidALM.js');
let EsfRAW_Block = require('./EsfRAW_Block.js');
let HnrPVT = require('./HnrPVT.js');
let NavSOL = require('./NavSOL.js');
let EsfINS = require('./EsfINS.js');
let NavTIMEGPS = require('./NavTIMEGPS.js');
let MonHW = require('./MonHW.js');
let CfgPRT = require('./CfgPRT.js');
let EsfSTATUS_Sens = require('./EsfSTATUS_Sens.js');
let NavSTATUS = require('./NavSTATUS.js');
let NavCLOCK = require('./NavCLOCK.js');
let CfgINF_Block = require('./CfgINF_Block.js');
let EsfSTATUS = require('./EsfSTATUS.js');
let RxmSFRB = require('./RxmSFRB.js');
let RxmSFRBX = require('./RxmSFRBX.js');
let NavPVT = require('./NavPVT.js');
let UpdSOS = require('./UpdSOS.js');
let CfgNMEA7 = require('./CfgNMEA7.js');
let NavSAT_SV = require('./NavSAT_SV.js');
let RxmRAWX_Meas = require('./RxmRAWX_Meas.js');
let Ack = require('./Ack.js');
let UpdSOS_Ack = require('./UpdSOS_Ack.js');
let RxmRAWX = require('./RxmRAWX.js');
let CfgDAT = require('./CfgDAT.js');
let AidHUI = require('./AidHUI.js');
let RxmEPH = require('./RxmEPH.js');
let NavPOSLLH = require('./NavPOSLLH.js');
let NavSVINFO_SV = require('./NavSVINFO_SV.js');
let NavSBAS = require('./NavSBAS.js');
let RxmALM = require('./RxmALM.js');
let NavPOSECEF = require('./NavPOSECEF.js');
let NavDOP = require('./NavDOP.js');
let CfgGNSS_Block = require('./CfgGNSS_Block.js');
let NavRELPOSNED = require('./NavRELPOSNED.js');
let NavPVT7 = require('./NavPVT7.js');
let CfgMSG = require('./CfgMSG.js');
let CfgCFG = require('./CfgCFG.js');
let MgaGAL = require('./MgaGAL.js');
let NavSVIN = require('./NavSVIN.js');
let CfgRST = require('./CfgRST.js');
let NavDGPS = require('./NavDGPS.js');
let EsfMEAS = require('./EsfMEAS.js');
let CfgUSB = require('./CfgUSB.js');
let MonHW6 = require('./MonHW6.js');
let MonVER_Extension = require('./MonVER_Extension.js');
let RxmRAW = require('./RxmRAW.js');
let AidEPH = require('./AidEPH.js');
let NavTIMEUTC = require('./NavTIMEUTC.js');
let NavRELPOSNED9 = require('./NavRELPOSNED9.js');
let CfgNMEA6 = require('./CfgNMEA6.js');
let MonGNSS = require('./MonGNSS.js');
let NavDGPS_SV = require('./NavDGPS_SV.js');
let RxmSVSI = require('./RxmSVSI.js');
let CfgDGNSS = require('./CfgDGNSS.js');
let CfgGNSS = require('./CfgGNSS.js');
let NavVELNED = require('./NavVELNED.js');
let RxmRAW_SV = require('./RxmRAW_SV.js');
let MonVER = require('./MonVER.js');
let NavATT = require('./NavATT.js');
let CfgHNR = require('./CfgHNR.js');
let RxmSVSI_SV = require('./RxmSVSI_SV.js');
let CfgTMODE3 = require('./CfgTMODE3.js');
let NavSAT = require('./NavSAT.js');
let RxmRTCM = require('./RxmRTCM.js');
let NavSVINFO = require('./NavSVINFO.js');
let CfgNMEA = require('./CfgNMEA.js');

module.exports = {
  TimTM2: TimTM2,
  NavVELECEF: NavVELECEF,
  CfgNAVX5: CfgNAVX5,
  CfgANT: CfgANT,
  CfgNAV5: CfgNAV5,
  NavSBAS_SV: NavSBAS_SV,
  Inf: Inf,
  CfgRATE: CfgRATE,
  CfgSBAS: CfgSBAS,
  CfgINF: CfgINF,
  EsfRAW: EsfRAW,
  AidALM: AidALM,
  EsfRAW_Block: EsfRAW_Block,
  HnrPVT: HnrPVT,
  NavSOL: NavSOL,
  EsfINS: EsfINS,
  NavTIMEGPS: NavTIMEGPS,
  MonHW: MonHW,
  CfgPRT: CfgPRT,
  EsfSTATUS_Sens: EsfSTATUS_Sens,
  NavSTATUS: NavSTATUS,
  NavCLOCK: NavCLOCK,
  CfgINF_Block: CfgINF_Block,
  EsfSTATUS: EsfSTATUS,
  RxmSFRB: RxmSFRB,
  RxmSFRBX: RxmSFRBX,
  NavPVT: NavPVT,
  UpdSOS: UpdSOS,
  CfgNMEA7: CfgNMEA7,
  NavSAT_SV: NavSAT_SV,
  RxmRAWX_Meas: RxmRAWX_Meas,
  Ack: Ack,
  UpdSOS_Ack: UpdSOS_Ack,
  RxmRAWX: RxmRAWX,
  CfgDAT: CfgDAT,
  AidHUI: AidHUI,
  RxmEPH: RxmEPH,
  NavPOSLLH: NavPOSLLH,
  NavSVINFO_SV: NavSVINFO_SV,
  NavSBAS: NavSBAS,
  RxmALM: RxmALM,
  NavPOSECEF: NavPOSECEF,
  NavDOP: NavDOP,
  CfgGNSS_Block: CfgGNSS_Block,
  NavRELPOSNED: NavRELPOSNED,
  NavPVT7: NavPVT7,
  CfgMSG: CfgMSG,
  CfgCFG: CfgCFG,
  MgaGAL: MgaGAL,
  NavSVIN: NavSVIN,
  CfgRST: CfgRST,
  NavDGPS: NavDGPS,
  EsfMEAS: EsfMEAS,
  CfgUSB: CfgUSB,
  MonHW6: MonHW6,
  MonVER_Extension: MonVER_Extension,
  RxmRAW: RxmRAW,
  AidEPH: AidEPH,
  NavTIMEUTC: NavTIMEUTC,
  NavRELPOSNED9: NavRELPOSNED9,
  CfgNMEA6: CfgNMEA6,
  MonGNSS: MonGNSS,
  NavDGPS_SV: NavDGPS_SV,
  RxmSVSI: RxmSVSI,
  CfgDGNSS: CfgDGNSS,
  CfgGNSS: CfgGNSS,
  NavVELNED: NavVELNED,
  RxmRAW_SV: RxmRAW_SV,
  MonVER: MonVER,
  NavATT: NavATT,
  CfgHNR: CfgHNR,
  RxmSVSI_SV: RxmSVSI_SV,
  CfgTMODE3: CfgTMODE3,
  NavSAT: NavSAT,
  RxmRTCM: RxmRTCM,
  NavSVINFO: NavSVINFO,
  CfgNMEA: CfgNMEA,
};
