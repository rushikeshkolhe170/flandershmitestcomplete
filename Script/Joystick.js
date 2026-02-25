
// Verifying the availability of required parts of MarkIV chaire type in Joysticks

const {config, launchHMI, closeHMI, maintenanceModePass, commissioningPass} = require('GlobalVariables');
const {mainOptionVariables} = require('MainOptionsVariable');
const {maint_MaintTest_Variable, maint_JoystickStatus_Variable} = require('MaintenancePage');
const {mainWindowVariables} = require('MainWindowPage');
const {logIn, verifyWpfControlTextWithExistCheck, checkVisibilityAndClick, verifyVisibilityWithExistCheck, selectFromCommDropdown, wpfControlText} = require('CommonFunc');

function Joystick()
{
  //Login into the application.
  logIn();
  //Clicks the 'MaintenanceButton' button.
  mainOptionVariables.Maint_Btn.ClickButton();
  //Clicks the 'MachineTestButton' button.
  mainOptionVariables.MaintTest_Btn.ClickButton();
  //Opening commissioning screen.
  commissioningPass();
  //Clicks the 'SearchTextBox' object.
  mainWindowVariables.CommSearchBox.Click(71, 24);
  //Enters the text 'ChairType' in the 'SearchTextBox' text editor.
  mainWindowVariables.CommSearchBox.SetText("ChairType");
  //Clicks the ChairType item of the 'SettingsListView' list box.
  checkVisibilityAndClick(mainWindowVariables.commChairType, "ChairType");
  //Select Mark IV from the dropdown.
  selectFromCommDropdown("MarkIV");
  //Closes the 'HwndSource_SeriousWindow' window.
  mainWindowVariables.CommWindow.Close();
  //Checks whether the 'IsVisible' property of the 'JoystickStatus' object equals True.
  verifyVisibilityWithExistCheck(maint_MaintTest_Variable.JoystickStatus_Btn_Label);
  //Clicks the 'Joystick Status' button.
  maint_MaintTest_Variable.JoystickStatus_Btn.ClickButton();
  aqUtils.Delay(10000);
  //Checks whether the 'IsVisible' property of the 'PB1 image' object equals True.
  verifyVisibilityWithExistCheck(maint_JoystickStatus_Variable.MarkIV_LH_PB1);
  //Checks whether the 'IsVisible' property of the 'PB2 image' object equals True.
  verifyVisibilityWithExistCheck(maint_JoystickStatus_Variable.MarkIV_LH_PB2);
  //Checks whether the 'IsVisible' property of the 'PB3 image' object equals True.
  verifyVisibilityWithExistCheck(maint_JoystickStatus_Variable.MarkIV_LH_PB3);
  //Checks whether the 'IsVisible' property of the 'PB4 image' object equals True.
  verifyVisibilityWithExistCheck(maint_JoystickStatus_Variable.MarkIV_LH_PB4);
  //Checks whether the 'IsVisible' property of the 'PB5 image' object equals True.
  verifyVisibilityWithExistCheck(maint_JoystickStatus_Variable.MarkIV_LH_PB5);
  //Checks whether the 'IsVisible' property of the 'Wheel1 image' object equals True.
  verifyVisibilityWithExistCheck(maint_JoystickStatus_Variable.MarkIv_LH_Wheel1);
  //Checks whether the 'IsVisible' property of the 'linear guage Wheel1 area' object equals True.
  verifyVisibilityWithExistCheck(maint_JoystickStatus_Variable.MarkIV_LH_LinearGaugeLeftWheel1);
  //Checks whether the 'IsVisible' property of the 'Wheel2 iamge' object equals True.
  verifyVisibilityWithExistCheck(maint_JoystickStatus_Variable.MarkIv_LH_Wheel2);
  //Checks whether the 'IsVisible' property of the 'linear guage Wheel2 area' object equals True.
  verifyVisibilityWithExistCheck(maint_JoystickStatus_Variable.MarkIV_LH_LinearGaugeLeftWheel2);
  //Checks whether the 'IsVisible' property of the 'Wheel3 image' object equals True.
  verifyVisibilityWithExistCheck(maint_JoystickStatus_Variable.MarkIv_LH_Wheel3);
  //Checks whether the 'IsVisible' property of the 'Wheel3 and PB6' object equals True.
  verifyVisibilityWithExistCheck(maint_JoystickStatus_Variable.MarkIV_LH_PB6AndLinearGaugeLeftWheel3);
  //Checks whether the 'IsVisible' property of the 'Deadman image' object equals True.
  verifyVisibilityWithExistCheck(maint_JoystickStatus_Variable.MarkIV_LH_Deadman);
  //Checks whether the 'IsVisible' property of the 'Whole Left Handle image' object equals True.
  verifyVisibilityWithExistCheck(maint_JoystickStatus_Variable.MarkIV_LH_WholeHandle);
  //Checks whether the 'IsVisible' property of the 'Left Linear guage image' object equals True.
  verifyVisibilityWithExistCheck(maint_JoystickStatus_Variable.MarkIV_LH_LinearGauge);
  //Checks whether the 'WPFControlText' property of the water injection on off label object equals 'WATER INJECTION: ON/OFF'.
  verifyWpfControlTextWithExistCheck(maint_JoystickStatus_Variable.MarkIV_LH_WaterInjectionOnOff_Label, "WATER INJECTION: ON/OFF");
  //Checks whether the 'WPFControlText' property of the FEED OVERRIDE: ON/OFF label object equals 'FEED OVERRIDE: ON/OFF'.
  verifyWpfControlTextWithExistCheck(maint_JoystickStatus_Variable.MarkIV_LH_FeedOverrideOnOff_Label, "FEED OVERRIDE: ON/OFF");
  //Checks whether the 'WPFControlText' property of the ONE TOUCH DRILL: ON/OFF label object equals 'ONE TOUCH DRILL: ON/OFF'.
  verifyWpfControlTextWithExistCheck(maint_JoystickStatus_Variable.MarkIV_LH_OneTouchDrillOnOff_Label, "ONE TOUCH DRILL: ON/OFF");
  //Checks whether the 'WPFControlText' property of the DECK WRENCH: OUT label object equals 'DECK WRENCH: OUT'.
  verifyWpfControlTextWithExistCheck(maint_JoystickStatus_Variable.MarkIV_LH_DeckWrenchOut_Label, "DECK WRENCH: OUT");
  //Checks whether the 'WPFControlText' property of the DECK WRENCH: IN label object equals 'DECK WRENCH: IN'.
  verifyWpfControlTextWithExistCheck(maint_JoystickStatus_Variable.MarkIV_LH_DeckWrenchIn_Label, "DECK WRENCH: IN");
  //Checks whether the 'WPFControlText' property of the LeftWheel1Text label object equals 'LeftWheel1Text'.
  verifyWpfControlTextWithExistCheck(maint_JoystickStatus_Variable.MarkIV_LH_LeftWheel1_Label, "LeftWheel1Text");
  //Checks whether the 'WPFControlText' property of the LeftWheel2Text label object equals 'LeftWheel2Text'.
  verifyWpfControlTextWithExistCheck(maint_JoystickStatus_Variable.MarkIV_LH_LeftWheel2_Label, "LeftWheel2Text");
  //Checks whether the 'WPFControlText' property of the LeftWheel3Text label object equals 'LeftWheel3Text'.
  verifyWpfControlTextWithExistCheck(maint_JoystickStatus_Variable.MarkIV_LH_LeftWheel3_Label, "LeftWheel3Text");
  //Checks whether the 'WPFControlText' property of the DEADMAN label on PB6 object equals 'DEADMAN'.
  verifyWpfControlTextWithExistCheck(maint_JoystickStatus_Variable.MarkIV_LH_Deadman_Label, "DEADMAN");
  //Checks whether the 'WPFControlText' property of the DEADMAN label on same button object equals 'DEADMAN'.
  verifyWpfControlTextWithExistCheck(maint_JoystickStatus_Variable.MarkIV_LH_Deadman_Label2, "DEADMAN");
  //Checks whether the 'IsVisible' property of the 'PB1 image' object equals True.
  verifyVisibilityWithExistCheck(maint_JoystickStatus_Variable.MarkIV_RH_PB1);
  //Checks whether the 'IsVisible' property of the 'PB2 image' object equals True.
  verifyVisibilityWithExistCheck(maint_JoystickStatus_Variable.MarkIV_RH_PB2);
  //Checks whether the 'IsVisible' property of the 'PB3 image' object equals True.
  verifyVisibilityWithExistCheck(maint_JoystickStatus_Variable.MarkIV_RH_PB3);
  //Checks whether the 'IsVisible' property of the 'PB4 image' object equals True.
  verifyVisibilityWithExistCheck(maint_JoystickStatus_Variable.MarkIV_RH_PB4);
  //Checks whether the 'IsVisible' property of the 'PB5 image' object equals True.
  verifyVisibilityWithExistCheck(maint_JoystickStatus_Variable.MarkIV_RH_PB5);
  //Checks whether the 'IsVisible' property of the 'PB6 image' object equals True.
  verifyVisibilityWithExistCheck(maint_JoystickStatus_Variable.MarkIV_RH_PB6);
  //Checks whether the 'IsVisible' property of the 'Wheel1 image' object equals True.
  verifyVisibilityWithExistCheck(maint_JoystickStatus_Variable.MarkIv_RH_Wheel1);
  //Checks whether the 'IsVisible' property of the 'linear guage Wheel1 area' object equals True.
  verifyVisibilityWithExistCheck(maint_JoystickStatus_Variable.MarkIV_RH_LinearGaugeRightWheel1);
  //Checks whether the 'IsVisible' property of the 'Wheel2 iamge' object equals True.
  verifyVisibilityWithExistCheck(maint_JoystickStatus_Variable.MarkIv_RH_Wheel2);
  //Checks whether the 'IsVisible' property of the 'linear guage Wheel2 area' object equals True.
  verifyVisibilityWithExistCheck(maint_JoystickStatus_Variable.MarkIV_RH_LinearGaugeRightWheel2);
  //Checks whether the 'IsVisible' property of the 'Wheel3 image' object equals True.
  verifyVisibilityWithExistCheck(maint_JoystickStatus_Variable.MarkIv_RH_Wheel3);
  //Checks whether the 'IsVisible' property of the 'Wheel3 and PB6' object equals True.
  verifyVisibilityWithExistCheck(maint_JoystickStatus_Variable.MarkIV_RH_PB6AndLinearGaugeRightWheel3);
  //Checks whether the 'IsVisible' property of the 'Deadman image' object equals True.
  verifyVisibilityWithExistCheck(maint_JoystickStatus_Variable.MarkIV_RH_Deadman);
  //Checks whether the 'IsVisible' property of the 'Whole Left Handle image' object equals True.
  verifyVisibilityWithExistCheck(maint_JoystickStatus_Variable.MarkIV_RH_WholeHandle);
  //Checks whether the 'IsVisible' property of the 'Left Linear guage image' object equals True.
  verifyVisibilityWithExistCheck(maint_JoystickStatus_Variable.MarkIV_RH_LinearGauge);
  //Checks whether the 'WPFControlText' property of the DRILL CONTROL: ON/OFF label object equals 'DRILL CONTROL: ON/OFF'.
  verifyWpfControlTextWithExistCheck(maint_JoystickStatus_Variable.MarkIV_RH_DrillControlOnOff_Label, "DRILL CONTROL: ON/OFF");
  //Checks whether the 'WPFControlText' property of the THREAD LUBE: ON label object equals 'THREAD LUBE: ON'.
  verifyWpfControlTextWithExistCheck(maint_JoystickStatus_Variable.MarkIV_RH_ThreadLubeOn_Label, "THREAD LUBE: ON");
  //Checks whether the 'WPFControlText' property of the WORKING AIR: ON/OFF label object equals 'WORKING AIR: ON/OFF'.
  verifyWpfControlTextWithExistCheck(maint_JoystickStatus_Variable.MarkIV_RH_WorkingAirOnOff_Label, "WORKING AIR: ON/OFF");
  //Checks whether the 'WPFControlText' property of the PIPE SUPPORT: IN label object equals 'PIPE SUPPORT: IN'.
  verifyWpfControlTextWithExistCheck(maint_JoystickStatus_Variable.MarkIV_RH_PipeSupportIn_Label, "PIPE SUPPORT: IN");
  //Checks whether the 'WPFControlText' property of the PIPE SUPPORT: OUT label object equals 'PIPE SUPPORT: OUT'.
  verifyWpfControlTextWithExistCheck(maint_JoystickStatus_Variable.MarkIV_RH_PipeSupportOut_Label, "PIPE SUPPORT: OUT");
  //Checks whether the 'WPFControlText' property of the RightWheel1Text label object equals 'RightWheel1Text'.
  verifyWpfControlTextWithExistCheck(maint_JoystickStatus_Variable.MarkIV_RH_RightWheel1_Label, "RightWheel1Text");
  //Checks whether the 'WPFControlText' property of the RightWheel2Text label object equals 'RightWheel2Text'.
  verifyWpfControlTextWithExistCheck(maint_JoystickStatus_Variable.MarkIV_RH_RightWheel2_Label, "RightWheel2Text");
  //Checks whether the 'WPFControlText' property of the RightWheel3Text label object equals 'RightWheel3Text'.
  verifyWpfControlTextWithExistCheck(maint_JoystickStatus_Variable.MarkIV_RH_RightWheel3_Label, "RightWheel3Text");
  //Checks whether the 'WPFControlText' property of the DEADMAN label on PB6 object equals 'DEADMAN'.
  verifyWpfControlTextWithExistCheck(maint_JoystickStatus_Variable.MarkIV_RH_Deadman_Label, "DEADMAN");
  //Checks whether the 'WPFControlText' property of the DEADMAN label on same button object equals 'DEADMAN'.
  verifyWpfControlTextWithExistCheck(maint_JoystickStatus_Variable.MarkIV_RH_Deadman_Label2, "DEADMAN");
  
  //Wheel one value capturing
  Log.Message("Left Wheel 1 value is: " + wpfControlText(maint_JoystickStatus_Variable.Value_Borders.Border.Child(0).Child(1)));
  Log.Message("Left Wheel 2 value is: " + wpfControlText(maint_JoystickStatus_Variable.Value_Borders.Border2.Child(0).Child(1)));
  Log.Message("Left Wheel 3 value is: " + wpfControlText(maint_JoystickStatus_Variable.Value_Borders.Border3.Child(0).Child(1)));
  Log.Message("Right Wheel 1 value is: " + wpfControlText(maint_JoystickStatus_Variable.Other_Value_Option.Border8.Child(0).Child(1)));
  Log.Message("Right Wheel 2 value is: " + wpfControlText(maint_JoystickStatus_Variable.Other_Value_Option.Border15.Child(0).Child(1)));
  Log.Message("Right Wheel 3 value is: " + wpfControlText(maint_JoystickStatus_Variable.Other_Value_Option.Border16.Child(0).Child(1)));
  Log.Message("Left Linear Guage value is: " + wpfControlText(maint_JoystickStatus_Variable.Other_Value_Option.Border14.Child(0).Child(1)));
  Log.Message("Right Linear Guage value is: " +wpfControlText( maint_JoystickStatus_Variable.Other_Value_Option.Border2.Border.Child(0).Child(1)));
  
  //Clicks the 'MoveBack' button.
  maint_MaintTest_Variable.Back_Btn.Click();
  //Close the application.
  closeHMI();
}