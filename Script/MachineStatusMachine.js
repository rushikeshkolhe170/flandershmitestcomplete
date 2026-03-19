
//Do select Machine type as Sandvik412I in the Dignostic Dashboard before running the script.

const {config, launchHMI, closeHMI, commissioningPass} = require('GlobalVariables');
const {mainOptionVariables} = require('MainOptionsVariable');
const {mainWindowVariables} = require('MainWindowPage');
const {machineStatusVariables} = require('MachineStatusPage');
const {logIn, verifyWpfControlTextWithExistCheck, verifyVisibilityWithExistCheck, searchAndSelectDropdownItemComm} = require('CommonFunc');

function MachineStatusMachine()
{
  MachineStatusMachine1();
  aqUtils.Delay(3000);
  //Login into the application.
  logIn();
  //Clicks the 'MachineStatusButton' button.
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  //Checks whether the 'WPFControlText' property of the TextblockOneTouchDrillControl object equals 'ONE TOUCH DRILL CONTROL'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.OneTouchDrillCoontrol_Label, "ONE TOUCH\r\nDRILL CONTROL");
  //Checks whether the 'IsVisible' property of the AIR COMPRESSOR FILTER object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.AirCompressorFilter_UI);
  //Checks whether the 'WPFControlText' property of the AIR COMPRESSOR FILTER object equals 'AIR COMPRESSOR FILTER'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.AirCompressorFilter_Label, "AIR COMPRESSOR FILTER");
  //Checks whether the 'IsVisible' property of the ENGINE AIR FILTER object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.EngineAirFilter_UI);
  //Checks whether the 'WPFControlText' property of the ENGINE AIR FILTER object equals 'ENGINE AIR FILTER'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.EngineAirFilter_Label, "ENGINE AIR FILTER");
  //Checks whether the 'IsVisible' property of the Jack1 object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.Jack1);
  //Checks whether the 'IsVisible' property of the Jack2 object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.Jack2);
  //Checks whether the 'IsVisible' property of the ENGINE RADIATOR object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.EngineRadiator_UI);
  //Checks whether the 'WPFControlText' property of the ENGINE RADIATOR object equals 'ENGINE RADIATOR'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.EngineRadiator_Label, "ENGINE RADIATOR");
  //Checks whether the 'IsVisible' property of the AIR COMPRESSOR RADIATOR object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.AirCompressorRadiator_UI);
  //Checks whether the 'WPFControlText' property of the AIR COMPRESSOR RADIATOR object equals 'AIR COMPRESSOR RADIATOR'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.AirCompressorRadiator_Label, "AIR COMPRESSOR RADIATOR");
  //Checks whether the 'IsVisible' property of the RECEIVER AIR TANK PSI object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.RecAirTankPSI_UI);
  //Checks whether the 'WPFControlText' property of the RECEIVER AIR TANK PSI object equals 'RECEIVER AIR TANK PSI'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.RecAirTankPSI_Label, "RECEIVER AIR TANK PSI"),
  //Checks whether the 'IsVisible' property of the AIR TEMP object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.AirTemp_UI);
  //Checks whether the 'WPFControlText' property of the AIR TEMP object equals 'AIR TEMP'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.AirTemp_label, "AIR TEMP"),
  //Checks whether the 'IsVisible' property of the ENGINE RPM object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.EngineRPM_UI);
  //Checks whether the 'WPFControlText' property of the ENGINE RPM object equals 'ENGINE RPM'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.EngineRPM_Label, "ENGINE RPM");
  //Checks whether the 'IsVisible' property of the HYDRAULIC PUMPS object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.HydraulicPump_UI);
  //Checks whether the 'WPFControlText' property of the HYDRAULIC PUMPS object equals 'HYDRAULIC PUMPS'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.HydraulicPump_Label, "HYDRAULIC PUMPS");
  //Checks whether the 'IsVisible' property of the Jack3 object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.Jack3);
  //Checks whether the 'IsVisible' property of the Jack4 object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.Jack4);
  //Checks whether the 'IsVisible' property of the Other Option I button object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.OtherOptions_Btn);
  //Clicks the Other Option I button.
  machineStatusVariables.OtherOptions_Btn.ClickButton();
  //Checks whether the 'IsVisible' property of the Aux Pump 1 object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.AirPump1_UI);
  //Checks whether the 'WPFControlText' property of the Aux Pump 1 object equals 'Aux Pump 1'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.AirPump1_Label, "Aux Pump 1");
  //Checks whether the 'IsVisible' property of the Aux Pump 2 and Fan Pump object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.AirPump2FanPump_UI);
  //Checks whether the 'WPFControlText' property of the Aux Pump 2 object equals 'Aux Pump 2'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.AirPump2_label, "Aux Pump 2");
  //Checks whether the 'WPFControlText' property of the Fan Pump object equals 'Fan Pump'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.FanPump_Label, "Fan Pump");
  //Checks whether the 'IsVisible' property of the NCS PORT B object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.NCSPortB_UI);
  //Checks whether the 'WPFControlText' property of the NCS PORT B object equals 'NCS PORT B'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.NCSPortB_Label, "NCS PORT B")
  //Checks whether the 'IsVisible' property of the CS PORT B object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.CSPortB_UI);
  //Checks whether the 'WPFControlText' property of the CS PORT B object equals 'CS PORT B'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.CSPortB, "CS PORT B");
  //Clicks the 'ButtonClose' button.
  machineStatusVariables.Close_Btn.ClickButton();
  //Closes the 'HwndSource_MainWindow' window.
  closeHMI();
}

function MachineStatusMachine1()
{
  //Login into the application.
  logIn();
  //Clicks the 'MachineStatusButton' button.
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  //Opening commissioning settings.
  commissioningPass();
  //Searching for 'MachineType' button and select the checkbox if not selected
  searchAndSelectDropdownItemComm("MachineType", mainWindowVariables.commMachineType, "MachineType", "SandvikDR412i");
  //Closes the 'HwndSource_SeriousWindow' window.
  mainWindowVariables.CommWindow.Close();
  //Closes the 'HwndSource_MainWindow' window.
  closeHMI();
}