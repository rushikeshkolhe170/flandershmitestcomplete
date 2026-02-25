
// Verify the visibility and mouse event on the propel interlock status

const {closeHMI} = require('GlobalVariables');
const {mainOptionVariables} = require('MainOptionsVariable');
const {maint_Interlock_Variable} = require('MaintenancePage');
const {mouseScroll, logIn, checkVisibilityAndClick, verifyVisibilityWithExistCheck, verifyElementEnabled} = require('CommonFunc');

function PropelInterlockScreens()
{
  //Login into the application.
  logIn();
  //Clicks the 'MaintenanceButton' button.
  mainOptionVariables.Maint_Btn.ClickButton();
  //Clicks the 'InterlocksButton' button.
  mainOptionVariables.Interlock_Btn.ClickButton();
  //Check visibility and Clicks the 'ButtonPropelInterlockStatus' button.
  checkVisibilityAndClick(maint_Interlock_Variable.PropelInterlockStatus_Btn, "Propel Interlock Status");
  if(verifyElementEnabled(maint_Interlock_Variable.DialogueBox)){
    maint_Interlock_Variable.DialogueOK_Btn.ClickButton();
    //Throw the error because by default this file gets available in the folder
    Log.Error("Propel Interlock Screen is not available add the XML file in ScreenXMLFile folder");
  } else {
    //Rotates the mouse wheel over the 'myDiagram' object.
    aqUtils.Delay(2000);
    mouseScroll(maint_Interlock_Variable.ScreenDiagram, 10);
    aqUtils.Delay(2000);
    mouseScroll(maint_Interlock_Variable.ScreenDiagram, -10);
    //Checks whether the 'IsVisible' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.myDiagram object equals True.
    verifyVisibilityWithExistCheck(maint_Interlock_Variable.ScreenDiagram);
    //Clicks the 'btnBack' button.
    maint_Interlock_Variable.Back_Btn.ClickButton();
  }
  //Check visibility and Clicks the 'ButtonRemotePropelInterlockStatus' button.
  checkVisibilityAndClick(maint_Interlock_Variable.RemotePropelInterlockStatus_Btn, "Remote Propel Interlock Status");
  if(verifyElementEnabled(maint_Interlock_Variable.DialogueBox)){
    maint_Interlock_Variable.DialogueOK_Btn.ClickButton();
    //Throw the warning because by default this file does not get available in the folder user need to add one
    Log.Warning("Remote Propel Interlock Screen is not available add the XML file in ScreenXMLFile folder");
  } else {
    //Rotates the mouse wheel over the 'myDiagram' object.
    aqUtils.Delay(2000);
    mouseScroll(maint_Interlock_Variable.ScreenDiagram, 10);
    aqUtils.Delay(2000);
    mouseScroll(maint_Interlock_Variable.ScreenDiagram, -10);
    //Checks whether the 'IsVisible' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.myDiagram object equals True.
    verifyVisibilityWithExistCheck(maint_Interlock_Variable.ScreenDiagram);
    //Clicks the 'btnBack' button.
    maint_Interlock_Variable.Back_Btn.ClickButton();
  }
  //Check visibility and Clicks the 'ButtonAutoPropelInterlockStatus' button.
  checkVisibilityAndClick(maint_Interlock_Variable.AutoPropelInterlockStatus_Btn, "Auto Propel Interlock Status");
  if(verifyElementEnabled(maint_Interlock_Variable.DialogueBox)){
    maint_Interlock_Variable.DialogueOK_Btn.ClickButton();
    //Throw the warning because by default this file does not get available in the folder user need to add one
    Log.Warning("Auto Propel Interlock Screen is not available add the XML file in ScreenXMLFile folder");
  } else {
    //Rotates the mouse wheel over the 'myDiagram' object.
    aqUtils.Delay(2000);
    mouseScroll(maint_Interlock_Variable.ScreenDiagram, 10);
    aqUtils.Delay(2000);
    mouseScroll(maint_Interlock_Variable.ScreenDiagram, -10);
    //Checks whether the 'IsVisible' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.myDiagram object equals True.
    verifyVisibilityWithExistCheck(maint_Interlock_Variable.ScreenDiagram);
    //Clicks the 'btnBack' button.
    maint_Interlock_Variable.Back_Btn.ClickButton();
  }
  //Closes the 'HwndSource_MainWindow' window.
  closeHMI();
}
