//Verifying the change in dashboard for Bottom Of Hole Water Setpoint parameter and cross check in the HMI

const {config, launchHMI, closeHMI, commissioningPass, openDiagnosticDashboard, closeDiagnosticDashboard} = require('GlobalVariables');
const {logIn, browserToggleSwitchStatus, scrollIntoViewBrowser, browserAttributeValue, searchAndSelectSettingInComm, wstate, wText} = require('CommonFunc');
const {mainWindowVariables} = require('MainWindowPage');
const {Browser_Variables, Commissioning_Variables, UI_Variables, AutoDrillPara_Variables} = require('BrowserPage');

function BottomOfHoleWaterSetpoint()
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
  //Scroll until the Bottom Of Hole Water Setpoint text gets in the view
  scrollIntoViewBrowser(AutoDrillPara_Variables.BottomOfHoleWaterSetpoint_Panel);
  //pressing up arrow key to make panel in view and not get overlap on header options
  Browser_Variables.Page.Keys("[Up][Up][Up][Up][Up][Up][Up]");
  //Cheking the show option for Bottom Of Hole Water Setpoint if it's off turning it on
  var showDHDStatus = browserToggleSwitchStatus(AutoDrillPara_Variables.BottomOfHoleWaterSetpointShow_Btn());
  if(showDHDStatus == 0 ){
    AutoDrillPara_Variables.BottomOfHoleWaterSetpointShow_Btn().Click();
  }else{
    Log.Message("Bottom Of Hole Water Setpoint show toggle button is already ON");
  }
  //Cheking the allow decimal option for Bottom Of Hole Water Setpoint if it's off turning it on
  var alldecimalDHDStatus = browserToggleSwitchStatus(AutoDrillPara_Variables.BottomOfHoleWaterSetpointAllowDecimal_Btn());
  if(alldecimalDHDStatus == 0 ){
    AutoDrillPara_Variables.BottomOfHoleWaterSetpointAllowDecimal_Btn().Click();
  }else{
    Log.Message("Bottom Of Hole Water Setpoint allow decimal toggle button is already ON");
  }
  //Cheking the IsPercentage option for Bottom Of Hole Water Setpoint if it's off turning it on
  var isPercentDHDStatus = browserToggleSwitchStatus(AutoDrillPara_Variables.BottomOfHoleWaterSetpointIsPercent_Btn());
  if(isPercentDHDStatus == 0 ){
    AutoDrillPara_Variables.BottomOfHoleWaterSetpointIsPercent_Btn().Click();
  }else{
    Log.Message("Bottom Of Hole Water Setpoint is percentage toggle button is already ON");
  }
  //Cheking the show percentage sign option for Bottom Of Hole Water Setpoint if it's off turning it on
  var showPercentSignDHDStatus = browserToggleSwitchStatus(AutoDrillPara_Variables.BottomOfHoleWaterSetpointShowPercentSign_Btn());
  if(showPercentSignDHDStatus == 0 ){
    AutoDrillPara_Variables.BottomOfHoleWaterSetpointShowPercentSign_Btn().Click();
  }else{
    Log.Message("Bottom Of Hole Water Setpoint show percentage sign toggle button is already ON");
  }
  //Capturing the already set maximum value of Bottom Of Hole Water Setpoint
  var maxValue = browserAttributeValue(AutoDrillPara_Variables.BottomOfHoleWaterSetpointMax_Value(), "value");
  var newMax = "675";
  if(maxValue != newMax){
    //Changing the maximum value of Bottom Of Hole Water Setpoint
    AutoDrillPara_Variables.BottomOfHoleWaterSetpointMax_Value().Click();
    AutoDrillPara_Variables.BottomOfHoleWaterSetpointMax_Value().Keys("^a");
    AutoDrillPara_Variables.BottomOfHoleWaterSetpointMax_Value().SetText(newMax);
  }else{
    Log.Message("Not changing the maximum value as new and previous is same")
  }
  //Capturing the already set minimum value of Bottom Of Hole Water Setpoint
  var minValue = browserAttributeValue(AutoDrillPara_Variables.BottomOfHoleWaterSetpointMin_Value(), "value");
  var newMin = "355";
  if(minValue != newMin){
    //Changing the minimum value of Bottom Of Hole Water Setpoint
    AutoDrillPara_Variables.BottomOfHoleWaterSetpointMin_Value().Click();
    AutoDrillPara_Variables.BottomOfHoleWaterSetpointMin_Value().Keys("^a");
    AutoDrillPara_Variables.BottomOfHoleWaterSetpointMin_Value().SetText(newMin);
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
  //searching the show option for Bottom Of Hole Water Setpoint in commissioning and validating that it is enabled
  searchAndSelectSettingInComm("AutoDrillSetupBottomOfHoleWaterSetpointShow", mainWindowVariables.commBottomOfHoleWaterSetpointShow, "AutoDrillSetupBottomOfHoleWaterSetpointShow");
  var showOptVisibility = wstate(mainWindowVariables.CommBoolValueBox)
  if(showOptVisibility == 0){
    Log.Error("Bottom Of Hole Water Setpoint option turned on from dashobard but it is showing OFF in the HMI commissioning");
  }
  //searching the allow decimal option for Bottom Of Hole Water Setpoint in commissioning and validating that it is enabled
  searchAndSelectSettingInComm("AutoDrillSetupBottomOfHoleWaterSetpoint AllowDecimal", mainWindowVariables.commBottomOfHoleWaterSetpointAllowDecimal, "AutoDrillSetupBottomOfHoleWaterSetpointAllowDecimal");
  var allowDecimalVisibility = wstate(mainWindowVariables.CommBoolValueBox)
  if(allowDecimalVisibility == 0){
    Log.Error("Bottom Of Hole Water Setpoint allow decimal option turned on from dashobard but it is showing OFF in the HMI commissioning");
  }
  //searching the is percentage option for Bottom Of Hole Water Setpoint in commissioning and validating that it is enabled
  searchAndSelectSettingInComm("AutoDrillSetupBottomOfHoleWaterSetpointBmode", mainWindowVariables.commBottomOfHoleWaterSetpointIsPercent, "AutoDrillSetupBottomOfHoleWaterSetpointBmode");
  var isPercentVisibility = wstate(mainWindowVariables.CommBoolValueBox)
  if(isPercentVisibility == 0){
    Log.Error("Bottom Of Hole Water Setpoint is percentage option turned on from dashobard but it is showing OFF in the HMI commissioning");
  }
  //searching the show percentage sign option for Bottom Of Hole Water Setpoint in commissioning and validating that it is enabled
  searchAndSelectSettingInComm("AutoDrillSetupBottomOfHoleWaterSetpointBmodeShow", mainWindowVariables.commBottomOfHoleWaterSetpointShowPercentSign, "AutoDrillSetupBottomOfHoleWaterSetpointBmodeShow");
  var showPercentSignVisibility = wstate(mainWindowVariables.CommBoolValueBox)
  if(showPercentSignVisibility == 0){
    Log.Error("Bottom Of Hole Water Setpoint option show percentage sign turned on from dashobard but it is showing OFF in the HMI commissioning");
  }
  //searching the maximum option for Bottom Of Hole Water Setpoint in commissioning and validating that it is showing correct value
  searchAndSelectSettingInComm("AutoDrillSetupBottomOfHoleWaterSetpointMaximum", mainWindowVariables.commBottomOfHoleWaterSetpointMaximum, "AutoDrillSetupBottomOfHoleWaterSetpointMaximum");
  var commMaxValue = wText(mainWindowVariables.CommFloatInputValueBox)
  if(commMaxValue != newMax){
    Log.Error("Bottom Of Hole Water Setpoint option maximum value from dashobard is not matching with maximum value from HMI commissioning");
  }
  //searching the minimum option for Bottom Of Hole Water Setpoint in commissioning and validating that it is showing correct value
  searchAndSelectSettingInComm("AutoDrillSetupBottomOfHoleWaterSetpointMinimum", mainWindowVariables.commBottomOfHoleWaterSetpointMinimum, "AutoDrillSetupBottomOfHoleWaterSetpointMinimum");
  var commMinValue = wText(mainWindowVariables.CommFloatInputValueBox)
  if(commMinValue != newMin){
    Log.Error("Bottom Of Hole Water Setpoint option minimum value from dashobard is not matching with minimum value from HMI commissioning");
  }
  //Closes the 'HwndSource_SeriousWindow' window.
  mainWindowVariables.CommWindow.Close();
  //Closed HMI
  closeHMI();
  //Turning off show option
  AutoDrillPara_Variables.BottomOfHoleWaterSetpointShow_Btn().Click();
  //Turning off allow decimal option
  AutoDrillPara_Variables.BottomOfHoleWaterSetpointAllowDecimal_Btn().Click();
  //Turning off is percentage option
  AutoDrillPara_Variables.BottomOfHoleWaterSetpointIsPercent_Btn().Click();
  //Turning off show percentage sign option
  AutoDrillPara_Variables.BottomOfHoleWaterSetpointShowPercentSign_Btn().Click();
  //Click on Save option
  Browser_Variables.Save_Btn().Click();
  //Click on Save for confirmation pop up
  Browser_Variables.ConfirmationSave_Btn().Click();
  //Opening HMi client again
  logIn();
  //Opening commissioning screen of HMI
  commissioningPass();
  //searching the show option for Bottom Of Hole Water Setpoint in commissioning and validating that it is disabled
  searchAndSelectSettingInComm("AutoDrillSetupBottomOfHoleWaterSetpointShow", mainWindowVariables.commBottomOfHoleWaterSetpointShow, "AutoDrillSetupBottomOfHoleWaterSetpointShow");
  var show = wstate(mainWindowVariables.CommBoolValueBox)
  if(show == 1){
    Log.Error("Bottom Of Hole Water Setpoint option turned Off from dashobard but it is showing On in the HMI commissioning");
  }
  //searching the allow decimal option for Bottom Of Hole Water Setpoint in commissioning and validating that it is disabled
  searchAndSelectSettingInComm("AutoDrillSetupBottomOfHoleWaterSetpoint AllowDecimal", mainWindowVariables.commBottomOfHoleWaterSetpointAllowDecimal, "AutoDrillSetupBottomOfHoleWaterSetpointAllowDecimal");
  var allowDecimal = wstate(mainWindowVariables.CommBoolValueBox)
  if(allowDecimal == 1){
    Log.Error("Bottom Of Hole Water Setpoint allow decimal option turned Off from dashobard but it is showing On in the HMI commissioning");
  }
  //searching the is percentage option for Bottom Of Hole Water Setpoint in commissioning and validating that it is disabled
  searchAndSelectSettingInComm("AutoDrillSetupBottomOfHoleWaterSetpointBmode", mainWindowVariables.commBottomOfHoleWaterSetpointIsPercent, "AutoDrillSetupBottomOfHoleWaterSetpointBmode");
  var isPercent = wstate(mainWindowVariables.CommBoolValueBox)
  if(isPercent == 1){
    Log.Error("Bottom Of Hole Water Setpoint is percentage option turned Off from dashobard but it is showing On in the HMI commissioning");
  }
  //searching the show percentage sign option for Bottom Of Hole Water Setpoint in commissioning and validating that it is disabled
  searchAndSelectSettingInComm("AutoDrillSetupBottomOfHoleWaterSetpointBmodeShow", mainWindowVariables.commBottomOfHoleWaterSetpointShowPercentSign, "AutoDrillSetupBottomOfHoleWaterSetpointBmodeShow");
  var showPercentSign = wstate(mainWindowVariables.CommBoolValueBox)
  if(showPercentSign == 1){
    Log.Error("Bottom Of Hole Water Setpoint option show percentage sign turned Off from dashobard but it is showing On in the HMI commissioning");
  }
  //Closes the 'HwndSource_SeriousWindow' window.
  mainWindowVariables.CommWindow.Close();
  //Closed HMI
  closeHMI();
  //Resetting all the values as it is
  if(showDHDStatus != browserToggleSwitchStatus(AutoDrillPara_Variables.BottomOfHoleWaterSetpointShow_Btn())){
    AutoDrillPara_Variables.BottomOfHoleWaterSetpointShow_Btn().Click();
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("No need of change show status it is same");
  }
  if(alldecimalDHDStatus != browserToggleSwitchStatus(AutoDrillPara_Variables.BottomOfHoleWaterSetpointAllowDecimal_Btn())){
    AutoDrillPara_Variables.BottomOfHoleWaterSetpointAllowDecimal_Btn().Click();
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("No need of change allow decimal status it is same");
  }
  if(isPercentDHDStatus != browserToggleSwitchStatus(AutoDrillPara_Variables.BottomOfHoleWaterSetpointIsPercent_Btn())){
    AutoDrillPara_Variables.BottomOfHoleWaterSetpointIsPercent_Btn().Click();
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("No need of change is percent status it is same");
  }
  if(showPercentSignDHDStatus != browserToggleSwitchStatus(AutoDrillPara_Variables.BottomOfHoleWaterSetpointShowPercentSign_Btn())){
    AutoDrillPara_Variables.BottomOfHoleWaterSetpointShowPercentSign_Btn().Click();
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("No need of change show percent sign status it is same");
  }
  if(maxValue != browserAttributeValue(AutoDrillPara_Variables.BottomOfHoleWaterSetpointMax_Value(), "value")){
    //Changing the maximum value of Bottom Of Hole Water Setpoint
    AutoDrillPara_Variables.BottomOfHoleWaterSetpointMax_Value().Click();
    AutoDrillPara_Variables.BottomOfHoleWaterSetpointMax_Value().Keys("^a");
    AutoDrillPara_Variables.BottomOfHoleWaterSetpointMax_Value().SetText(maxValue);
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("No need of change maximum value it is same");
  }
  if(minValue != browserAttributeValue(AutoDrillPara_Variables.BottomOfHoleWaterSetpointMin_Value(), "value")){
    //Changing the maximum value of Bottom Of Hole Water Setpoint
    AutoDrillPara_Variables.BottomOfHoleWaterSetpointMin_Value().Click();
    AutoDrillPara_Variables.BottomOfHoleWaterSetpointMin_Value().Keys("^a");
    AutoDrillPara_Variables.BottomOfHoleWaterSetpointMin_Value().SetText(minValue);
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