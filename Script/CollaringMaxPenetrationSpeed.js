//Verifying the change in dashboard for Collaring Max Penetration Speed parameter and cross check in the HMI

const {config, launchHMI, closeHMI, commissioningPass, openDiagnosticDashboard, closeDiagnosticDashboard} = require('GlobalVariables');
const {logIn, browserToggleSwitchStatus, scrollIntoViewBrowser, browserAttributeValue, searchAndSelectSettingInComm, wstate, wText} = require('CommonFunc');
const {mainWindowVariables} = require('MainWindowPage');
const {Browser_Variables, Commissioning_Variables, UI_Variables, AutoDrillPara_Variables} = require('BrowserPage');

function CollaringMaxPenetrationSpeed()
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
  //Scroll until the Collaring Max Penetration Speed text gets in the view
  scrollIntoViewBrowser(AutoDrillPara_Variables.CollaringMaxPenetrationSpeed_Panel);
  //pressing up arrow key to make panel in view and not get overlap on header options
  Browser_Variables.Page.Keys("[Up][Up][Up][Up][Up][Up][Up]");
  //Cheking the show option for Collaring Max Penetration Speed if it's off turning it on
  var showDHDStatus = browserToggleSwitchStatus(AutoDrillPara_Variables.CollaringMaxPenetrationSpeedShow_Btn());
  if(showDHDStatus == 0 ){
    AutoDrillPara_Variables.CollaringMaxPenetrationSpeedShow_Btn().Click();
  }else{
    Log.Message("Collaring Max Penetration Speed show toggle button is already ON");
  }
  //Cheking the allow decimal option for Collaring Max Penetration Speed if it's off turning it on
  var alldecimalDHDStatus = browserToggleSwitchStatus(AutoDrillPara_Variables.CollaringMaxPenetrationSpeedAllowDecimal_Btn());
  if(alldecimalDHDStatus == 0 ){
    AutoDrillPara_Variables.CollaringMaxPenetrationSpeedAllowDecimal_Btn().Click();
  }else{
    Log.Message("Collaring Max Penetration Speed allow decimal toggle button is already ON");
  }
  //Cheking the IsPercentage option for Collaring Max Penetration Speed if it's off turning it on
  var isPercentDHDStatus = browserToggleSwitchStatus(AutoDrillPara_Variables.CollaringMaxPenetrationSpeedIsPercent_Btn());
  if(isPercentDHDStatus == 0 ){
    AutoDrillPara_Variables.CollaringMaxPenetrationSpeedIsPercent_Btn().Click();
  }else{
    Log.Message("Collaring Max Penetration Speed is percentage toggle button is already ON");
  }
  //Cheking the show percentage sign option for Collaring Max Penetration Speed if it's off turning it on
  var showPercentSignDHDStatus = browserToggleSwitchStatus(AutoDrillPara_Variables.CollaringMaxPenetrationSpeedShowPercentSign_Btn());
  if(showPercentSignDHDStatus == 0 ){
    AutoDrillPara_Variables.CollaringMaxPenetrationSpeedShowPercentSign_Btn().Click();
  }else{
    Log.Message("Collaring Max Penetration Speed show percentage sign toggle button is already ON");
  }
  //Capturing the already set maximum value of Collaring Max Penetration Speed
  var maxValue = browserAttributeValue(AutoDrillPara_Variables.CollaringMaxPenetrationSpeedMax_Value(), "value");
  var newMax = "675";
  if(maxValue != newMax){
    //Changing the maximum value of Collaring Max Penetration Speed
    AutoDrillPara_Variables.CollaringMaxPenetrationSpeedMax_Value().Click();
    AutoDrillPara_Variables.CollaringMaxPenetrationSpeedMax_Value().Keys("^a");
    AutoDrillPara_Variables.CollaringMaxPenetrationSpeedMax_Value().SetText(newMax);
  }else{
    Log.Message("Not changing the maximum value as new and previous is same")
  }
  //Capturing the already set minimum value of Collaring Max Penetration Speed
  var minValue = browserAttributeValue(AutoDrillPara_Variables.CollaringMaxPenetrationSpeedMin_Value(), "value");
  var newMin = "355";
  if(minValue != newMin){
    //Changing the minimum value of Collaring Max Penetration Speed
    AutoDrillPara_Variables.CollaringMaxPenetrationSpeedMin_Value().Click();
    AutoDrillPara_Variables.CollaringMaxPenetrationSpeedMin_Value().Keys("^a");
    AutoDrillPara_Variables.CollaringMaxPenetrationSpeedMin_Value().SetText(newMin);
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
  //searching the show option for Collaring Max Penetration Speed in commissioning and validating that it is enabled
  searchAndSelectSettingInComm("AutoDrillSetupShowCollaringMaxSpeed", mainWindowVariables.commCollaringMaxPenetrationSpeedShow, "AutoDrillSetupShowCollaringMaxSpeed");
  var showOptVisibility = wstate(mainWindowVariables.CommBoolValueBox)
  if(showOptVisibility == 0){
    Log.Error("Collaring Max Penetration Speed option turned on from dashobard but it is showing OFF in the HMI commissioning");
  }
  //searching the allow decimal option for Collaring Max Penetration Speed in commissioning and validating that it is enabled
  searchAndSelectSettingInComm("AutoDrillSetupCollaringmaxSpeedAllowDecimal", mainWindowVariables.commCollaringMaxPenetrationSpeedAllowDecimal, "AutoDrillSetupCollaringmaxSpeedAllowDecimal");
  var allowDecimalVisibility = wstate(mainWindowVariables.CommBoolValueBox)
  if(allowDecimalVisibility == 0){
    Log.Error("Collaring Max Penetration Speed allow decimal option turned on from dashobard but it is showing OFF in the HMI commissioning");
  }
  //searching the is percentage option for Collaring Max Penetration Speed in commissioning and validating that it is enabled
  searchAndSelectSettingInComm("AutoDrillSetupCollaringmaxSpeedBmode", mainWindowVariables.commCollaringMaxPenetrationSpeedIsPercent, "AutoDrillSetupCollaringmaxSpeedBmode");
  var isPercentVisibility = wstate(mainWindowVariables.CommBoolValueBox)
  if(isPercentVisibility == 0){
    Log.Error("Collaring Max Penetration Speed is percentage option turned on from dashobard but it is showing OFF in the HMI commissioning");
  }
  //searching the show percentage sign option for Collaring Max Penetration Speed in commissioning and validating that it is enabled
  searchAndSelectSettingInComm("AutoDrillSetupCollaringmaxSpeedBmodeShow", mainWindowVariables.commCollaringMaxPenetrationSpeedShowPercentSign, "AutoDrillSetupCollaringmaxSpeedBmodeShow");
  var showPercentSignVisibility = wstate(mainWindowVariables.CommBoolValueBox)
  if(showPercentSignVisibility == 0){
    Log.Error("Collaring Max Penetration Speed option show percentage sign turned on from dashobard but it is showing OFF in the HMI commissioning");
  }
  //searching the maximum option for Collaring Max Penetration Speed in commissioning and validating that it is showing correct value
  searchAndSelectSettingInComm("AutoDrillSetupCollaringMaxSpeedMaximum", mainWindowVariables.commCollaringMaxPenetrationSpeedMaximum, "AutoDrillSetupCollaringMaxSpeedMaximum");
  var commMaxValue = wText(mainWindowVariables.CommFloatInputValueBox)
  if(commMaxValue != newMax){
    Log.Error("Collaring Max Penetration Speed option maximum value from dashobard is not matching with maximum value from HMI commissioning");
  }
  //searching the minimum option for Collaring Max Penetration Speed in commissioning and validating that it is showing correct value
  searchAndSelectSettingInComm("AutoDrillSetupCollaringMaxSpeedMinimum", mainWindowVariables.commCollaringMaxPenetrationSpeedMinimum, "AutoDrillSetupCollaringMaxSpeedMinimum");
  var commMinValue = wText(mainWindowVariables.CommFloatInputValueBox)
  if(commMinValue != newMin){
    Log.Error("Collaring Max Penetration Speed option minimum value from dashobard is not matching with minimum value from HMI commissioning");
  }
  //Closes the 'HwndSource_SeriousWindow' window.
  mainWindowVariables.CommWindow.Close();
  //Closed HMI
  closeHMI();
  //Turning off show option
  AutoDrillPara_Variables.CollaringMaxPenetrationSpeedShow_Btn().Click();
  //Turning off allow decimal option
  AutoDrillPara_Variables.CollaringMaxPenetrationSpeedAllowDecimal_Btn().Click();
  //Turning off is percentage option
  AutoDrillPara_Variables.CollaringMaxPenetrationSpeedIsPercent_Btn().Click();
  //Turning off show percentage sign option
  AutoDrillPara_Variables.CollaringMaxPenetrationSpeedShowPercentSign_Btn().Click();
  //Click on Save option
  Browser_Variables.Save_Btn().Click();
  //Click on Save for confirmation pop up
  Browser_Variables.ConfirmationSave_Btn().Click();
  //Opening HMi client again
  logIn();
  //Opening commissioning screen of HMI
  commissioningPass();
  //searching the show option for Collaring Max Penetration Speed in commissioning and validating that it is disabled
  searchAndSelectSettingInComm("AutoDrillSetupShowCollaringMaxSpeed", mainWindowVariables.commCollaringMaxPenetrationSpeedShow, "AutoDrillSetupShowCollaringMaxSpeed");
  var show = wstate(mainWindowVariables.CommBoolValueBox)
  if(show == 1){
    Log.Error("Collaring Max Penetration Speed option turned Off from dashobard but it is showing On in the HMI commissioning");
  }
  //searching the allow decimal option for Collaring Max Penetration Speed in commissioning and validating that it is disabled
  searchAndSelectSettingInComm("AutoDrillSetupCollaringmaxSpeedAllowDecimal", mainWindowVariables.commCollaringMaxPenetrationSpeedAllowDecimal, "AutoDrillSetupCollaringmaxSpeedAllowDecimal");
  var allowDecimal = wstate(mainWindowVariables.CommBoolValueBox)
  if(allowDecimal == 1){
    Log.Error("Collaring Max Penetration Speed allow decimal option turned Off from dashobard but it is showing On in the HMI commissioning");
  }
  //searching the is percentage option for Collaring Max Penetration Speed in commissioning and validating that it is disabled
  searchAndSelectSettingInComm("AutoDrillSetupCollaringmaxSpeedBmode", mainWindowVariables.commCollaringMaxPenetrationSpeedIsPercent, "AutoDrillSetupCollaringmaxSpeedBmode");
  var isPercent = wstate(mainWindowVariables.CommBoolValueBox)
  if(isPercent == 1){
    Log.Error("Collaring Max Penetration Speed is percentage option turned Off from dashobard but it is showing On in the HMI commissioning");
  }
  //searching the show percentage sign option for Collaring Max Penetration Speed in commissioning and validating that it is disabled
  searchAndSelectSettingInComm("AutoDrillSetupCollaringmaxSpeedBmodeShow", mainWindowVariables.commCollaringMaxPenetrationSpeedShowPercentSign, "AutoDrillSetupCollaringmaxSpeedBmodeShow");
  var showPercentSign = wstate(mainWindowVariables.CommBoolValueBox)
  if(showPercentSign == 1){
    Log.Error("Collaring Max Penetration Speed option show percentage sign turned Off from dashobard but it is showing On in the HMI commissioning");
  }
  //Closes the 'HwndSource_SeriousWindow' window.
  mainWindowVariables.CommWindow.Close();
  //Closed HMI
  closeHMI();
  //Resetting all the values as it is
  if(showDHDStatus != browserToggleSwitchStatus(AutoDrillPara_Variables.CollaringMaxPenetrationSpeedShow_Btn())){
    AutoDrillPara_Variables.CollaringMaxPenetrationSpeedShow_Btn().Click();
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("No need of change show status it is same");
  }
  if(alldecimalDHDStatus != browserToggleSwitchStatus(AutoDrillPara_Variables.CollaringMaxPenetrationSpeedAllowDecimal_Btn())){
    AutoDrillPara_Variables.CollaringMaxPenetrationSpeedAllowDecimal_Btn().Click();
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("No need of change allow decimal status it is same");
  }
  if(isPercentDHDStatus != browserToggleSwitchStatus(AutoDrillPara_Variables.CollaringMaxPenetrationSpeedIsPercent_Btn())){
    AutoDrillPara_Variables.CollaringMaxPenetrationSpeedIsPercent_Btn().Click();
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("No need of change is percent status it is same");
  }
  if(showPercentSignDHDStatus != browserToggleSwitchStatus(AutoDrillPara_Variables.CollaringMaxPenetrationSpeedShowPercentSign_Btn())){
    AutoDrillPara_Variables.CollaringMaxPenetrationSpeedShowPercentSign_Btn().Click();
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("No need of change show percent sign status it is same");
  }
  if(maxValue != browserAttributeValue(AutoDrillPara_Variables.CollaringMaxPenetrationSpeedMax_Value(), "value")){
    //Changing the maximum value of Collaring Max Penetration Speed
    AutoDrillPara_Variables.CollaringMaxPenetrationSpeedMax_Value().Click();
    AutoDrillPara_Variables.CollaringMaxPenetrationSpeedMax_Value().Keys("^a");
    AutoDrillPara_Variables.CollaringMaxPenetrationSpeedMax_Value().SetText(maxValue);
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("No need of change maximum value it is same");
  }
  if(minValue != browserAttributeValue(AutoDrillPara_Variables.CollaringMaxPenetrationSpeedMin_Value(), "value")){
    //Changing the maximum value of Collaring Max Penetration Speed
    AutoDrillPara_Variables.CollaringMaxPenetrationSpeedMin_Value().Click();
    AutoDrillPara_Variables.CollaringMaxPenetrationSpeedMin_Value().Keys("^a");
    AutoDrillPara_Variables.CollaringMaxPenetrationSpeedMin_Value().SetText(minValue);
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("No need of change minimum value it is same");
  }
  //closing diagnostic dashboard
  closeDiagnosticDashboard();
}