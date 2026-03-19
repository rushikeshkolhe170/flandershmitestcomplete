
//Active and History data check with validation

const {config, launchHMI, closeHMI, maintenanceModePass} = require('GlobalVariables');
const {mainOptionVariables} = require('MainOptionsVariable');
const {faultPageVariable} = require('FaultPage');
const {logIn, wpfControlText, wstate} = require('CommonFunc');

function ActiveHistoryData()
{
  //Login into the application.
  logIn();
  //Clicks the 'MainScreenButton' button.
  mainOptionVariables.MainScreen_Btn.ClickButton();
  //Clicks the 'FaultsButton' button.
  mainOptionVariables.Fault_Btn.ClickButton();
  //Clicks the 'ButtonReset' button.
  faultPageVariable.Reset_Btn.ClickButton();
  aqUtils.Delay(3000);
  //Check the state of History button as wState is 0.
  var HTabStatus = wstate(faultPageVariable.HistoryTab);
  if(HTabStatus != 0)
  {
    Log.Error("On Fault page open, Directly Hisotry tab is visible on screen instead of Active tab");
  }
  //Check the state of Active button as wState is 0.
  var ATabStatus = wstate(faultPageVariable.ActiveTab);
  if(ATabStatus == 0)
  {
    Log.Error("On Fault page open, Active tab is not open");
  }
  //Sets the 'TogglebuttonHistory' toggle button to the cbChecked state.
  faultPageVariable.HistoryTab.ClickButton(cbChecked);
  //Gettin gcount of all childs from table and wpfcontexttext of first fault date and timme.
  var count = faultPageVariable.FaultTable.ChildCount;
  var firstFaultWPFCT = wpfControlText(faultPageVariable.FaultTable.Child(count-6).Child(4).Child(0));
  Log.Message("Initial Fault WPF Text: " + firstFaultWPFCT);
  //Checking if the full description IsVisible for the first fault is True.
  if(!faultPageVariable.FaultTable.Child(count-6).Child(0).IsVisible)
  {
    Log.Warning("First fault in History tab is not showing full description");
  }
  //Clicks the Signle Down arrow button.
  faultPageVariable.SingleLineMove_Down_Arrow.ClickButton();
  if(faultPageVariable.FaultTable.Child(count-6).Child(0).IsVisible)
  {
    Log.Error("Single row down arrow is not working, First fault in History tab is showing full description instead of Second fault");
  }
  //Clicks the Signle Up arrow button.
  faultPageVariable.SingleLineMove_Up_Arrow.ClickButton();
  if(!faultPageVariable.FaultTable.Child(count-6).Child(0).IsVisible)
  {
    Log.Error("Single row up arrow is not working, First fault in History tab is not showing full description");
  }
  //Clicks the Next Page Down arrow button and do the validation.
  faultPageVariable.NextPageLineMove_Down_Arrow.ClickButton();
  aqUtils.Delay(3000);
  faultPageVariable.FaultTable.Refresh();
  count = faultPageVariable.FaultTable.ChildCount;
  var newFirstNextWPFCT = wpfControlText(faultPageVariable.FaultTable.Child(count-1).Child(4).Child(0));
  if(firstFaultWPFCT == newFirstNextWPFCT)
  {
    Log.Error("Next page down arrow is not working, First fault in History tab is showing full description instead of first fault from the next page");
  }
  //Clicks the Previous Page Up arrow button and do the validation.
  faultPageVariable.PreviousPageLineMove_Up_Arrow.ClickButton();
  aqUtils.Delay(3000);
  faultPageVariable.FaultTable.Refresh();
  count = faultPageVariable.FaultTable.ChildCount;
  var newFirstPreWPFCT = wpfControlText(faultPageVariable.FaultTable.Child(count-1).Child(4).Child(0));
  if(firstFaultWPFCT != newFirstPreWPFCT)
  {
    Log.Error("Previous page up arrow is not working, Another fault in History tab is showing full description instead of first fault from history tab");
  }
  //Clicks the List line Down arrow button.
  faultPageVariable.LastLine_Down_Arrow.ClickButton();
  aqUtils.Delay(3000);
  faultPageVariable.FaultTable.Refresh();
  count = faultPageVariable.FaultTable.ChildCount;
  var newLastWPFCT = wpfControlText(faultPageVariable.FaultTable.Child(count-1).Child(4).Child(0));
  Log.Message(firstFaultWPFCT + " is " + newLastWPFCT);
  if(firstFaultWPFCT == newLastWPFCT)
  {
    Log.Error("Last page down arrow is not working, First fault in History tab is showing full description instead of last fault from the histpry tab");
  }
  //Clicks the First line Up arrow button.
  faultPageVariable.FirstLine_Up_Arrow.ClickButton();
  aqUtils.Delay(3000);
  faultPageVariable.FaultTable.Refresh();
  count = faultPageVariable.FaultTable.ChildCount;
  var newFirstWPFCT = wpfControlText(faultPageVariable.FaultTable.Child(count-1).Child(4).Child(0));
  Log.Message(firstFaultWPFCT + " is " + newFirstWPFCT);
  if(firstFaultWPFCT != newFirstWPFCT)
  {
    Log.Error("First page up arrow is not working, Another fault in History tab is showing full description instead of first fault from history tab");
  }
  //Closes the 'HwndSource_MainWindow' window.
  closeHMI();
}