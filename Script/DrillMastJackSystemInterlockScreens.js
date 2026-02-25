
// Verify the visibility and mouse event on the Drill interlock, Mast Interlock and Jack System Interlock status

const {closeHMI} = require('GlobalVariables');
const {mainOptionVariables} = require('MainOptionsVariable');
const {maint_Interlock_Variable} = require('MaintenancePage');
const {mouseScroll, logIn, checkVisibilityAndClick, verifyVisibilityWithExistCheck, verifyElementEnabled} = require('CommonFunc');

function DrillMastJackSystemInterlock()
{
  //Login into the application.
  logIn();
  //Clicks the 'MaintenanceButton' button.
  mainOptionVariables.Maint_Btn.ClickButton();
  //Clicks the 'InterlocksButton' button.
  mainOptionVariables.Interlock_Btn.ClickButton();
  //Check visibility and Clicks the 'ButtonAutoDrillInterlockStatus' button.
  checkVisibilityAndClick(maint_Interlock_Variable.AutoDrillInterlockStatus_Btn, "Auto Drill Interlock Status");
  if(verifyElementEnabled(maint_Interlock_Variable.DialogueBox)){
    maint_Interlock_Variable.DialogueOK_Btn.ClickButton();
    //Throw the error because by default this file gets available in the folder
    Log.Error("Auto Drill Interlock Screen is not available add the XML file in ScreenXMLFile folder");
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
  //Check visibility and Clicks the 'ButtonMastInterlockStatus' button.
  checkVisibilityAndClick(maint_Interlock_Variable.MastInterlockStatus_Btn, "Mast Interlock Status");
  if(verifyElementEnabled(maint_Interlock_Variable.DialogueBox)){
    maint_Interlock_Variable.DialogueOK_Btn.ClickButton();
    //Throw the warning because by default this file does not get available in the folder user need to add one
    Log.Warning("Mast Interlock Screen is not available add the XML file in ScreenXMLFile folder");
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
  //Check visibility and Clicks the 'ButtonJackSystemInterlockStatus' button.
  checkVisibilityAndClick(maint_Interlock_Variable.JackSystemInterlockStatus_Btn, "Jack System Interlock Status");
  if(verifyElementEnabled(maint_Interlock_Variable.DialogueBox)){
    maint_Interlock_Variable.DialogueOK_Btn.ClickButton();
    //Throw the warning because by default this file does not get available in the folder user need to add one
    Log.Warning("Jack System Interlock Screen is not available add the XML file in ScreenXMLFile folder");
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