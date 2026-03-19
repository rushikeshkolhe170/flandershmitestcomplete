
//Enabling and Disabling few options from commssioning for Rod section with validation

const {config, launchHMI, closeHMI, commissioningPass} = require('GlobalVariables');
const {mainOptionVariables} = require('MainOptionsVariable');
const {mainWindowVariables} = require('MainWindowPage');
const {auxControlVariables} = require('AuxControlPage');
const {logIn, verifyWpfControlTextWithExistCheck, visibilityInBooleanStatus, searchAndSelectCheckboxComm, searchAndDeselectCheckboxComm, checkVisibilityAndClick, clickAndHoldButton} = require('CommonFunc');

function AuxControlRod()
{
  //Login into the application.
  logIn();
  //Clicks the 'AuxiliaryControlButton' button.
  mainOptionVariables.AuxControl_Btn.ClickButton();
  //Selects Rod tab.
  checkVisibilityAndClick(auxControlVariables.Rod_Tab, "ROD");
  //Clicks the 'ButtonSetupMode' button.
  auxControlVariables.Setup_Btn.ClickButton();
  //Opening commissioning setting
  commissioningPass();
  //Searching for 'AuxiliaryControlShowDeckFork' button and select the checkbox if not selected
  searchAndSelectCheckboxComm("AuxiliaryControlShowDeckFork", mainWindowVariables.commDeckFork, "AuxiliaryControlShowDeckFork");
  //Searching for 'AuxiliaryControlShowRodSupport' button and select the checkbox if not selected
  searchAndSelectCheckboxComm("AuxiliaryControlShowRodSupport", mainWindowVariables.commAuxShowRodSupport, "AuxiliaryControlShowRodSupport");
  //Searching for 'AuxiliaryControlShowSecondaryRodSupportTop' button and select the checkbox if not selected
  searchAndSelectCheckboxComm("AuxiliaryControlShowSecondaryRodSupportTop", mainWindowVariables.commSecRodSupportTop, "AuxiliaryControlShowSecondaryRodSupportTop");
  //Searching for 'AuxiliaryControlShowSecondaryRodSupportBottom' button and select the checkbox if not selected
  searchAndSelectCheckboxComm("AuxiliaryControlShowSecondaryRodSupportBottom", mainWindowVariables.commSecRodSupportBottom, "AuxiliaryControlShowSecondaryRodSupportBottom");
  //Searching for 'AuxiliaryControlShowPipeGateArm' button and select the checkbox if not selected
  searchAndSelectCheckboxComm("AuxiliaryControlShowPipeGateArm", mainWindowVariables.commPipeGateArm, "AuxiliaryControlShowPipeGateArm");
  //Searching for 'AuxiliaryControlshowPipeRack' button and select the checkbox if not selected
  searchAndSelectCheckboxComm("AuxiliaryControlshowPipeRack", mainWindowVariables.commPipeRack, "AuxiliaryControlshowPipeRack");
  //Searching for 'AuxiliaryControlShowBreakoutWrench' button and select the checkbox if not selected
  searchAndSelectCheckboxComm("AuxiliaryControlShowBreakoutWrench", mainWindowVariables.commBreakoutWrench, "AuxiliaryControlShowBreakoutWrench");
  //Searching for 'AuxiliaryControlShowBreakoutWrenchUp' button and select the checkbox if not selected
  searchAndSelectCheckboxComm("AuxiliaryControlShowBreakoutWrenchUp", mainWindowVariables.commBreakoutWrenchUp, "AuxiliaryControlShowBreakoutWrenchUp");
  //Closes the 'HwndSource_SeriousWindow' window.
  mainWindowVariables.CommWindow.Close();
  //Checks whether the 'WPFControlText' property of the Deck Fork object equals 'DECK FORK'.
  verifyWpfControlTextWithExistCheck(auxControlVariables.Rod_DeckFork_Label, "DECK FORK");
  //Checks whether the 'WPFControlText' property of the DeckFork Clamp object equals 'CLAMP'.
  verifyWpfControlTextWithExistCheck(auxControlVariables.DeckFork_Clamp, "CLAMP");
  //Checks whether the 'WPFControlText' property of the DeckFork Unclamp object equals 'UNCLAMP'.
  verifyWpfControlTextWithExistCheck(auxControlVariables.DeckFork_Unclamp, "UNCLAMP");
  //Checks whether the 'WPFControlText' property of the Lower Rod Support object equals 'LOWER ROD SUPPORT'.
  verifyWpfControlTextWithExistCheck(auxControlVariables.Rod_LowerRodSupport_Box, "LOWER ROD SUPPORT");
  //Checks whether the 'WPFControlText' property of the Lower Rod Stow object equals 'STOW'.
  verifyWpfControlTextWithExistCheck(auxControlVariables.LowerRod_StowBtn, "STOW");
  //Checks whether the 'WPFControlText' property of the Lower Rod Deploy object equals 'DEPLOY'.
  verifyWpfControlTextWithExistCheck(auxControlVariables.LowerRod_DeployBtn, "DEPLOY");
  //Changing status of the lower rod support
  var status, status1, status2;
  var criticalBtn = auxControlVariables.CriticalMsg_OK_Btn;
  if(visibilityInBooleanStatus(auxControlVariables.Rod_LowerRodSupport_Box.Child(0).Child(0).Child(4).Child(1).Child(0).Child(4)) == true){
    status = "STOWED";
  } else if(visibilityInBooleanStatus(auxControlVariables.Rod_LowerRodSupport_Box.Child(0).Child(0).Child(4).Child(1).Child(0).Child(3)) == true){
    status = "DEPLOYED";
  } else {
    Log.Error("Status is incorrect for lower rod support");
  }
  if(status == "STOWED"){
    clickAndHoldButton(auxControlVariables.LowerRod_DeployBtn);
    aqUtils.Delay(5000);
    if(visibilityInBooleanStatus(auxControlVariables.Rod_LowerRodSupport_Box.Child(0).Child(0).Child(4).Child(1).Child(0).Child(3)) == true){
    status1 = "DEPLOYED";
  } else {
    Log.Error("Status did not change");
  }
    if (criticalBtn.Exists && criticalBtn.IsVisible) {
    Log.Error("Critical message shows");
  }
    clickAndHoldButton(auxControlVariables.LowerRod_StowBtn);
  } else if (status == "DEPLOYED"){
    clickAndHoldButton(auxControlVariables.LowerRod_StowBtn);
    aqUtils.Delay(5000);
    if(visibilityInBooleanStatus(auxControlVariables.Rod_LowerRodSupport_Box.Child(0).Child(0).Child(4).Child(1).Child(0).Child(4)) == true){
    status2 = "STOWED";
  } else {
    Log.Error("Status did not change");
  }
  if (criticalBtn.Exists && criticalBtn.IsVisible) {
    Log.Error("Critical message shows");
  }
    clickAndHoldButton(auxControlVariables.LowerRod_DeployBtn);
  }
  //Checks whether the 'WPFControlText' property of the Upper Rod Support object equals 'UPPER ROD SUPPORT '.
  verifyWpfControlTextWithExistCheck(auxControlVariables.Rod_UpperRodSupport_Box, "UPPER ROD SUPPORT ");
  //Checks whether the 'WPFControlText' property of the Upper Rod Stow object equals 'STOW'.
  verifyWpfControlTextWithExistCheck(auxControlVariables.UpperRod_StowBtn, "STOW");
  //Checks whether the 'WPFControlText' property of the Upper Rod Deploy object equals 'DEPLOY'.
  verifyWpfControlTextWithExistCheck(auxControlVariables.UpperRod_DeployBtn, "DEPLOY");
  //Checks whether the 'WPFControlText' property of the Pipe Gate Arm object equals 'PIPE GATE ARM'.
  verifyWpfControlTextWithExistCheck(auxControlVariables.Rod_PipeGateArm_Box, "PIPE GATE ARM");
  //Checks whether the 'WPFControlText' property of the Pipe Gate Arm Up object equals 'UP'.
  verifyWpfControlTextWithExistCheck(auxControlVariables.PipeGateArm_UpBtn, "UP");
  //Checks whether the 'WPFControlText' property of the Pipe Gate Arm Down object equals 'DOWN'.
  verifyWpfControlTextWithExistCheck(auxControlVariables.PipeGateArm_DownBtn, "DOWN");
  //Checks whether the 'WPFControlText' property of the PIPE RACK object equals 'PIPE RACK'.
  verifyWpfControlTextWithExistCheck(auxControlVariables.Rod_PipeRack_Box, "PIPE RACK");
  //Checks whether the 'WPFControlText' property of the PIPE RACK Deploy object equals 'DEPLOY'.
  verifyWpfControlTextWithExistCheck(auxControlVariables.PipeRack_DeplyBtn, "DEPLOY");
  //Checks whether the 'WPFControlText' property of the PIPE RACK Stow object equals 'STOW'.
  verifyWpfControlTextWithExistCheck(auxControlVariables.PipeRack_StowBtn, "STOW");
  //Checks whether the 'WPFControlText' property of the Pipe Rack Selector object equals 'Pipe Rack Selector'.
  verifyWpfControlTextWithExistCheck(auxControlVariables.PipeRackSelector_Label, "Pipe Rack Selector");
  //Checks whether the 'WPFControlText' property of the Select Rack One object equals 'Select Rack One'.
  verifyWpfControlTextWithExistCheck(auxControlVariables.RackOneSelect_Btn, "Select Rack One");
  //Checks whether the 'WPFControlText' property of the Select Rack Two object equals 'Select Rack Two'.
  verifyWpfControlTextWithExistCheck(auxControlVariables.RackTwoSelect_Btn, "Select Rack Two");
  //Checks whether the 'WPFControlText' property of the BREAKOUT WRENCH object equals 'BREAKOUT WRENCH'.
  verifyWpfControlTextWithExistCheck(auxControlVariables.Rod_BreakoutWrench_Box, "BREAKOUT WRENCH");
  //Checks whether the 'WPFControlText' property of the BREAKOUT WRENCH Deploy object equals 'DEPLOY'.
  verifyWpfControlTextWithExistCheck(auxControlVariables.BreakoutWrench_DeployBtn, "DEPLOY");
  //Checks whether the 'WPFControlText' property of the BREAKOUT WRENCH Stow object equals 'STOW'.
  verifyWpfControlTextWithExistCheck(auxControlVariables.BreakoutWrench_StowBtn, "STOW");
  //Checks whether the 'WPFControlText' property of the BREAKOUT WRENCH UP object equals 'UP'.
  verifyWpfControlTextWithExistCheck(auxControlVariables.BreakoutWrench_UpBtn, "UP");
  //Checks whether the 'WPFControlText' property of the BREAKOUT WRENCH DOWN object equals 'DOWN'.
  verifyWpfControlTextWithExistCheck(auxControlVariables.BreakoutWrench_DownBtn, "DOWN");
  //Closes the 'HwndSource_MainWindow' window.
  closeHMI();
}
