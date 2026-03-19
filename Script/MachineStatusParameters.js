// Parameters checking

const {config, launchHMI, closeHMI, commissioningPass} = require('GlobalVariables');
const {mainOptionVariables} = require('MainOptionsVariable');
const {mainWindowVariables} = require('MainWindowPage');
const {machineStatusVariables} = require('MachineStatusPage');
const {logIn, verifyWpfControlTextWithExistCheck, verifyVisibilityWithExistCheck, searchAndSelectDropdownItemComm} = require('CommonFunc');

function MachineStatusParameters()
{
   //Login into the application.
  logIn();
  //Clicks the 'MachineStatusButton' button.
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  aqUtils.Delay(3000);
  //Checks whether the 'IsVisible' property of the WATER TANK pregress bar object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.WaterTank_ProgressBar);
  //Checks whether the 'WPFControlText' property of the "WATER TANK" object equals 'WATER TANK'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.WaterTank_Label, "WATER TANK");
  //Checks whether the 'IsVisible' property of the HAMMER OIL TANK pregress bar object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.HammerOilTank_ProgressBar);
  //Checks whether the 'WPFControlText' property of the "HAMMER OIL TANK" object equals 'HAMMER OIL TANK'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.HammerOilTank_Label, "HAMMER OIL TANK");
  //Checks whether the 'IsVisible' property of the LUBE LEVEL progress bar object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.LubeLevel_ProgressBar);
  //Checks whether the 'WPFControlText' property of the "LUBE LEVEL" object equals 'LUBE LEVEL'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.LubeLevel_Label, "LUBE LEVEL");
  //Checks whether the 'IsVisible' property of the HYDRAULIC TAN" progress bar object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.HydraulicTank_ProgressBar);
  //Checks whether the 'WPFControlText' property of the "HYDRAULIC TANK" object equals 'HYDRAULIC TANK'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.HydraulicTank_label, "HYDRAULIC TANK");
  //Checks whether the 'WPFControlText' property of the Engine Hours object equals 'Engine Hours'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.EngineHours_Label, "Engine Hours");
  //Checks whether the 'WPFControlText' property of the High Idle Time object equals 'High Idle Time'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.HighIdleTime_Label, "High Idle Time");
  //Checks whether the 'WPFControlText' property of the Medium Idle Time object equals 'Medium Idle Time'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.MediumIdleTime_label, "Medium Idle Time");
  //Checks whether the 'WPFControlText' property of the Low Idle Time object equals 'Low Idle Time'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.LowIdleTime_Label, "Low Idle Time");
  //Checks whether the 'WPFControlText' property of the DRILLING TIME object equals 'DRILLING TIME: '.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.DrillingTime_Label, "DRILLING TIME: ");
  //Checks whether the 'WPFControlText' property of the PITCH object equals 'PITCH:'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.Pitch_Label, "PITCH:");
  //Checks whether the 'WPFControlText' property of the ROLL object equals 'ROLL:'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.Roll_label, "ROLL:");
  //Checks whether the 'IsVisible' property of the Radial Bubble object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.RadialBubble);
  //Closes the 'HwndSource_MainWindow' window.
  closeHMI();
}
