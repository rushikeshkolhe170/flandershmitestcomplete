//Verifying the change in dashboard for Collaring Compressor Volume Command parameter and cross check in the HMI

const {config, launchHMI, closeHMI, commissioningPass, openDiagnosticDashboard, closeDiagnosticDashboard} = require('GlobalVariables');
const {logIn, browserToggleSwitchStatus, scrollIntoViewBrowser, browserAttributeValue, searchAndSelectSettingInComm, wstate, wText} = require('CommonFunc');
const {mainWindowVariables} = require('MainWindowPage');
const {Browser_Variables, Commissioning_Variables, UI_Variables, AutoDrillPara_Variables} = require('BrowserPage');

function CollaringCompressorVolumeCommand()
{
  //Checking if the HMI is open and if yes then it will close first and then open
  if(Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.Exists){
    closeHMI();
  }
  aqUtils.Delay(3000);
  //open diagnostic dashboard browser.
  openDiagnosticDashboard();
  //Clicks the 'linkCommissioning' link.
  Browser_Variables.CommissioningOption().Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageDiagnosticDashboard2.Wait();
  //Clicks the 'panelUi' control.
  Commissioning_Variables.UI_Opt().Click();
  //Clicks the 'buttonAutoDrillParameters' button.
  UI_Variables.AutoDrillParameter_Btn().Click();
  //Scroll until the Collaring Compressor Volume Command text gets in the view
  scrollIntoViewBrowser(AutoDrillPara_Variables.CollaringCompressorVolumeCommand_Panel);
  //pressing up arrow key to make panel in view and not get overlap on header options
  Browser_Variables.Page.Keys("[Up][Up][Up][Up][Up][Up][Up]");
  //Cheking the show option for Collaring Compressor Volume Command if it's off turning it on
  var showDHDStatus = browserToggleSwitchStatus(AutoDrillPara_Variables.CollaringCompressorVolumeCommandShow_Btn());
  if(showDHDStatus == 0 ){
    AutoDrillPara_Variables.CollaringCompressorVolumeCommandShow_Btn().Click();
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("Collaring Plugged Air Pressure Limit show toggle button is already ON");
  }
  //Cheking the allow decimal option for Collaring Compressor Volume Command if it's off turning it on
  var alldecimalDHDStatus = browserToggleSwitchStatus(AutoDrillPara_Variables.CollaringCompressorVolumeCommandAllowDecimal_Btn());
  if(alldecimalDHDStatus == 0 ){
    AutoDrillPara_Variables.CollaringCompressorVolumeCommandAllowDecimal_Btn().Click();
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("Collaring Compressor Volume Command allow decimal toggle button is already ON");
  }
  //Cheking the IsPercentage option for Collaring Compressor Volume Command if it's off turning it on
  var isPercentDHDStatus = browserToggleSwitchStatus(AutoDrillPara_Variables.CollaringCompressorVolumeCommandIsPercent_Btn());
  if(isPercentDHDStatus == 0 ){
    AutoDrillPara_Variables.CollaringCompressorVolumeCommandIsPercent_Btn().Click();
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("Collaring Compressor Volume Command is percentage toggle button is already ON");
  }
  //Cheking the show percentage sign option for Collaring Compressor Volume Command if it's off turning it on
  var showPercentSignDHDStatus = browserToggleSwitchStatus(AutoDrillPara_Variables.CollaringCompressorVolumeCommandshowPercentSign_Btn());
  if(showPercentSignDHDStatus == 0 ){
    AutoDrillPara_Variables.CollaringCompressorVolumeCommandshowPercentSign_Btn().Click();
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("Collaring Compressor Volume Command show percentage sign toggle button is already ON");
  }
  //Capturing the already set maximum value of Collaring Compressor Volume Command
  var maxValue = browserAttributeValue(AutoDrillPara_Variables.CollaringCompressorVolumeCommandMax_Value(), "value");
  var newMax = "700";
  if(maxValue != newMax){
    //Changing the maximum value of Collaring Compressor Volume Command
    AutoDrillPara_Variables.CollaringCompressorVolumeCommandMax_Value().Click();
    AutoDrillPara_Variables.CollaringCompressorVolumeCommandMax_Value().Keys("^a");
    AutoDrillPara_Variables.CollaringCompressorVolumeCommandMax_Value().SetText(newMax);
  }else{
    Log.Message("Not changing the maximum value as new and previous is same")
  }
  //Capturing the already set minimum value of Collaring Compressor Volume Command
  var minValue = browserAttributeValue(AutoDrillPara_Variables.CollaringCompressorVolumeCommandMin_Value(), "value");
  var newMin = "300";
  if(minValue != newMin){
    //Changing the minimum value of Collaring Compressor Volume Command
    AutoDrillPara_Variables.CollaringCompressorVolumeCommandMin_Value().Click();
    AutoDrillPara_Variables.CollaringCompressorVolumeCommandMin_Value().Keys("^a");
    AutoDrillPara_Variables.CollaringCompressorVolumeCommandMin_Value().SetText(newMin);
  }else{
    Log.Message("Not changing the minimum value as new and previous is same")
  }
  //Click on Save option
  Browser_Variables.Save_Btn().Click();
  //Click on Save for confirmation pop up
  Browser_Variables.ConfirmationSave_Btn().Click();
  //Closed HMI
  closeHMI();
  //Opening HMi client again
  logIn();
  //Opening commissioning screen of HMI
  commissioningPass();
  //searching the show option for Collaring Compressor Volume Command in commissioning and validating that it is enabled
  searchAndSelectSettingInComm("AutoDrillSetupAirPressureCollaringShow", mainWindowVariables.commCollaringCompressorVolumeCommandShow, "AutoDrillSetupAirPressureCollaringShow");
  var showOptVisibility = wstate(mainWindowVariables.CommBoolValueBox)
  if(showOptVisibility == 0){
    Log.Error("Collaring Compressor Volume Command option turned on from dashobard but it is showing OFF in the HMI commissioning");
  }
  //searching the allow decimal option for Collaring Compressor Volume Command in commissioning and validating that it is enabled
  searchAndSelectSettingInComm("AutoDrillSetupAirPressureCollaringAllowDecimal", mainWindowVariables.commCollaringCompressorVolumeCommandAllowDecimal, "AutoDrillSetupAirPressureCollaringAllowDecimal");
  var allowDecimalVisibility = wstate(mainWindowVariables.CommBoolValueBox)
  if(allowDecimalVisibility == 0){
    Log.Error("Collaring Compressor Volume Command allow decimal option turned on from dashobard but it is showing OFF in the HMI commissioning");
  }
  //searching the is percentage option for Collaring Compressor Volume Command in commissioning and validating that it is enabled
  searchAndSelectSettingInComm("AutoDrillSetupAirPressureCollaringBmode", mainWindowVariables.commCollaringCompressorVolumeCommandIsPercent, "AutoDrillSetupAirPressureCollaringBmode");
  var isPercentVisibility = wstate(mainWindowVariables.CommBoolValueBox)
  if(isPercentVisibility == 0){
    Log.Error("Collaring Compressor Volume Command is percentage option turned on from dashobard but it is showing OFF in the HMI commissioning");
  }
  //searching the show percentage sign option for Collaring Compressor Volume Command in commissioning and validating that it is enabled
  searchAndSelectSettingInComm("AutoDrillSetupAirPressureCollaringBmodeShow", mainWindowVariables.commCollaringCompressorVolumeCommandShowPercentSign, "AutoDrillSetupAirPressureCollaringBmodeShow");
  var showPercentSignVisibility = wstate(mainWindowVariables.CommBoolValueBox)
  if(showPercentSignVisibility == 0){
    Log.Error("Collaring Compressor Volume Command option show percentage sign turned on from dashobard but it is showing OFF in the HMI commissioning");
  }
  //searching the maximum option for Collaring Compressor Volume Command in commissioning and validating that it is showing correct value
  searchAndSelectSettingInComm("AutoDrillSetupAirPressureCollaringMaximum", mainWindowVariables.commCollaringCompressorVolumeCommandMaximum, "AutoDrillSetupAirPressureCollaringMaximum");
  var commMaxValue = wText(mainWindowVariables.CommFloatInputValueBox)
  if(commMaxValue != newMax){
    Log.Error("Collaring Compressor Volume Command option maximum value from dashobard is not matching with maximum value from HMI commissioning");
  }
  //searching the minimum option for Collaring Compressor Volume Command in commissioning and validating that it is showing correct value
  searchAndSelectSettingInComm("AutoDrillSetupAirPressureCollaringMinimum", mainWindowVariables.commCollaringCompressorVolumeCommandMinimum, "AutoDrillSetupAirPressureCollaringMinimum");
  var commMinValue = wText(mainWindowVariables.CommFloatInputValueBox)
  if(commMinValue != newMin){
    Log.Error("Collaring Compressor Volume Command option minimum value from dashobard is not matching with minimum value from HMI commissioning");
  }
  //Closes the 'HwndSource_SeriousWindow' window.
  mainWindowVariables.CommWindow.Close();
  //Closed HMI
  closeHMI();
  //Resetting all the values as it is
  if(showDHDStatus != browserToggleSwitchStatus(AutoDrillPara_Variables.CollaringCompressorVolumeCommandShow_Btn())){
    AutoDrillPara_Variables.CollaringCompressorVolumeCommandShow_Btn().Click();
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("No need of change toggle/value status is same");
  }
  if(alldecimalDHDStatus != browserToggleSwitchStatus(AutoDrillPara_Variables.CollaringCompressorVolumeCommandAllowDecimal_Btn())){
    AutoDrillPara_Variables.CollaringCompressorVolumeCommandAllowDecimal_Btn().Click();
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("No need of change toggle/value status is same");
  }
  if(isPercentDHDStatus != browserToggleSwitchStatus(AutoDrillPara_Variables.CollaringCompressorVolumeCommandIsPercent_Btn())){
    AutoDrillPara_Variables.CollaringCompressorVolumeCommandIsPercent_Btn().Click();
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("No need of change toggle/value status is same");
  }
  if(showPercentSignDHDStatus != browserToggleSwitchStatus(AutoDrillPara_Variables.CollaringCompressorVolumeCommandshowPercentSign_Btn())){
    AutoDrillPara_Variables.CollaringCompressorVolumeCommandshowPercentSign_Btn().Click();
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("No need of change toggle/value status is same");
  }
  if(maxValue != browserAttributeValue(AutoDrillPara_Variables.CollaringCompressorVolumeCommandMax_Value(), "value")){
    //Changing the maximum value of Collaring Compressor Volume Command
    AutoDrillPara_Variables.CollaringCompressorVolumeCommandMax_Value().Click();
    AutoDrillPara_Variables.CollaringCompressorVolumeCommandMax_Value().Keys("^a");
    AutoDrillPara_Variables.CollaringCompressorVolumeCommandMax_Value().SetText(maxValue);
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("No need of change toggle/value status is same");
  }
  if(minValue != browserAttributeValue(AutoDrillPara_Variables.CollaringCompressorVolumeCommandMin_Value(), "value")){
    //Changing the maximum value of Collaring Compressor Volume Command
    AutoDrillPara_Variables.CollaringCompressorVolumeCommandMin_Value().Click();
    AutoDrillPara_Variables.CollaringCompressorVolumeCommandMin_Value().Keys("^a");
    AutoDrillPara_Variables.CollaringCompressorVolumeCommandMin_Value().SetText(minValue);
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("No need of change toggle/value status is same");
  }
  //closing diagnostic dashboard
  closeDiagnosticDashboard();
}