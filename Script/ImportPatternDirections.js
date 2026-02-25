
// Verifying the Directions available on the screen of Import Pattern

const {config, launchHMI, closeHMI} = require('GlobalVariables');
const {logIn, verifyWpfControlTextWithExistCheck} = require('CommonFunc');
const {mainOptionVariables} = require('MainOptionsVariable');
const {setupVariables} = require('SetupPage');

function ImportPatternDirections()
{
  //Stroing Directions in the variable
  var Directions = "Directions:\r\nSelect the file to import and click IMPORT.\r\nPatterns and boundaries may be in the same file or separate files.\r\nAppend will add to the existing pattern data.\r\nReplace will remove existing pattern data.";
  //Runs the "Flanders_Ardvarc_Hmi_Client" tested application.
  logIn();
  //Clicks the 'SetupButton' button.
  mainOptionVariables.Setup_Btn.ClickButton();
  //Clicks the 'ButtonImportPattern' button.
  setupVariables.ImportPattern_Btn.ClickButton();
  //Capturing the Directions text element
  var Direction_Ele = setupVariables.PatternImportDirections.StackPanel.Border.Child(0).Child(0);
  //Verify if the directions on the screen are correct.
  verifyWpfControlTextWithExistCheck(Direction_Ele, Directions);
  //Clicks the 'MoveBack' object.
  setupVariables.Back_Btn.Click();
  //Closes the 'HwndSource_MainWindow' window.
  closeHMI();
}