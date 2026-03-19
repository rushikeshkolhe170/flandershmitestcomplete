
//Check the availability of ROD SUPPORT option in Aux Control->Rod, with checking the commissioning screen checkbox for the same

const {config, launchHMI, closeHMI, commissioningPass, maintenanceModePass} = require('GlobalVariables');
const {mainOptionVariables} = require('MainOptionsVariable');
const {mainWindowVariables} = require('MainWindowPage');
const {auxControlVariables} = require('AuxControlPage');
const {wstate, logIn, searchAndSelectCheckboxComm, checkVisibilityAndClick, verifyWpfControlTextWithExistCheck, verifyElementEnabled, verifyElementDisabled, verifyVisibilityWithExistCheck} = require('CommonFunc');

function RodSupportVerify()
{
  //Login into the application.
  logIn();
  //Clicks the 'AuxiliaryControlButton' button.
  mainOptionVariables.AuxControl_Btn.ClickButton();
  //Selects Rod tab.
  checkVisibilityAndClick(auxControlVariables.Rod_Tab, "ROD");
  //Open commissioning screen and select few options.
  commissioningPass();
  searchAndSelectCheckboxComm("AuxiliaryControlShowRodSupport", mainWindowVariables.commAuxShowRodSupport, "AuxiliaryControlShowRodSupport");
  searchAndSelectCheckboxComm("AuxiliaryControlShowRodSupportAuto", mainWindowVariables.commAuxRodSupportAuto, "AuxiliaryControlShowRodSupportAuto");
  searchAndSelectCheckboxComm("AuxiliaryControlShowSecondaryRodSupportTop", mainWindowVariables.commAuxSecRodSupportTop, "AuxiliaryControlShowSecondaryRodSupportTop");
  searchAndSelectCheckboxComm("AuxiliaryControlShowSecondaryRodSupportBottom", mainWindowVariables.commAuxSecRodSupportBottom, "AuxiliaryControlShowSecondaryRodSupportBottom");
  //Closes the 'HwndSource_SeriousWindow' window.
  mainWindowVariables.CommWindow.Close();
  //Checks whether the 'WPFControlText' property of the LowerRodSupport object equals 'LOWER ROD SUPPORT'.
  verifyWpfControlTextWithExistCheck(auxControlVariables.Rod_LowerRodSupport_Box, "LOWER ROD SUPPORT");
  //Checks whether the 'WPFControlText' property of the UpperRodSupport object equals 'UPPER ROD SUPPORT'.
  verifyWpfControlTextWithExistCheck(auxControlVariables.Rod_UpperRodSupport_Box, "UPPER ROD SUPPORT ");
  //Closes the 'HwndSource_MainWindow' window.
  closeHMI();
}