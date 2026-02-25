
//Verify the visibility and enabled status of the buttons from manin screen

const {config, launchHMI, closeHMI} = require('GlobalVariables');
const {logIn, verifyElementEnabled, verifyElementDisabled, verifyVisibilityWithExistCheck, verifyStatusIsOne, verifyStatusIsZero} = require('CommonFunc');
const {mainOptionVariables} = require('MainOptionsVariable');
const {mainScreenVariables} = require('MainScreenPage');

//Make sure drilling is off and engine has High state before running the script

function ButtonsVisibility()
{
  //Login into the application.
  logIn();
  //Clicks the 'MainScreenButton' button.
  mainOptionVariables.MainScreen_Btn.ClickButton();
  //Checks whether the 'IsVisible' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.ButtonEndHole object equals True.
  verifyVisibilityWithExistCheck(mainScreenVariables.EndHole_Btn);
  //Checks whether the 'Enabled' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.ButtonEndHole object equals True.
  verifyElementEnabled(mainScreenVariables.EndHole_Btn);
  //Checks whether the 'IsVisible' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.ButtonRaiseBit object equals True.
  verifyVisibilityWithExistCheck(mainScreenVariables.RaiseBit_Btn);
  //Checks whether the 'Enabled' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.ButtonRaiseBit object equals False.
  verifyElementDisabled(mainScreenVariables.RaiseBit_Btn);
  //Checks whether the 'IsVisible' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.ResetHoleDepth object equals True.
  verifyVisibilityWithExistCheck(mainScreenVariables.ResetHoleDepth_Btn);
  //Checks whether the 'Enabled' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.ResetHoleDepth object equals False.
  verifyElementDisabled(mainScreenVariables.ResetHoleDepth_Btn);
  //Checks whether the 'IsVisible' property of the 'Control' object equals True.
  verifyVisibilityWithExistCheck(mainScreenVariables.ControlBtn_Border);
  //Checks whether the 'wState' property of the Control ON object equals 0.
  verifyStatusIsZero(mainScreenVariables.ControlBtn_ON);
  //Checks whether the 'wState' property of the Control OFF object equals 1.
  verifyStatusIsOne(mainScreenVariables.ControlBtn_OFF);
  //Checks whether the 'IsVisible' property of the 'Main Motor' object equals True.
  verifyVisibilityWithExistCheck(mainScreenVariables.MainMotorBtn_Border);
  //Checks whether the 'wState' property of the Main Motor ON object equals 0.
  verifyStatusIsZero(mainScreenVariables.MainMotorBtn_ON);
  //Checks whether the 'wState' property of the Main Motor OFF object equals 1.
  verifyStatusIsOne(mainScreenVariables.MainMotorBtn_OFF);
  //Checks whether the 'IsVisible' property of the 'Bit Air' object equals True.
  verifyVisibilityWithExistCheck(mainScreenVariables.BitAirBtn_Border);
  //Checks whether the 'wState' property of the Bit Air ON object equals 0.
  verifyStatusIsZero(mainScreenVariables.BitAirBtn_ON);
  //Checks whether the 'wState' property of the Bit Air OFF object equals 1.
  verifyStatusIsOne(mainScreenVariables.BitAirBtn_OFF);
  //Checks whether the 'IsVisible' property of the 'Engine Idle' object equals True.
  verifyVisibilityWithExistCheck(mainScreenVariables.EngineIdle_Border);
  //Checks whether the 'wState' property of the Engine Idle High object equals 1.
  verifyStatusIsOne(mainScreenVariables.EngineIdle_High);
  //Checks whether the 'wState' property of the Engine Idle Medium object equals 0.
  verifyStatusIsZero(mainScreenVariables.EngineIdle_Medium);
  //Checks whether the 'wState' property of the Engine Idle Low object equals 0.
  verifyStatusIsZero(mainScreenVariables.EngineIdle_Low);
  //Checks whether the 'IsVisible' property of the 'One Touch Drill Control' object equals True.
  verifyVisibilityWithExistCheck(mainScreenVariables.OneTouchDrillControlBtn_Border);
  //Checks whether the 'wState' property of the One Touch Drill Control Start object equals 0.
  verifyStatusIsZero(mainScreenVariables.OneTouchDrillControlBtn_Start);
  //Checks whether the 'wState' property of the One Touch Drill Control Stop object equals 1.
  verifyStatusIsOne(mainScreenVariables.OneTouchDrillControlBtn_Stop);
  //Closes the 'HwndSource_MainWindow' window.
  closeHMI();
}