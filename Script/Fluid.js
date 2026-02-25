
// Fluid option negative and positive scenarios testing

const {config, launchHMI, closeHMI, maintenanceModePass} = require('GlobalVariables');
const {mainOptionVariables} = require('MainOptionsVariable');
const {maint_Fluid_Variable} = require('MaintenancePage');
const {logIn, verifyWpfControlTextWithExistCheck, verifyVisibilityWithExistCheck, verifyElementEnabled, verifyElementDisabled, verifyWTextWithExistCheck} = require('CommonFunc');

function Fluid()
{
  //Login into the application.
  logIn();
  //Clicks the 'MaintenanceButton' button.
  mainOptionVariables.Maint_Btn.ClickButton();
  //Clicks the 'FluidsButton' button.
  mainOptionVariables.Fluid_Btn.ClickButton();
  aqUtils.Delay(3000);
  //Checks whether the 'IsVisible' property of the Fluid Panel object equals True.
  verifyVisibilityWithExistCheck(maint_Fluid_Variable.Fluid_Panel);
  //Checks whether the 'WPFControlText' property of the Fluid Input title object equals 'Fluid Input'.
  verifyWpfControlTextWithExistCheck(maint_Fluid_Variable.FluidPanel_Title, "Fluid Input");
  //Checks whether the 'WPFControlText' property of the Select Fluid Type title object equals 'Select Fluid Type'.
  verifyWpfControlTextWithExistCheck(maint_Fluid_Variable.FluidSelectDropdown_Title, "Select Fluid Type")
  //Checks whether the 'WPFControlText' property of the Enter Amount of Fluid title object equals 'Enter the Amount of Fluid Added'.
  verifyWpfControlTextWithExistCheck(maint_Fluid_Variable.EnterAmountDropdown_Title, "Enter the Amount of Fluid Added");
  //Checks whether the 'WPFControlText' property of the Select Fluid Type dropdown placeholder object equals 'Select Fluid Type'.
  verifyWTextWithExistCheck(maint_Fluid_Variable.SelectFluidTypeDropdown, "Select Fluid Type")
  //Checks whether the 'WPFControlText' property of the Liter label object equals 'litres'.
  verifyWpfControlTextWithExistCheck(maint_Fluid_Variable.LiterLabel, "litres");
  //Checks whether the 'IsVisible' property of the Cancel button object equals True.
  verifyVisibilityWithExistCheck(maint_Fluid_Variable.Cancel_Btn);
  //Checks whether the 'IsVisible' property of the Save button object equals True.
  verifyVisibilityWithExistCheck(maint_Fluid_Variable.Save_Btn);
  //Opening all the options one by one from list and check negative and positive scenarios. 
  maint_Fluid_Variable.SelectFluidTypeDropdown.DropDown();
  var count = maint_Fluid_Variable.SelectFluidTypeDropdown.Items.Count;
  for(var i = 1; i < count; i++){
    //verifying empty amount of fluid error negative scenario
    maint_Fluid_Variable.SelectFluidTypeDropdown.ClickItem(i);
    maint_Fluid_Variable.Save_Btn.ClickButton();
    verifyWpfControlTextWithExistCheck(maint_Fluid_Variable.Error_Msg, "Enter the Amount of Fluid Added");
    maint_Fluid_Variable.ErrorMsgOk_Btn.ClickButton();
    //opening the calculator and using less than minimum value to check negative scenario
    maint_Fluid_Variable.Calculator_Btn.ClickButton();
    maint_Fluid_Variable.CaluclatorWindow.ButtonAddMinus.ClickButton();
    maint_Fluid_Variable.CaluclatorWindow.Button1.ClickButton();
    maint_Fluid_Variable.CaluclatorWindow.ButtonAccept.ClickButton();
    verifyWpfControlTextWithExistCheck(maint_Fluid_Variable.MsgText, "You must enter a value between 0 and 1000000 to continue.")
    maint_Fluid_Variable.MsgOK_Btn.ClickButton();
    //opening the calculator and using more than maximum value to check negative scenario
    maint_Fluid_Variable.CaluclatorWindow.ButtonClear.ClickButton();
    maint_Fluid_Variable.CaluclatorWindow.Button1.ClickButton();
    maint_Fluid_Variable.CaluclatorWindow.Button0.DblClick();
    maint_Fluid_Variable.CaluclatorWindow.Button0.DblClick();
    maint_Fluid_Variable.CaluclatorWindow.Button0.ClickButton();
    maint_Fluid_Variable.CaluclatorWindow.Button1.ClickButton();
    maint_Fluid_Variable.CaluclatorWindow.ButtonAccept.ClickButton();
    verifyWpfControlTextWithExistCheck(maint_Fluid_Variable.MsgText, "You must enter a value between 0 and 1000000 to continue.")
    maint_Fluid_Variable.MsgOK_Btn.ClickButton();
    //opening the calculator and using valid value to check positive scenario
    maint_Fluid_Variable.CaluclatorWindow.ButtonClear.ClickButton();
    maint_Fluid_Variable.CaluclatorWindow.Button1.ClickButton();
    maint_Fluid_Variable.CaluclatorWindow.Button0.ClickButton();
    maint_Fluid_Variable.CaluclatorWindow.ButtonAccept.ClickButton();
    maint_Fluid_Variable.Save_Btn.ClickButton();
    //Verifying the saved tick after successfull scenario
    verifyVisibilityWithExistCheck(maint_Fluid_Variable.SavedTick);
  }
  //Closes the 'HwndSource_MainWindow' window.
  closeHMI();
}