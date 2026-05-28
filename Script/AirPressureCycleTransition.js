//Verifying the change in dashboard for Air Pressure Cycle Transition parameter and cross check in the HMI

const {config, launchHMI, closeHMI, commissioningPass, openDiagnosticDashboard, closeDiagnosticDashboard} = require('GlobalVariables');
const {logIn, browserToggleSwitchStatus, scrollIntoViewBrowser, browserAttributeValue, searchAndSelectSettingInComm, wstate, wText} = require('CommonFunc');
const {mainWindowVariables} = require('MainWindowPage');
const {Browser_Variables, Commissioning_Variables, UI_Variables, AutoDrillPara_Variables} = require('BrowserPage');

function AirPressureCycleTransition()
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
  //Scroll until the Air Pressure Cycle Transition text gets in the view
  scrollIntoViewBrowser(AutoDrillPara_Variables.AirPressureCycleTransition_Panel);
  //pressing up arrow key to make panel in view and not get overlap on header options
  Browser_Variables.Page.Keys("[Up][Up][Up][Up][Up][Up][Up]");
  //Cheking the show option for Air Pressure Cycle Transition if it's off turning it on
  var showDHDStatus = browserToggleSwitchStatus(AutoDrillPara_Variables.AirPressureCycleTransitionShow_Btn());
  if(showDHDStatus == 0 ){
    AutoDrillPara_Variables.AirPressureCycleTransitionShow_Btn().Click();
  }else{
    Log.Message("Air Pressure Cycle Transition show toggle button is already ON");
  }
  //Cheking the allow decimal option for Air Pressure Cycle Transition if it's off turning it on
  var alldecimalDHDStatus = browserToggleSwitchStatus(AutoDrillPara_Variables.AirPressureCycleTransitionAllowDecimal_Btn());
  if(alldecimalDHDStatus == 0 ){
    AutoDrillPara_Variables.AirPressureCycleTransitionAllowDecimal_Btn().Click();
  }else{
    Log.Message("Air Pressure Cycle Transition allow decimal toggle button is already ON");
  }
  //Cheking the IsPercentage option for Air Pressure Cycle Transition if it's off turning it on
  var isPercentDHDStatus = browserToggleSwitchStatus(AutoDrillPara_Variables.AirPressureCycleTransitionIsPercent_Btn());
  if(isPercentDHDStatus == 0 ){
    AutoDrillPara_Variables.AirPressureCycleTransitionIsPercent_Btn().Click();
  }else{
    Log.Message("Air Pressure Cycle Transition is percentage toggle button is already ON");
  }
  //Cheking the show percentage sign option for Air Pressure Cycle Transition if it's off turning it on
  var showPercentSignDHDStatus = browserToggleSwitchStatus(AutoDrillPara_Variables.AirPressureCycleTransitionShowPercentSign_Btn());
  if(showPercentSignDHDStatus == 0 ){
    AutoDrillPara_Variables.AirPressureCycleTransitionShowPercentSign_Btn().Click();
  }else{
    Log.Message("Air Pressure Cycle Transition show percentage sign toggle button is already ON");
  }
  //Capturing the already set maximum value of Air Pressure Cycle Transition
  var maxValue = browserAttributeValue(AutoDrillPara_Variables.AirPressureCycleTransitionMax_Value(), "value");
  var newMax = "850";
  if(maxValue != newMax){
    //Changing the maximum value of Air Pressure Cycle Transition
    AutoDrillPara_Variables.AirPressureCycleTransitionMax_Value().Click();
    AutoDrillPara_Variables.AirPressureCycleTransitionMax_Value().Keys("^a");
    AutoDrillPara_Variables.AirPressureCycleTransitionMax_Value().SetText(newMax);
  }else{
    Log.Message("Not changing the maximum value as new and previous is same")
  }
  //Capturing the already set minimum value of Air Pressure Cycle Transition
  var minValue = browserAttributeValue(AutoDrillPara_Variables.AirPressureCycleTransitionMin_Value(), "value");
  var newMin = "350";
  if(minValue != newMin){
    //Changing the minimum value of Air Pressure Cycle Transition
    AutoDrillPara_Variables.AirPressureCycleTransitionMin_Value().Click();
    AutoDrillPara_Variables.AirPressureCycleTransitionMin_Value().Keys("^a");
    AutoDrillPara_Variables.AirPressureCycleTransitionMin_Value().SetText(newMin);
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
  //searching the show option for Air Pressure Cycle Transition in commissioning and validating that it is enabled
  searchAndSelectSettingInComm("AutoDrillSetupAirPressureCycleTransitionShow", mainWindowVariables.commAirPressureCycleTransitionShow, "AutoDrillSetupAirPressureCycleTransitionShow");
  var showOptVisibility = wstate(mainWindowVariables.CommBoolValueBox)
  if(showOptVisibility == 0){
    Log.Error("Air Pressure Cycle Transition option turned on from dashobard but it is showing OFF in the HMI commissioning");
  }
  //searching the allow decimal option for Air Pressure Cycle Transition in commissioning and validating that it is enabled
  searchAndSelectSettingInComm("AutoDrillSetupAirPressureCycleTransitionAllowDecimal", mainWindowVariables.commAirPressureCycleTransitionAllowDecimal, "AutoDrillSetupAirPressureCycleTransitionAllowDecimal");
  var allowDecimalVisibility = wstate(mainWindowVariables.CommBoolValueBox)
  if(allowDecimalVisibility == 0){
    Log.Error("Air Pressure Cycle Transition allow decimal option turned on from dashobard but it is showing OFF in the HMI commissioning");
  }
  //searching the is percentage option for Air Pressure Cycle Transition in commissioning and validating that it is enabled
  searchAndSelectSettingInComm("AutoDrillSetupAirPressureCycleTransitionBmode", mainWindowVariables.commAirPressureCycleTransitionIsPercent, "AutoDrillSetupAirPressureCycleTransitionBmode");
  var isPercentVisibility = wstate(mainWindowVariables.CommBoolValueBox)
  if(isPercentVisibility == 0){
    Log.Error("Air Pressure Cycle Transition is percentage option turned on from dashobard but it is showing OFF in the HMI commissioning");
  }
  //searching the show percentage sign option for Air Pressure Cycle Transition in commissioning and validating that it is enabled
  searchAndSelectSettingInComm("AutoDrillSetupAirPressureCycleTransitionBmodeShow", mainWindowVariables.commAirPressureCycleTransitionShowPercentSign, "AutoDrillSetupAirPressureCycleTransitionBmodeShow");
  var showPercentSignVisibility = wstate(mainWindowVariables.CommBoolValueBox)
  if(showPercentSignVisibility == 0){
    Log.Error("Air Pressure Cycle Transition option show percentage sign turned on from dashobard but it is showing OFF in the HMI commissioning");
  }
  //searching the maximum option for Air Pressure Cycle Transition in commissioning and validating that it is showing correct value
  searchAndSelectSettingInComm("AutoDrillSetupAirPressureCycleTransitionMaximum", mainWindowVariables.commAirPressureCycleTransitionMaximum, "AutoDrillSetupAirPressureCycleTransitionMaximum");
  var commMaxValue = wText(mainWindowVariables.CommFloatInputValueBox)
  if(commMaxValue != newMax){
    Log.Error("Air Pressure Cycle Transition option maximum value from dashobard is not matching with maximum value from HMI commissioning");
  }
  //searching the minimum option for Air Pressure Cycle Transition in commissioning and validating that it is showing correct value
  searchAndSelectSettingInComm("AutoDrillSetupAirPressureCycleTransitionMinimum", mainWindowVariables.commAirPressureCycleTransitionMinimum, "AutoDrillSetupAirPressureCycleTransitionMinimum");
  var commMinValue = wText(mainWindowVariables.CommFloatInputValueBox)
  if(commMinValue != newMin){
    Log.Error("Air Pressure Cycle Transition option minimum value from dashobard is not matching with minimum value from HMI commissioning");
  }
  //Closes the 'HwndSource_SeriousWindow' window.
  mainWindowVariables.CommWindow.Close();
  //Closed HMI
  closeHMI();
  //Turning off show option
  AutoDrillPara_Variables.AirPressureCycleTransitionShow_Btn().Click();
  //Turning off allow decimal option
  AutoDrillPara_Variables.AirPressureCycleTransitionAllowDecimal_Btn().Click();
  //Turning off is percentage option
  AutoDrillPara_Variables.AirPressureCycleTransitionIsPercent_Btn().Click();
  //Turning off show percentage sign option
  AutoDrillPara_Variables.AirPressureCycleTransitionShowPercentSign_Btn().Click();
  //Click on Save option
  Browser_Variables.Save_Btn().Click();
  //Click on Save for confirmation pop up
  Browser_Variables.ConfirmationSave_Btn().Click();
  //Opening HMi client again
  logIn();
  //Opening commissioning screen of HMI
  commissioningPass();
  //searching the show option for Air Pressure Cycle Transition in commissioning and validating that it is disabled
  searchAndSelectSettingInComm("AutoDrillSetupAirPressureCycleTransitionShow", mainWindowVariables.commAirPressureCycleTransitionShow, "AutoDrillSetupAirPressureCycleTransitionShow");
  var show = wstate(mainWindowVariables.CommBoolValueBox)
  if(show == 1){
    Log.Error("Air Pressure Cycle Transition option turned Off from dashobard but it is showing On in the HMI commissioning");
  }
  //searching the allow decimal option for Air Pressure Cycle Transition in commissioning and validating that it is disabled
  searchAndSelectSettingInComm("AutoDrillSetupAirPressureCycleTransitionAllowDecimal", mainWindowVariables.commAirPressureCycleTransitionAllowDecimal, "AutoDrillSetupAirPressureCycleTransitionAllowDecimal");
  var allowDecimal = wstate(mainWindowVariables.CommBoolValueBox)
  if(allowDecimal == 1){
    Log.Error("Air Pressure Cycle Transition allow decimal option turned Off from dashobard but it is showing On in the HMI commissioning");
  }
  //searching the is percentage option for Air Pressure Cycle Transition in commissioning and validating that it is disabled
  searchAndSelectSettingInComm("AutoDrillSetupAirPressureCycleTransitionBmode", mainWindowVariables.commAirPressureCycleTransitionIsPercent, "AutoDrillSetupAirPressureCycleTransitionBmode");
  var isPercent = wstate(mainWindowVariables.CommBoolValueBox)
  if(isPercent == 1){
    Log.Error("Air Pressure Cycle Transition is percentage option turned Off from dashobard but it is showing On in the HMI commissioning");
  }
  //searching the show percentage sign option for Air Pressure Cycle Transition in commissioning and validating that it is disabled
  searchAndSelectSettingInComm("AutoDrillSetupAirPressureCycleTransitionBmodeShow", mainWindowVariables.commAirPressureCycleTransitionShowPercentSign, "AutoDrillSetupAirPressureCycleTransitionBmodeShow");
  var showPercentSign = wstate(mainWindowVariables.CommBoolValueBox)
  if(showPercentSign == 1){
    Log.Error("Air Pressure Cycle Transition option show percentage sign turned Off from dashobard but it is showing On in the HMI commissioning");
  }
  //Closes the 'HwndSource_SeriousWindow' window.
  mainWindowVariables.CommWindow.Close();
  //Closed HMI
  closeHMI();
  //Resetting all the values as it is
  if(showDHDStatus != browserToggleSwitchStatus(AutoDrillPara_Variables.AirPressureCycleTransitionShow_Btn())){
    AutoDrillPara_Variables.AirPressureCycleTransitionShow_Btn().Click();
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("No need of change show status it is same");
  }
  if(alldecimalDHDStatus != browserToggleSwitchStatus(AutoDrillPara_Variables.AirPressureCycleTransitionAllowDecimal_Btn())){
    AutoDrillPara_Variables.AirPressureCycleTransitionAllowDecimal_Btn().Click();
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("No need of change allow decimal status it is same");
  }
  if(isPercentDHDStatus != browserToggleSwitchStatus(AutoDrillPara_Variables.AirPressureCycleTransitionIsPercent_Btn())){
    AutoDrillPara_Variables.AirPressureCycleTransitionIsPercent_Btn().Click();
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("No need of change is percent status it is same");
  }
  if(showPercentSignDHDStatus != browserToggleSwitchStatus(AutoDrillPara_Variables.AirPressureCycleTransitionShowPercentSign_Btn())){
    AutoDrillPara_Variables.AirPressureCycleTransitionShowPercentSign_Btn().Click();
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("No need of change show percent sign status it is same");
  }
  if(maxValue != browserAttributeValue(AutoDrillPara_Variables.AirPressureCycleTransitionMax_Value(), "value")){
    //Changing the maximum value of Air Pressure Cycle Transition
    AutoDrillPara_Variables.AirPressureCycleTransitionMax_Value().Click();
    AutoDrillPara_Variables.AirPressureCycleTransitionMax_Value().Keys("^a");
    AutoDrillPara_Variables.AirPressureCycleTransitionMax_Value().SetText(maxValue);
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("No need of change maximum value it is same");
  }
  if(minValue != browserAttributeValue(AutoDrillPara_Variables.AirPressureCycleTransitionMin_Value(), "value")){
    //Changing the maximum value of Air Pressure Cycle Transition
    AutoDrillPara_Variables.AirPressureCycleTransitionMin_Value().Click();
    AutoDrillPara_Variables.AirPressureCycleTransitionMin_Value().Keys("^a");
    AutoDrillPara_Variables.AirPressureCycleTransitionMin_Value().SetText(minValue);
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