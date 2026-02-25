
//Theme change.

const {config, launchHMI, closeHMI} = require('GlobalVariables');
const {logIn, checkVisibilityAndClick} = require('CommonFunc');
const {mainOptionVariables} = require('MainOptionsVariable');

function ThemeChange()
{
  //Login into the application.
  logIn();
  // wait
  aqUtils.Delay(2000);
  //Clicks the 'ViewStyleButton' button.
  mainOptionVariables.Theme_Btn.ClickButton();
  // wait
  aqUtils.Delay(2000);
  //Clicks the 'ViewStyleButton' button.
  mainOptionVariables.Theme_Btn.ClickButton();
  // wait
  aqUtils.Delay(2000);
  //Closes the 'HwndSource_MainWindow' window.
  closeHMI();
}
