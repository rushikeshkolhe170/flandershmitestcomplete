
// Verifying the visibility of Current Date, Current Time, Logo and Version on the screen.
// Verifying the Drill Number with validation from global script and Hole number visibility.

const {config, launchHMI, closeHMI} = require('GlobalVariables');
const {logIn, verifyVisibilityWithExistCheck, wpfControlName} = require('CommonFunc');
const {mainWindowVariables} = require('MainWindowPage');

function DateTimeVerandLogo()
{
  //Login into the application.
  logIn();
  //Checks whether the 'IsVisible' property of the Date and Time object equals True.
  verifyVisibilityWithExistCheck(mainWindowVariables.DateAndTime);
  //Checks whether the 'IsVisible' property of the Flanders Logo object equals True.
  verifyVisibilityWithExistCheck(mainWindowVariables.Flanders_Logo);
  //Checks whether the 'IsVisible' property of the Version Number object equals True.
  verifyVisibilityWithExistCheck(mainWindowVariables.Version_Number);
  //Closes the 'HwndSource_MainWindow' window.
  closeHMI();
}

function DrillAndHoleNumber()
{
  //Login into the application.
  logIn();
  //Checks whether the 'IsVisible' property of the Drill Number label object equals True.
  verifyVisibilityWithExistCheck(mainWindowVariables.DrillNumber_Label);
  //verifying the drill number
  if(mainWindowVariables.DrillNumber_Box.ChildCount == 1){
    aqObject.CheckProperty(mainWindowVariables.DrillNumber_Box.Child(0), "WPFControlText", cmpEqual, "DR"+config.drillNo);
  }
  //Checks whether the 'IsVisible' property of the Hole Number label object equals True.
  verifyVisibilityWithExistCheck(mainWindowVariables.HoleNumber_Label);
  //Checks whether the 'IsVisible' property of the Hole Number child object equals True.
  verifyVisibilityWithExistCheck(mainWindowVariables.HoleNumber_Box.Child(0)); 
  //Closes the 'HwndSource_MainWindow' window.
  closeHMI();
}