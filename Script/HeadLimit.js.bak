
//Head limit wpftext and visibility of element on scree.

const {config, launchHMI, closeHMI} = require('GlobalVariables');
const {mainOptionVariables} = require('MainOptionsVariable');
const {maint_HeadLimit_Variables} = require('MaintenancePage');
const {logIn, verifyWpfControlTextWithExistCheck, verifyVisibilityWithExistCheck} = require('CommonFunc');

function HeadLimitOptions()
{
  //Login into the application.
  logIn();
  //Clicks the 'MaintenanceButton' button.
  mainOptionVariables.Maint_Btn.ClickButton();
  //Clicks the 'HeadLimitsButton' button.
  mainOptionVariables.HeadLimit_Btn.ClickButton();
  //Checks whether the 'IsVisible' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.LinearGaugeHeadPosition object equals True.
  verifyVisibilityWithExistCheck(maint_HeadLimit_Variables.HeadLimit_Gauge);
  //Checks whether the 'WPFControlText' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.LabelHeadPosition object equals 'HEAD POSITION:'.
  verifyWpfControlTextWithExistCheck(maint_HeadLimit_Variables.HeadPosition_Label, "HEAD POSITION:");
  //Checks whether the 'WPFControlText' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.LabelHeadUpperLimit object equals 'HEAD UPPER LIMIT:'.
  verifyWpfControlTextWithExistCheck(maint_HeadLimit_Variables.HeadUpperLimit_Label, "HEAD UPPER LIMIT:");
  //Checks whether the 'WPFControlText' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.LabelUpperSlowDownRange object equals 'UPPER SLOW DOWN RANGE:'.
  verifyWpfControlTextWithExistCheck(maint_HeadLimit_Variables.UpperSlowDownRange_Label, "UPPER SLOW DOWN RANGE:");
  //Checks whether the 'WPFControlText' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.LabelPipeRackLimit object equals 'PIPE RACK LIMIT:'.
  verifyWpfControlTextWithExistCheck(maint_HeadLimit_Variables.PipeRackLimit_Label, "PIPE RACK LIMIT:");
  //Checks whether the 'WPFControlText' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.LabelHeadMastControlUpper object equals 'HEAD MAST CONTROL UPPER:'.
  verifyWpfControlTextWithExistCheck(maint_HeadLimit_Variables.HeadMastControlUpper_Label, "HEAD MAST CONTROL UPPER:");
  //Checks whether the 'WPFControlText' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.LabelHeadMastControlLower object equals 'HEAD MAST CONTROL LOWER:'.
  verifyWpfControlTextWithExistCheck(maint_HeadLimit_Variables.HeadMastControlLower_Label, "HEAD MAST CONTROL LOWER:");
  //Checks whether the 'WPFControlText' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.LabelAutoDrillStopSetpoint object equals 'AUTO DRILL STOP SETPOINT:'.
  verifyWpfControlTextWithExistCheck(maint_HeadLimit_Variables.AutoDrillStopSetpoint_Label, "AUTO DRILL STOP SETPOINT:");
  //Checks whether the 'WPFControlText' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.LabelPropelLimit object equals 'PROPEL LIMIT:'.
  verifyWpfControlTextWithExistCheck(maint_HeadLimit_Variables.PropelLimit_Label, "PROPEL LIMIT:");
  //Checks whether the 'WPFControlText' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.LabelPropelDrop object equals 'PROPEL DROP:'.
  verifyWpfControlTextWithExistCheck(maint_HeadLimit_Variables.PropelDrop_Label, "PROPEL DROP:");
  //Checks whether the 'WPFControlText' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.LabelRodSupportStow object equals 'ROD SUPPORT STOW:'.
  verifyWpfControlTextWithExistCheck(maint_HeadLimit_Variables.RodSupportStow_Label, "ROD SUPPORT STOW:");
  //Checks whether the 'WPFControlText' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.LabelRodSupportAlarm object equals 'ROD SUPPORT ALARM:'.
  verifyWpfControlTextWithExistCheck(maint_HeadLimit_Variables.RodSupportAlarm_Label, "ROD SUPPORT ALARM:");
  //Checks whether the 'WPFControlText' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.LabelRodSupportFault object equals 'ROD SUPPORT FAULT:'.
  verifyWpfControlTextWithExistCheck(maint_HeadLimit_Variables.RodSupportFault_Label, "ROD SUPPORT FAULT:");
  //Checks whether the 'WPFControlText' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.LabelLower object equals 'LOWER:'.
  verifyWpfControlTextWithExistCheck(maint_HeadLimit_Variables.Lower_Label, "LOWER:");
  //Checks whether the 'IsVisible' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.Border object equals True.
  verifyVisibilityWithExistCheck(maint_HeadLimit_Variables.BorderBox_Label);
  //Checks whether the 'IsVisible' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.Border.Border object equals True.
  verifyVisibilityWithExistCheck(maint_HeadLimit_Variables.HeadPositionYellow_Bar);
  //Checks whether the 'IsVisible' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.Border.Border2 object equals True.
  verifyVisibilityWithExistCheck(maint_HeadLimit_Variables.HeadPositionGreen_Bar);
  //Checks whether the 'IsVisible' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.Border.Border3 object equals True.
  verifyVisibilityWithExistCheck(maint_HeadLimit_Variables.HeadPositionBlue_Bar);
  //Checks whether the 'IsVisible' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.Border.Border4 object equals True.
  verifyVisibilityWithExistCheck(maint_HeadLimit_Variables.HeadPositionRed_Bar);
  //Checks whether the 'IsVisible' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.Border.Border5 object equals True.
  verifyVisibilityWithExistCheck(maint_HeadLimit_Variables.HeadPositionViolet_Bar);
  //Close the application.
  closeHMI();
}