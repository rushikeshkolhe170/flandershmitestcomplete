
//Verifying Lock Unlock for few options

const {config, launchHMI, closeHMI, commissioningPass, maintenanceModePass} = require('GlobalVariables');
const {mainOptionVariables} = require('MainOptionsVariable');
const {mainWindowVariables} = require('MainWindowPage');
const {auxControlVariables} = require('AuxControlPage');
const {searchAndSelectCheckboxComm, visibilityInBooleanStatus, clickAndHoldButton, criticalMsgOk, logIn, checkVisibilityAndClick, verifyWpfControlTextWithExistCheck, verifyVisibilityWithExistCheck} = require('CommonFunc');

function Test1()
{
  //Login into the application.
  logIn();
  //Clicks the 'AuxiliaryControlButton' button.
  mainOptionVariables.AuxControl_Btn.ClickButton();
  //Selects Mast tab.
  checkVisibilityAndClick(auxControlVariables.Mast_Tab, "Mast");
  //Clicks the 'ButtonSetupMode' button.
  auxControlVariables.Setup_Btn.ClickButton();
  //Checks whether the 'WPFControlText' property of the SetupModeActive object equals 'SETUP MODE ACTIVE'.
  verifyWpfControlTextWithExistCheck(mainWindowVariables.SetupMode_Active_Text, "SETUP MODE ACTIVE");
  //Open commissioning screen.
  commissioningPass();
  //Showing 'AuxiliaryControlShowMastBracePin' from commisshioning
  searchAndSelectCheckboxComm("AuxiliaryControlShowMastBracePin", mainWindowVariables.commAuxShowMastBrace, "AuxiliaryControlShowMastBracePin");
  //Closes the 'HwndSource_SeriousWindow' window.
  mainWindowVariables.CommWindow.Close();
  //Clicks the 'MastVerticalLockPinLock' button.
  clickAndHoldButton(auxControlVariables.MastVerticalLockPinLock_Btn);
  if(visibilityInBooleanStatus(auxControlVariables.CriticalMsg_OK_Btn) == true){
    criticalMsgOk();
  }
  //Clicks the 'MastVerticalLockPinUnlock' button.
  clickAndHoldButton(auxControlVariables.MastVerticalLockPinUnlock_Btn);
  if(visibilityInBooleanStatus(auxControlVariables.CriticalMsg_OK_Btn) == true){
    criticalMsgOk();
  }/*
  //Clicks the 'MastAngleLockPinLock' button.
  clickAndHoldButton(auxControlVariables.MastAngleLockPinLock_Btn);
  if(visibilityInBooleanStatus(auxControlVariables.CriticalMsg_OK_Btn) == true){
    criticalMsgOk();
  }
  //Clicks the 'MastAngleLockPinUnlock' button.
  clickAndHoldButton(auxControlVariables.MastAngleLockPinUnlock_Btn);
  if(visibilityInBooleanStatus(auxControlVariables.CriticalMsg_OK_Btn) == true){
    criticalMsgOk();
  }*/
  //Clicks the 'MastBraceLockPinLock' button.
  clickAndHoldButton(auxControlVariables.MastBraceLockPinLock_Btn);
  if(visibilityInBooleanStatus(auxControlVariables.CriticalMsg_OK_Btn) == true){
    criticalMsgOk();
  }
  //Clicks the 'MastBraceLockPinUnlock' button.
  clickAndHoldButton(auxControlVariables.MastBraceLockPinUnlock_Btn);
  if(visibilityInBooleanStatus(auxControlVariables.CriticalMsg_OK_Btn) == true){
    criticalMsgOk();
  }
  //Closes the 'HwndSource_MainWindow' window.
  closeHMI();
}
