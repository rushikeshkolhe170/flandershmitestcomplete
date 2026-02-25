
// Verifying available buttons and confirmation pop up messages for button click

const {config, launchHMI, closeHMI, maintenanceModePass} = require('GlobalVariables');
const {mainOptionVariables} = require('MainOptionsVariable');
const {maint_HeadLimit_Variables} = require('MaintenancePage');
const {logIn, verifyWpfControlTextWithExistCheck, verifyVisibilityWithExistCheck, verifyElementEnabled, verifyElementDisabled} = require('CommonFunc');

function SetupHoistResolver()
{
  //Login into the application.
  logIn();
  //Clicks the 'MaintenanceButton' button.
  mainOptionVariables.Maint_Btn.ClickButton();
  //Clicks the 'HeadLimitsButton' button.
  mainOptionVariables.HeadLimit_Btn.ClickButton();
  //Checking if Exist Maintenance mode is visible if Yes then Exiting from the maintenance mode.
  if(maint_HeadLimit_Variables.ExitMaintMode_Btn.IsVisible){
    maint_HeadLimit_Variables.ExitMaintMode_Btn.ClickButton();
  }
  //Checks whether the 'Enabled' property of the Setup Hoist Resolver button object equals False.
  verifyElementDisabled(maint_HeadLimit_Variables.SetupHoistResolver_Btn);
  //Clicks the 'ButtonEnterMaintenanceMode' button.
  maint_HeadLimit_Variables.EnterMaintMode_btn.ClickButton();
  //Going into maintenance mode
  maintenanceModePass();
  //Checks whether the 'Enabled' property of the Setup Hoist Resolver button object equals True.
  verifyElementEnabled(maint_HeadLimit_Variables.SetupHoistResolver_Btn);
  //Clicks the 'ButtonSetupHoistResolver' button.
  maint_HeadLimit_Variables.SetupHoistResolver_Btn.ClickButton();
  aqUtils.Delay(3000);
  //Checks whether the 'IsVisible' property of the Setup Hoist Resolver Panel object equals True.
  verifyVisibilityWithExistCheck(maint_HeadLimit_Variables.SetupHoistResolverPanel);
  aqUtils.Delay(3000);
  //Checks whether the 'WPFControlText' property of the Setup Hoist Resolver object equals 'Head Resolver Setup'.
  verifyWpfControlTextWithExistCheck(maint_HeadLimit_Variables.SetupHoistResolverPanel.Child(0).Child(5).Child(0), "Head Resolver Setup");
  //Checks whether the 'WPFControlText' property of the Setup Resolve Card button object equals 'Setup Resolver Card'.
  verifyWpfControlTextWithExistCheck(maint_HeadLimit_Variables.SetupHoistResolverPanel.Child(0).Child(4).Child(11).Child(2), "Setup Resolver Card");
  //Checks whether the 'WPFControlText' property of the Reset Hoist Position object equals 'Reset Hoist Position'.
  verifyWpfControlTextWithExistCheck(maint_HeadLimit_Variables.SetupHoistResolverPanel.Child(0).Child(4).Child(11).Child(1), "Reset Hoist Position");
  //Checks whether the 'WPFControlText' property of the Set Count Per object equals 'Set Count Per'.
  verifyWpfControlTextWithExistCheck(maint_HeadLimit_Variables.SetupHoistResolverPanel.Child(0).Child(4).Child(11).Child(0), "Set Count Per");
  //Checks whether the 'Enabled' property of the Ok button on setupHoistResolver panel object equals False.
  verifyElementDisabled(maint_HeadLimit_Variables.SetupHoistResolverPanel.Child(0).Child(3).Child(2));
  //Checks whether the 'Enabled' property of the Back button on setupHoistResolver panel object equals False.
  verifyElementDisabled(maint_HeadLimit_Variables.SetupHoistResolverPanel.Child(0).Child(3).Child(0));
  //Checks whether the 'Enabled' property of the Close button on setupHoistResolver panel object equals True.
  verifyElementEnabled(maint_HeadLimit_Variables.SetupHoistResolverPanel.Child(0).Child(3).Child(1));
  //Clicks the 'ButtonSetupResolverCard' button.
  maint_HeadLimit_Variables.SetupHoistResolverPanel.Child(0).Child(4).Child(11).Child(2).ClickButton();
  //Checks whether the 'WPFControlText' property of the Confirmation pop up message object equals 'Are you sure you want to configure the hoist resolver card?'.
  verifyWpfControlTextWithExistCheck(maint_HeadLimit_Variables.ConfirmationPopUpSetupResolverCard, "Are you sure you want to configure the hoist resolver card?");
  //Clicks the 'YesButton' button.
  maint_HeadLimit_Variables.ConfirmationPopUpSetupResolverCardYes_Btn.ClickButton();
  //Clicks the 'ButtonResetHoistPosition' button.
  maint_HeadLimit_Variables.SetupHoistResolverPanel.Child(0).Child(4).Child(11).Child(1).ClickButton();
  //Checks whether the 'WPFControlText' property of the Confirmation pop up message object equals 'Are you sure you want to reset the hoist position?'.
  verifyWpfControlTextWithExistCheck(maint_HeadLimit_Variables.ConfirmationPopUpResetHoistPos, "Are you sure you want to reset the hoist position?");
  //Clicks the 'YesButton' button.
  maint_HeadLimit_Variables.ConfirmationPopUpResetHoistPosYes_Btn.ClickButton();
  //Clicks the 'ButtonSetCountPerFoot' button.
  maint_HeadLimit_Variables.SetupHoistResolverPanel.Child(0).Child(4).Child(11).Child(0).ClickButton();
  //Clicks the 'Close' button.
  maint_HeadLimit_Variables.SetupHoistResolverPanel.Child(0).Child(3).Child(1).ClickButton();
  //Clicks the 'ButtonExitMaintenanceMode' button.
  maint_HeadLimit_Variables.ExitMaintMode_Btn.ClickButton();
  //Close the application.
  closeHMI();
}