//Verifying the change in dashboard for drill hole depth parameter and cross check in the HMI

const {config, launchHMI, closeHMI, commissioningPass, openDiagnosticDashboard, closeDiagnosticDashboard} = require('GlobalVariables');
const {logIn, browserToggleSwitchStatus, scrollIntoViewBrowser, browserAttributeValue, searchAndSelectSettingInComm, wstate, wText} = require('CommonFunc');
const {mainWindowVariables} = require('MainWindowPage');
const {Browser_Variables, Commissioning_Variables, UI_Variables, AutoDrillPara_Variables} = require('BrowserPage');

function DrillHoleDepth()
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
  //Scroll until the Drill Hole Depth text gets in the view
  scrollIntoViewBrowser(AutoDrillPara_Variables.DrillHoleDepth_Panel);
  //pressing up arrow key to make panel in view and not get overlap on header options
  Browser_Variables.Page.Keys("[Up][Up][Up][Up][Up][Up][Up]");
  //Cheking the show option for drill hole depth if it's off turning it on
  var showDHDStatus = browserToggleSwitchStatus(AutoDrillPara_Variables.DrillHoleDepthShow_Btn());
  if(showDHDStatus == 0 ){
    AutoDrillPara_Variables.DrillHoleDepthShow_Btn().Click();
  }else{
    Log.Message("Drill Hole Depth show toggle button is already ON");
  }
  //Cheking the allow decimal option for drill hole depth if it's off turning it on
  var alldecimalDHDStatus = browserToggleSwitchStatus(AutoDrillPara_Variables.DrillHoleDepthAllowDecimal_Btn());
  if(alldecimalDHDStatus == 0 ){
    AutoDrillPara_Variables.DrillHoleDepthAllowDecimal_Btn().Click();
  }else{
    Log.Message("Drill Hole Depth allow decimal toggle button is already ON");
  }
  //Cheking the IsPercentage option for drill hole depth if it's off turning it on
  var isPercentDHDStatus = browserToggleSwitchStatus(AutoDrillPara_Variables.DrillHoleDepthIsPercent_Btn());
  if(isPercentDHDStatus == 0 ){
    AutoDrillPara_Variables.DrillHoleDepthIsPercent_Btn().Click();
  }else{
    Log.Message("Drill Hole Depth is percentage toggle button is already ON");
  }
  //Cheking the show percentage sign option for drill hole depth if it's off turning it on
  var showPercentSignDHDStatus = browserToggleSwitchStatus(AutoDrillPara_Variables.DrillHoleDepthShowPercentSign_Btn());
  if(showPercentSignDHDStatus == 0 ){
    AutoDrillPara_Variables.DrillHoleDepthShowPercentSign_Btn().Click();
  }else{
    Log.Message("Drill Hole Depth show percentage sign toggle button is already ON");
  }
  //Capturing the already set maximum value of drill hole depth
  var maxValue = browserAttributeValue(AutoDrillPara_Variables.DrillHoleDepthMax_Value(), "value");
  var newMax = "50";
  if(maxValue != newMax){
    //Changing the maximum value of drill hole depth
    AutoDrillPara_Variables.DrillHoleDepthMax_Value().Click();
    AutoDrillPara_Variables.DrillHoleDepthMax_Value().Keys("^a");
    AutoDrillPara_Variables.DrillHoleDepthMax_Value().SetText(newMax);
  }else{
    Log.Message("Not changing the maximum value as new and previous is same")
  }
  //Capturing the already set minimum value of drill hole depth
  var minValue = browserAttributeValue(AutoDrillPara_Variables.DrillHoleDepthMin_Value(), "value");
  var newMin = "20";
  if(minValue != newMin){
    //Changing the minimum value of drill hole depth
    AutoDrillPara_Variables.DrillHoleDepthMin_Value().Click();
    AutoDrillPara_Variables.DrillHoleDepthMin_Value().Keys("^a");
    AutoDrillPara_Variables.DrillHoleDepthMin_Value().SetText(newMin);
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
  //searching the show option for drill hole depth in commissioning and validating that it is enabled
  searchAndSelectSettingInComm("AutoDrillSetupShowDrillHoleDepth", mainWindowVariables.commDrillHoleDepthShow, "AutoDrillSetupShowDrillHoleDepth");
  var showOptVisibility = wstate(mainWindowVariables.CommBoolValueBox)
  if(showOptVisibility == 0){
    Log.Error("Drill Hole Depth option turned on from dashobard but it is showing OFF in the HMI commissioning");
  }
  //searching the allow decimal option for drill hole depth in commissioning and validating that it is enabled
  searchAndSelectSettingInComm("AutoDrillSetupDrillHoleDepthAllowDecimal", mainWindowVariables.commDrillHoleDepthAllowDecimal, "AutoDrillSetupDrillHoleDepthAllowDecimal");
  var allowDecimalVisibility = wstate(mainWindowVariables.CommBoolValueBox)
  if(allowDecimalVisibility == 0){
    Log.Error("Drill Hole Depth allow decimal option turned on from dashobard but it is showing OFF in the HMI commissioning");
  }
  //searching the is percentage option for drill hole depth in commissioning and validating that it is enabled
  searchAndSelectSettingInComm("AutoDrillSetupDrillHoleDepthBmode", mainWindowVariables.commDrillHoleDepthIsPercent, "AutoDrillSetupDrillHoleDepthBmode");
  var isPercentVisibility = wstate(mainWindowVariables.CommBoolValueBox)
  if(isPercentVisibility == 0){
    Log.Error("Drill Hole Depth is percentage option turned on from dashobard but it is showing OFF in the HMI commissioning");
  }
  //searching the show percentage sign option for drill hole depth in commissioning and validating that it is enabled
  searchAndSelectSettingInComm("AutoDrillSetupDrillHoleDepthBmodeShow", mainWindowVariables.commDrillHoleDepthShowPercentSign, "AutoDrillSetupDrillHoleDepthBmodeShow");
  var showPercentSignVisibility = wstate(mainWindowVariables.CommBoolValueBox)
  if(showPercentSignVisibility == 0){
    Log.Error("Drill Hole Depth option show percentage sign turned on from dashobard but it is showing OFF in the HMI commissioning");
  }
  //searching the maximum option for drill hole depth in commissioning and validating that it is showing correct value
  searchAndSelectSettingInComm("AutoDrillSetupDrillHoleDepthMaximum", mainWindowVariables.commDrillHoleDepthMaximum, "AutoDrillSetupDrillHoleDepthMaximum");
  var commMaxValue = wText(mainWindowVariables.CommFloatInputValueBox)
  if(commMaxValue != newMax){
    Log.Error("Drill Hole Depth option maximum value from dashobard is not matching with maximum value from HMI commissioning");
  }
  //searching the minimum option for drill hole depth in commissioning and validating that it is showing correct value
  searchAndSelectSettingInComm("AutoDrillSetupDrillHoleDepthMinimum", mainWindowVariables.commDrillHoleDepthMinimum, "AutoDrillSetupDrillHoleDepthMinimum");
  var commMinValue = wText(mainWindowVariables.CommFloatInputValueBox)
  if(commMinValue != newMin){
    Log.Error("Drill Hole Depth option minimum value from dashobard is not matching with minimum value from HMI commissioning");
  }
  //Closes the 'HwndSource_SeriousWindow' window.
  mainWindowVariables.CommWindow.Close();
  //Closed HMI
  closeHMI();
  //Turning off show option
  AutoDrillPara_Variables.DrillHoleDepthShow_Btn().Click();
  //Turning off allow decimal option
  AutoDrillPara_Variables.DrillHoleDepthAllowDecimal_Btn().Click();
  //Turning off is percentage option
  AutoDrillPara_Variables.DrillHoleDepthIsPercent_Btn().Click();
  //Turning off show percentage sign option
  AutoDrillPara_Variables.DrillHoleDepthShowPercentSign_Btn().Click();
  //Click on Save option
  Browser_Variables.Save_Btn().Click();
  //Click on Save for confirmation pop up
  Browser_Variables.ConfirmationSave_Btn().Click();
  //Opening HMi client again
  logIn();
  //Opening commissioning screen of HMI
  commissioningPass();
  //searching the show option for drill hole depth in commissioning and validating that it is disabled
  searchAndSelectSettingInComm("AutoDrillSetupShowDrillHoleDepth", mainWindowVariables.commDrillHoleDepthShow, "AutoDrillSetupShowDrillHoleDepth");
  var show = wstate(mainWindowVariables.CommBoolValueBox)
  if(show == 1){
    Log.Error("Drill Hole Depth option turned Off from dashobard but it is showing On in the HMI commissioning");
  }
  //searching the allow decimal option for drill hole depth in commissioning and validating that it is disabled
  searchAndSelectSettingInComm("AutoDrillSetupDrillHoleDepthAllowDecimal", mainWindowVariables.commDrillHoleDepthAllowDecimal, "AutoDrillSetupDrillHoleDepthAllowDecimal");
  var allowDecimal = wstate(mainWindowVariables.CommBoolValueBox)
  if(allowDecimal == 1){
    Log.Error("Drill Hole Depth allow decimal option turned Off from dashobard but it is showing On in the HMI commissioning");
  }
  //searching the is percentage option for drill hole depth in commissioning and validating that it is disabled
  searchAndSelectSettingInComm("AutoDrillSetupDrillHoleDepthBmode", mainWindowVariables.commDrillHoleDepthIsPercent, "AutoDrillSetupDrillHoleDepthBmode");
  var isPercent = wstate(mainWindowVariables.CommBoolValueBox)
  if(isPercent == 1){
    Log.Error("Drill Hole Depth is percentage option turned Off from dashobard but it is showing On in the HMI commissioning");
  }
  //searching the show percentage sign option for drill hole depth in commissioning and validating that it is disabled
  searchAndSelectSettingInComm("AutoDrillSetupDrillHoleDepthBmodeShow", mainWindowVariables.commDrillHoleDepthShowPercentSign, "AutoDrillSetupDrillHoleDepthBmodeShow");
  var showPercentSign = wstate(mainWindowVariables.CommBoolValueBox)
  if(showPercentSign == 1){
    Log.Error("Drill Hole Depth option show percentage sign turned Off from dashobard but it is showing On in the HMI commissioning");
  }
  //Closes the 'HwndSource_SeriousWindow' window.
  mainWindowVariables.CommWindow.Close();
  //Closed HMI
  closeHMI();
  //Resetting all the values as it is
  if(showDHDStatus != browserToggleSwitchStatus(AutoDrillPara_Variables.DrillHoleDepthShow_Btn())){
    AutoDrillPara_Variables.DrillHoleDepthShow_Btn().Click();
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("No need of change show status it is same");
  }
  if(alldecimalDHDStatus != browserToggleSwitchStatus(AutoDrillPara_Variables.DrillHoleDepthAllowDecimal_Btn())){
    AutoDrillPara_Variables.DrillHoleDepthAllowDecimal_Btn().Click();
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("No need of change allow decimal status it is same");
  }
  if(isPercentDHDStatus != browserToggleSwitchStatus(AutoDrillPara_Variables.DrillHoleDepthIsPercent_Btn())){
    AutoDrillPara_Variables.DrillHoleDepthIsPercent_Btn().Click();
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("No need of change is percent status it is same");
  }
  if(showPercentSignDHDStatus != browserToggleSwitchStatus(AutoDrillPara_Variables.DrillHoleDepthShowPercentSign_Btn())){
    AutoDrillPara_Variables.DrillHoleDepthShowPercentSign_Btn().Click();
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("No need of change show percent sign status it is same");
  }
  if(maxValue != browserAttributeValue(AutoDrillPara_Variables.DrillHoleDepthMax_Value(), "value")){
    //Changing the maximum value of drill hole depth
    AutoDrillPara_Variables.DrillHoleDepthMax_Value().Click();
    AutoDrillPara_Variables.DrillHoleDepthMax_Value().Keys("^a");
    AutoDrillPara_Variables.DrillHoleDepthMax_Value().SetText(maxValue);
    //Click on Save option
    Browser_Variables.Save_Btn().Click();
    //Click on Save for confirmation pop up
    Browser_Variables.ConfirmationSave_Btn().Click();
  }else{
    Log.Message("No need of change maximum value it is same");
  }
  if(minValue != browserAttributeValue(AutoDrillPara_Variables.DrillHoleDepthMin_Value(), "value")){
    //Changing the maximum value of drill hole depth
    AutoDrillPara_Variables.DrillHoleDepthMin_Value().Click();
    AutoDrillPara_Variables.DrillHoleDepthMin_Value().Keys("^a");
    AutoDrillPara_Variables.DrillHoleDepthMin_Value().SetText(minValue);
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