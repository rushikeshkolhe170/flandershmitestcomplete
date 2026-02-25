
//Verification of consumable options in Maintenance.

const {config, launchHMI, closeHMI, maintenanceModePass} = require('GlobalVariables');
const {mainOptionVariables} = require('MainOptionsVariable');
const {maint_Consumable_Variable} = require('MaintenancePage');
const {logIn, verifyElementEnabled, verifyElementDisabled, verifyVisibilityWithExistCheck} = require('CommonFunc');

function ConsumableMaintenanceOptions()
{
  //Login into the application.
  logIn();
  //Clicks the 'MaintenanceButton' button.
  mainOptionVariables.Maint_Btn.ClickButton();
  //Clicks the 'ConsumablesButton' button.
  mainOptionVariables.ConsumableMain_Btn.ClickButton();
  //Checks whether the 'Enabled' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.ScrollView.TextblockChange object equals False.
  verifyElementDisabled(maint_Consumable_Variable.Change_Btn);
  //Checks whether the 'IsVisible' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.ScrollView.TextblockBit object equals True.
  verifyVisibilityWithExistCheck(maint_Consumable_Variable.BitOption_Label);
  //Checks whether the 'IsVisible' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.ScrollView.TextblockStabilizer object equals True.
  verifyVisibilityWithExistCheck(maint_Consumable_Variable.Stabilizer_Label);
  //Checks whether the 'IsVisible' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.ScrollView.TextblockLowerSteel object equals True.
  verifyVisibilityWithExistCheck(maint_Consumable_Variable.LowerSteel_Label);
  //Checks whether the 'IsVisible' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.ScrollView.TextblockUpperSteel object equals True.
  verifyVisibilityWithExistCheck(maint_Consumable_Variable.UpperSteel_Label);
  //Checks whether the 'IsVisible' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.ScrollView.TextblockThreadSaver object equals True.
  verifyVisibilityWithExistCheck(maint_Consumable_Variable.ThreadSaver_Label);
  //Clicks the 'Enter Maintnenace Mode' button.
  maint_Consumable_Variable.EnterMaintMode_Btn.ClickButton();
  //Going into Maintenance Mode.
  maintenanceModePass();
  //Checks whether the 'Enabled' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.ScrollView.TextblockChange object equals True.
  verifyElementEnabled(maint_Consumable_Variable.Change_Btn);
  //Checks whether the 'Enabled' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.ScrollView.TextblockExitMaintenanceMode object equals True.
  verifyElementEnabled(maint_Consumable_Variable.ExitMaintMode_Btn_Label);
  //Clicks the 'Exit Maintnenace Mode' button.
  maint_Consumable_Variable.ExitMaintMode_Btn.ClickButton();
  //Close the application.
  closeHMI();
}