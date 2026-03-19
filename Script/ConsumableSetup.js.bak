
//Verification of consumable options in Setup.

const {config, launchHMI, closeHMI, maintenanceModePass} = require('GlobalVariables');
const {mainOptionVariables} = require('MainOptionsVariable');
const {setupVariables} = require('SetupPage');
const {logIn, verifyElementEnabled, verifyElementDisabled, verifyVisibilityWithExistCheck} = require('CommonFunc');

function ConsumableSetupOptions()
{
  //Login into the application.
  logIn();
  //Clicks the 'SetupButton' button.
  mainOptionVariables.Setup_Btn.ClickButton();
  //Clicks the 'ConsumablesButton' button.
  setupVariables.ConsumableOption_Btn.ClickButton();
  //Checks whether the 'Enabled' property of the Change Button object equals False.
  verifyElementDisabled(setupVariables.Change_Btn);
  //Checks whether the 'IsVisible' property of the Bit label object equals True.
  verifyVisibilityWithExistCheck(setupVariables.BitOption_Label);
  //Checks whether the 'IsVisible' property of the Stabilizer label object equals True.
  verifyVisibilityWithExistCheck(setupVariables.Stabilizer_Label);
  //Checks whether the 'IsVisible' property of the LowerSteel label object equals True.
  verifyVisibilityWithExistCheck(setupVariables.LowerSteel_Label);
  //Checks whether the 'IsVisible' property of the UpperSteel label object equals True.
  verifyVisibilityWithExistCheck(setupVariables.UpperSteel_Label);
  //Checks whether the 'IsVisible' property of the ThreadSaver label object equals True.
  verifyVisibilityWithExistCheck(setupVariables.ThreadSaver_Label);
  //Clicks the 'Enter Maintnenace Mode' button.
  setupVariables.EnterMaintMode_Btn.ClickButton();
  //Going into Maintenance Mode.
  maintenanceModePass();
  //Checks whether the 'Enabled' property of the Change button object equals True.
  verifyElementEnabled(setupVariables.Change_Btn);
  //Checks whether the 'Enabled' property of the ExitMaintenanceMode object equals True.
  verifyElementEnabled(setupVariables.ExitMaintMode_Btn_Label);
  //Clicks the 'Exit Maintnenace Mode' button.
  setupVariables.ExitMaintMode_Btn.ClickButton();
  //Close the application.
  closeHMI();
}
