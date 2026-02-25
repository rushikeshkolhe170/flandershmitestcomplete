
//Check the availability of ROD SUPPORT option in Aux Control->Rod, with checking the commissioning screen checkbox for the same

const {config, launchHMI, closeHMI, commissioningPass, maintenanceModePass} = require('GlobalVariables');
const {mainOptionVariables} = require('MainOptionsVariable');
const {mainWindowVariables} = require('MainWindowPage');
const {auxControlVariables} = require('AuxControlPage');
const {wstate, logIn, checkVisibilityAndClick, verifyWpfControlTextWithExistCheck, verifyElementEnabled, verifyElementDisabled, verifyVisibilityWithExistCheck} = require('CommonFunc');

function RodSupportVerify()
{
  //Login into the application.
  logIn();
  //Clicks the 'AuxiliaryControlButton' button.
  mainOptionVariables.AuxControl_Btn.ClickButton();
  //Selects Rod tab.
  checkVisibilityAndClick(auxControlVariables.Rod_Tab, "ROD");
  //Open commissioning screen.
  commissioningPass();
  //Clicks the 'SearchTextBox' object.
  mainWindowVariables.CommSearchBox.Click(71, 24);
  //Enters the text 'rodsupport' in the 'SearchTextBox' text editor.
  mainWindowVariables.CommSearchBox.SetText("AuxiliaryControlShowRodSupport");
  //Drags the 'HwndSource_SeriousWindow' object.
  mainWindowVariables.CommWindow.Drag(893, 238, 353, 6);
  //Clicks the AuxiliaryControlShowRodSupport item of the 'SettingsListView' list box.
  checkVisibilityAndClick(mainWindowVariables.commAuxShowRodSupport, "AuxiliaryControlShowRodSupport");
  //Get the 'wState' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_SeriousWindow.SeriousWindow.TabControl.BoolAppSettingCheckBox object.
  let aval = wstate(mainWindowVariables.CommBoolValueBox);
  if(aval == 0){
    //Sets the state of the 'BoolAppSettingCheckBox' check box to cbChecked.
    mainWindowVariables.CommBoolValueBox.ClickButton(cbChecked);
    //Clicks the 'CommitButton' button.
    mainWindowVariables.CommCommitBtn.ClickButton();
  }
  //Closes the 'HwndSource_SeriousWindow' window.
  mainWindowVariables.CommWindow.Close();
  //Checks whether the 'WPFControlText' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.TabControl.TextblockRodSupport object equals 'ROD SUPPORT'.
  verifyWpfControlTextWithExistCheck(auxControlVariables.Rod_Support_Tab, "ROD SUPPORT")
  //Closes the 'HwndSource_MainWindow' window.
  closeHMI();
}