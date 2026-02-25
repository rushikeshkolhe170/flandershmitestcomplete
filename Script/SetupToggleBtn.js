
//Verifying the functional click of the toggle buttons in setup menu option.

const {config, launchHMI, closeHMI} = require('GlobalVariables');
const {wstate, getStatusOfOption, logIn, checkVisibilityAndClick, verifyWpfControlTextWithExistCheck, verifyElementEnabled, verifyElementDisabled, verifyVisibilityWithExistCheck, verifyStatusIsOne, verifyStatusIsZero, verifyStatusOfOption} = require('CommonFunc');
const {mainOptionVariables} = require('MainOptionsVariable');
const {setupVariables} = require('SetupPage');

function toggleButtons()
{
  //Login into the application.
  logIn();
  //Clicks the 'SetupButton' button.
  mainOptionVariables.Setup_Btn.ClickButton();
  aqUtils.Delay(5000);
  //Checks whether the 'WPFControlText' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.TextblockAutoMastControlInOneTouch object equals 'AUTO MAST CONTROL
  //IN ONE TOUCH'.
  verifyWpfControlTextWithExistCheck(setupVariables.AutoMastControl_Btn_Label,"AUTO MAST CONTROL\r\nIN ONE TOUCH");
  let tog1 = wstate(setupVariables.AutoMastControl_Toggle_ON);
  //Condition based toggle on and off
  if(tog1 == 1){
    verifyStatusIsZero(setupVariables.AutoMastControl_Toggle_OFF);
    setupVariables.AutoMastControl_Toggle_OFF.ClickButton(cbChecked);
    verifyStatusIsOne(setupVariables.AutoMastControl_Toggle_OFF);
    setupVariables.AutoMastControl_Toggle_ON.ClickButton(cbChecked);
  } else {
    verifyStatusIsOne(setupVariables.AutoMastControl_Toggle_OFF);
    setupVariables.AutoMastControl_Toggle_ON.ClickButton(cbChecked);
    verifyStatusIsZero(setupVariables.AutoMastControl_Toggle_OFF);
    setupVariables.AutoMastControl_Toggle_OFF.ClickButton(cbChecked);
  }
  //Checks whether the 'WPFControlText' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.TextblockHammerDrill object equals 'HAMMER
  //DRILL'.
  verifyWpfControlTextWithExistCheck(setupVariables.HammerDrill_Btn_Label,"HAMMER\r\nDRILL");
  let tog2 = wstate(setupVariables.HammerDrill_Toggle_ON);
  //Condition based toggle on and off
  if(tog2 == 0){
    verifyStatusIsOne(setupVariables.HammerDrill_Toggle_OFF);
    setupVariables.HammerDrill_Toggle_ON.ClickButton(cbChecked);
    verifyStatusIsZero(setupVariables.HammerDrill_Toggle_OFF);
    setupVariables.HammerDrill_Toggle_OFF.ClickButton(cbChecked);
  } else {
    verifyStatusIsZero(setupVariables.HammerDrill_Toggle_OFF);
    setupVariables.HammerDrill_Toggle_OFF.ClickButton(cbChecked);
    verifyStatusIsOne(setupVariables.HammerDrill_Toggle_OFF);
    setupVariables.HammerDrill_Toggle_ON.ClickButton(cbChecked);
  }
  //Checks whether the 'WPFControlText' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.TextblockClayMode object equals 'CLAY
  //MODE'.
  verifyWpfControlTextWithExistCheck(setupVariables.ClayMode_Btn_Label,"CLAY\r\nMODE");
  //Checks whether the 'wState' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.ToggleButton3 object equals 0.
  let tog3 = wstate(setupVariables.ClayMode_Toogle_ON);
  if(tog3 == 0){
    verifyStatusIsOne(setupVariables.ClayMode_Toogle_OFF);
    setupVariables.ClayMode_Toogle_ON.ClickButton(cbChecked);
    verifyStatusIsZero(setupVariables.ClayMode_Toogle_OFF);
    setupVariables.ClayMode_Toogle_OFF.ClickButton(cbChecked);
  } else {
    verifyStatusIsZero(setupVariables.ClayMode_Toogle_OFF);
    setupVariables.ClayMode_Toogle_OFF.ClickButton(cbChecked);
    verifyStatusIsOne(setupVariables.ClayMode_Toogle_OFF);
    setupVariables.ClayMode_Toogle_ON.ClickButton(cbChecked);
  }
  //Checks whether the 'WPFControlText' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.TextblockPeaGravelMode object equals 'PEA GRAVEL
  //MODE'.
  verifyWpfControlTextWithExistCheck(setupVariables.PeaGravelMode_Btn_Label,"PEA GRAVEL\r\nMODE");
  //Checks whether the 'wState' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.ToggleButton4 object equals 0.
  let tog4 = wstate(setupVariables.PeaGravelMode_Toggle_ON);
  if(tog4 == 0){
    verifyStatusIsOne(setupVariables.PeaGravelMode_Toggle_OFF);
    setupVariables.PeaGravelMode_Toggle_ON.ClickButton(cbChecked);
    verifyStatusIsZero(setupVariables.PeaGravelMode_Toggle_OFF);
    setupVariables.PeaGravelMode_Toggle_OFF.ClickButton(cbChecked);
  } else {
    verifyStatusIsZero(setupVariables.PeaGravelMode_Toggle_OFF);
    setupVariables.PeaGravelMode_Toggle_OFF.ClickButton(cbChecked);
    verifyStatusIsOne(setupVariables.PeaGravelMode_Toggle_OFF);
    setupVariables.PeaGravelMode_Toggle_ON.ClickButton(cbChecked);
  }
  //Closes the 'HwndSource_MainWindow' window.
  closeHMI();
}