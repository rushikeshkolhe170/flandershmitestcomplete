
//Lubrication already available parameters validation and changing the values and cross verifying them

const {config, launchHMI, closeHMI, maintenanceModePass} = require('GlobalVariables');
const {mainOptionVariables} = require('MainOptionsVariable');
const {setupVariables} = require('SetupPage');
const {logIn, wpfControlText, verifyVisibilityWithExistCheck, verifyWpfControlTextWithExistCheck} = require('CommonFunc');

function LubricationTimeChange()
{
  //Login into the application.
  logIn();
  //Clicks the 'SetupButton' button.
  mainOptionVariables.Setup_Btn.ClickButton();
  //Clicks the 'Lubrication Timing Button' button.
  setupVariables.LubricationTime_Btn.ClickButton();
  //Checks whether the 'IsVisible' property of the MachineLubeIntervalTimeMinutes label object equals True.
  verifyVisibilityWithExistCheck(setupVariables.MachineLubeIntervalTime_Label);
  //Checks whether the 'IsVisible' property of the LowerLubeMinutes label object equals True.
  verifyVisibilityWithExistCheck(setupVariables.LowerLube_Label);
  //Checks whether the 'IsVisible' property of the ThreadLubeTimeSeconds label object equals True.
  verifyVisibilityWithExistCheck(setupVariables.ThreadLubeTime_Label);
  //Capturing the initial value of MachineLubeIntervalTimeMinutes, LowerLubeMinutes and ThreadLubeTimeSeconds
  var Value = wpfControlText(setupVariables.MachineLubeIntervalTime_Value);
  var lowerLubeValue = setupVariables.LowerLube_Value;
  var stackPanel = lowerLubeValue.StackPanel;
  var childCount = stackPanel.ChildCount;
  var Value1;
  if (childCount > 0) {
        for (var i = 1; i < childCount; i++) {
            var childElement = stackPanel.Child(i);
                Value1 = childElement.WPFControlText;  // Get the text of the TextBlock
                Log.Message("Found TextBlock with text: " + Value1);
        }
    } else {
        Log.Message("No child elements found in StackPanel.");
    }
  var Value2 = wpfControlText(setupVariables.ThreadLubeIntervalTime_Value);
  //Clicks the 'MachineLubeIntervalTimeCalculator' button.
  setupVariables.MachineLubeIntervalTimeCal_Btn.ClickButton();
  //Checks whether the 'WPFControlText' property of the Calculator title object equals 'ENTER NEW UPPER LUBE TIME'.
  verifyWpfControlTextWithExistCheck(setupVariables.CalcTitle_Label, "ENTER NEW UPPER LUBE TIME");
  //Clicks the 'Button0' button.
  setupVariables.CalculatorWindow.Button0.ClickButton();
  //Clicks the 'ButtonAccept' button.
  setupVariables.CalcAccept_Btn.ClickButton();
  //Checks whether the 'WPFControlText' property of the dialogue box object equals 'You must enter a value between 3 and 120 to continue.'.
  verifyWpfControlTextWithExistCheck(setupVariables.DialogueMsg_Text, "You must enter a value between 3 and 120 to continue.");
  //Clicks the 'OkButtonText' object.
  setupVariables.DialogueOk_Btn.ClickButton();
  //Clicks the 'ButtonClear' button.
  setupVariables.CalcClear_Btn.ClickButton();
  //Clicks the '121' button.
  setupVariables.CalculatorWindow.Button1.ClickButton();
  setupVariables.CalculatorWindow.Button2.ClickButton();
  setupVariables.CalculatorWindow.Button1.ClickButton();
  //Clicks the 'ButtonAccept' button.
  setupVariables.CalcAccept_Btn.ClickButton();
  //Checks whether the 'WPFControlText' property of the dialogue box object equals 'You must enter a value between 3 and 120 to continue.'.
  verifyWpfControlTextWithExistCheck(setupVariables.DialogueMsg_Text, "You must enter a value between 3 and 120 to continue.");
  //Clicks the 'OkButton' button.
  setupVariables.DialogueOk_Btn.ClickButton();
  //Clicks the 'ButtonClear' button.
  setupVariables.CalcClear_Btn.ClickButton();
  //Clicks the '100' button.
  setupVariables.CalculatorWindow.Button1.ClickButton();
  setupVariables.CalculatorWindow.Button0.ClickButton();
  setupVariables.CalculatorWindow.Button0.ClickButton();
  //Clicks the 'ButtonAccept' button.
  setupVariables.CalcAccept_Btn.ClickButton();
  //Clicks the 'LowerLubeCalculator' button.
  setupVariables.LowerLubeCal_Btn.ClickButton();
  //Checks whether the 'WPFControlText' property of the Calculator title object equals 'ENTER NEW PROPEL LUBE TIME'.
  verifyWpfControlTextWithExistCheck(setupVariables.CalcTitle_Label, "ENTER NEW PROPEL LUBE TIME");
  //Clicks the 'Button0' button.
  setupVariables.CalculatorWindow.Button0.ClickButton();
  //Clicks the 'ButtonAccept' button.
  setupVariables.CalcAccept_Btn.ClickButton();
  //Checks whether the 'WPFControlText' property of the dialogue box object equals 'You must enter a value between 3 and 120 to continue.'.
  verifyWpfControlTextWithExistCheck(setupVariables.DialogueMsg_Text, "You must enter a value between 3 and 120 to continue.");
  //Clicks the 'OkButton' button.
  setupVariables.DialogueOk_Btn.ClickButton();
  //Clicks the 'ButtonClear' button.
  setupVariables.CalcClear_Btn.ClickButton();
  //Clicks the '121' button.
  setupVariables.CalculatorWindow.Button1.ClickButton();
  setupVariables.CalculatorWindow.Button2.ClickButton();
  setupVariables.CalculatorWindow.Button1.ClickButton();
  //Clicks the 'ButtonAccept' button.
  setupVariables.CalcAccept_Btn.ClickButton();
  //Checks whether the 'WPFControlText' property of the dialogue box object equals 'You must enter a value between 3 and 120 to continue.'.
  verifyWpfControlTextWithExistCheck(setupVariables.DialogueMsg_Text, "You must enter a value between 3 and 120 to continue.");
  //Clicks the 'OkButton' button.
  setupVariables.DialogueOk_Btn.ClickButton();
  //Clicks the 'ButtonClear' button.
  setupVariables.CalcClear_Btn.ClickButton();
  //Clicks the '100' button.
  setupVariables.CalculatorWindow.Button1.ClickButton();
  setupVariables.CalculatorWindow.Button0.ClickButton();
  setupVariables.CalculatorWindow.Button0.ClickButton();
  //Clicks the 'ButtonAccept' button.
  setupVariables.CalcAccept_Btn.ClickButton();
  //Clicks the 'ThreadLubeIntervalTimecalculator' object.
  setupVariables.ThreadLubeIntervalTimeCal_Btn.ClickButton();
  //Checks whether the 'WPFControlText' property of the Calculator title object equals 'ENTER NEW THREAD LUBE TIME'.
  verifyWpfControlTextWithExistCheck(setupVariables.CalcTitle_Label, "ENTER NEW THREAD LUBE TIME");
  //Clicks the 'Button0' button.
  setupVariables.CalculatorWindow.Button0.ClickButton();
  //Clicks the 'ButtonAccept' button.
  setupVariables.CalcAccept_Btn.ClickButton();
  //Checks whether the 'WPFControlText' property of the dialogue box object equals 'You must enter a value between 1 and 15 to continue.'.
  verifyWpfControlTextWithExistCheck(setupVariables.DialogueMsg_Text, "You must enter a value between 1 and 15 to continue.");
  //Clicks the 'OkButton' button.
  setupVariables.DialogueOk_Btn.ClickButton();
  //Clicks the 'ButtonClear' button.
  setupVariables.CalcClear_Btn.ClickButton();
  //Clicks the '16' button.
  setupVariables.CalculatorWindow.Button1.ClickButton();
  setupVariables.CalculatorWindow.Button6.ClickButton();
  //Clicks the 'ButtonAccept' button.
  setupVariables.CalcAccept_Btn.ClickButton();
  //Checks whether the 'WPFControlText' property of the dialogue box object equals 'You must enter a value between 1 and 15 to continue.'.
  verifyWpfControlTextWithExistCheck(setupVariables.DialogueMsg_Text, "You must enter a value between 1 and 15 to continue.");
  //Clicks the 'OkButton' button.
  setupVariables.DialogueOk_Btn.ClickButton();
  //Clicks the 'ButtonClear' button.
  setupVariables.CalcClear_Btn.ClickButton();
  //Clicks the 'Button4' button.
  setupVariables.CalculatorWindow.Button4.ClickButton();
  //Clicks the 'ButtonAccept' button.
  setupVariables.CalcAccept_Btn.ClickButton();
  //Clicks the 'Change Value' button.
  setupVariables.LubeTimeChangeValues_Btn.ClickButton();
  //Capturing the initial value of MachineLubeIntervalTimeMinutes, LowerLubeMinutes and ThreadLubeTimeSeconds and comparing the change values
  aqUtils.Delay(5000);
  var Value0 = wpfControlText(setupVariables.MachineLubeIntervalTime_Value);
  var lowerLubeValue1 = setupVariables.LowerLube_Value;
  var stackPanel1 = lowerLubeValue1.StackPanel;
  var childCount1 = stackPanel1.ChildCount;
  var Value11;
  if (childCount1 > 0) {
        for (var i = 1; i < childCount1; i++) {
            var childElement1 = stackPanel.Child(i);
                Value11 = childElement1.WPFControlText;  // Get the text of the TextBlock
                Log.Message("Found TextBlock with text: " + Value11);
        }
    } else {
        Log.Message("No child elements found in StackPanel.");
    }
  var Value22 = wpfControlText(setupVariables.ThreadLubeIntervalTime_Value);
  if(Value != Value0){
    Log.Message("first parameter Values change");
  } else{
    Log.Warning("first parameter Values are same");
  }
  if(Value1 != Value11){
    Log.Message("second parameter Values change");
  } else{
    Log.Warning("second parameter Values are same");
  }
  if(Value2 != Value22){
    Log.Message("third parameter Values change");
  } else{
    Log.Warning("third parameter Values are same");
  }
  //Setting all values again
  setupVariables.MachineLubeIntervalTimeCal_Btn.ClickButton();
  setupVariables.CalculatorWindow.Button1.ClickButton();
  setupVariables.CalculatorWindow.Button2.ClickButton();
  setupVariables.CalculatorWindow.Button0.ClickButton();
  setupVariables.CalcAccept_Btn.ClickButton();
  setupVariables.LowerLubeCal_Btn.ClickButton();
  setupVariables.CalculatorWindow.Button1.ClickButton();
  setupVariables.CalculatorWindow.Button2.ClickButton();
  setupVariables.CalculatorWindow.Button0.ClickButton();
  setupVariables.CalcAccept_Btn.ClickButton();
  setupVariables.ThreadLubeIntervalTimeCal_Btn.ClickButton();
  setupVariables.CalculatorWindow.Button3.ClickButton();
  setupVariables.CalcAccept_Btn.ClickButton();
  setupVariables.LubeTimeChangeValues_Btn.ClickButton();
  //Clicks the 'Back' button
  setupVariables.Back_Btn.Click();
  //Close the application.
  closeHMI();
}