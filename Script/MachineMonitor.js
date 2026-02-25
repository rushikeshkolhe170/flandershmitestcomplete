
// Machine Monitor all tabs view.
// Before running script do add MachineMonitor.xml file in the client folder also there are so many options in xml file which I am using it depends on the file may be few options are not available do check that.

const {config, launchHMI, closeHMI, maintenanceModePass} = require('GlobalVariables');
const {mainOptionVariables} = require('MainOptionsVariable');
const {maint_MachineMonitor_Variable} = require('MaintenancePage');
const {logIn, checkVisibilityAndClick, verifyElementEnabled, verifyElementDisabled, verifyVisibilityWithExistCheck} = require('CommonFunc');

function MachineMonitor()
{
  //Login into the application.
  logIn();
  //Clicks the 'MaintenanceButton' button.
  mainOptionVariables.Maint_Btn.ClickButton();
  //Clicks the 'MAchine Monitor' button.
  mainOptionVariables.MachineMonitor_Btn.ClickButton();
  aqUtils.Delay(5000);
  //Checks whether the 'IsVisible' property of the Lube tab object equals True and select it.
  checkVisibilityAndClick(maint_MachineMonitor_Variable.LubeTab, "Lube");
  //Checking the data visibility and printing it in console and then refresh data.
  aqUtils.Delay(2000);
  if(maint_MachineMonitor_Variable.DataInTab.IsVisible)
  {
    var count = maint_MachineMonitor_Variable.DataInTab.ChildCount;
    for(var i = 0; i < count; i++)
    {
      var linearGuageTitle = maint_MachineMonitor_Variable.DataInTab.Child(i).Child(0).Child(4).Child(1).WPFControlText;
      if(!maint_MachineMonitor_Variable.DataInTab.Child(i).Child(0).Child(4).Child(0).Enabled)
      {
        Log.Warning("Value box for " + linearGuageTitle + " is not Enabled");
      }
      var linearGuageValue = maint_MachineMonitor_Variable.DataInTab.Child(i).Child(0).Child(4).Child(0).Child(0).Child(0).Child(2).WPFControlText;
      var linearGuageUnit = maint_MachineMonitor_Variable.DataInTab.Child(i).Child(0).Child(4).Child(0).Child(0).Child(0).Child(1).WPFControlText;
      if(!maint_MachineMonitor_Variable.DataInTab.Child(i).Child(0).Child(5).Enabled)
      {
        Log.Warning("Linear Guage bar for " + linearGuageTitle + " is not Enabled");
      }
      Log.Message(linearGuageTitle + " has " + linearGuageValue + " " + linearGuageUnit + " value.");
    }
  } else
  {
    Log.Warning("Linear bars data is not available for the tab");
  }
  maint_MachineMonitor_Variable.Data1.Refresh();
  //Checks whether the 'IsVisible' property of the MainMotor Tab object equals True and select it.
  checkVisibilityAndClick(maint_MachineMonitor_Variable.MainMotorTab, "Main Motor");
  //Checking the data visibility and printing it in console and then refresh data.
  aqUtils.Delay(2000);
  DataChecking();
  maint_MachineMonitor_Variable.Data.Refresh();
  //Checks whether the 'IsVisible' property of the Mast Tab object equals True and select it.
  checkVisibilityAndClick(maint_MachineMonitor_Variable.MastTab, "Mast");
  //Checking the data visibility and printing it in console and then refresh data.
  aqUtils.Delay(2000);
  DataChecking();
  maint_MachineMonitor_Variable.Data.Refresh();
  //Checks whether the 'IsVisible' property of the Miscellaneous Tab object equals True and select it.
  checkVisibilityAndClick(maint_MachineMonitor_Variable.MiscellaneousTab, "Miscellaneous");
  //Checking the data visibility and printing it in console and then refresh data.
  aqUtils.Delay(2000);
  DataChecking();
  maint_MachineMonitor_Variable.Data.Refresh();
  //Checks whether the 'IsVisible' property of the PipeRack Tab object equals True and select it.
  checkVisibilityAndClick(maint_MachineMonitor_Variable.PipeRackTab, "Pipe Rack");
  //Checking the data visibility and printing it in console and then refresh data.
  aqUtils.Delay(2000);
  DataChecking();
  maint_MachineMonitor_Variable.Data.Refresh();
  //Checks whether the 'IsVisible' property of the Power Tab object equals True and select it.
  checkVisibilityAndClick(maint_MachineMonitor_Variable.PowerTab, "Power");
  //Checking the data visibility and printing it in console and then refresh data.
  aqUtils.Delay(2000);
  DataChecking();
  maint_MachineMonitor_Variable.Data.Refresh();
  //Checks whether the 'IsVisible' property of the Propel Tab object equals True and select it.
  checkVisibilityAndClick(maint_MachineMonitor_Variable.PropelTab, "Propel");
  //Checking the data visibility and printing it in console and then refresh data.
  aqUtils.Delay(2000);
  DataChecking();
  maint_MachineMonitor_Variable.Data.Refresh();
  //Checks whether the 'IsVisible' property of the Rotary Tab object equals True and select it.
  checkVisibilityAndClick(maint_MachineMonitor_Variable.RotaryTab, "Rotary");
  //Checking the data visibility and printing it in console and then refresh data.
  aqUtils.Delay(2000);
  DataChecking();
  maint_MachineMonitor_Variable.Data.Refresh();
  //Checks whether the 'IsVisible' property of the Stairs Tab object equals True and select it.
  checkVisibilityAndClick(maint_MachineMonitor_Variable.StairsTab, "Stairs");
  //Checking the data visibility and printing it in console and then refresh data.
  aqUtils.Delay(2000);
  DataChecking();
  maint_MachineMonitor_Variable.Data.Refresh();
  //Checks whether the 'IsVisible' property of the WaterInjection object equals True and select it.
  checkVisibilityAndClick(maint_MachineMonitor_Variable.WaterInjectionTab, "Water Injection");
  //Checking the data visibility and printing it in console and then refresh data.
  aqUtils.Delay(2000);
  DataChecking();
  maint_MachineMonitor_Variable.Data.Refresh();
  //Checks whether the 'IsVisible' property of the Winch Tab object equals True and select it.
  checkVisibilityAndClick(maint_MachineMonitor_Variable.WinchTab, "Winch");
  //Checking the data visibility and printing it in console and then refresh data.
  aqUtils.Delay(2000);
  DataChecking();
  maint_MachineMonitor_Variable.Data.Refresh();
  //Checks whether the 'IsVisible' property of the WipersWashers Tab object equals True and select it.
  checkVisibilityAndClick(maint_MachineMonitor_Variable.WiperWasherTab, "Wipers Washers");
  //Checking the data visibility and printing it in console and then refresh data.
  aqUtils.Delay(2000);
  DataChecking();
  maint_MachineMonitor_Variable.Data.Refresh();
  //Checks whether the 'IsVisible' property of the BreakOut Tab object equals True and select it.
  checkVisibilityAndClick(maint_MachineMonitor_Variable.BreakOutTab, "Break Out");
  //Checking the data visibility and printing it in console and then refresh data.
  aqUtils.Delay(2000);
  DataChecking();
  maint_MachineMonitor_Variable.Data.Refresh();
  //Checks whether the 'IsVisible' property of the CableReel Tab object equals True and select it.
  checkVisibilityAndClick(maint_MachineMonitor_Variable.CableReelTab, "Cable Reel");
  //Checking the data visibility and printing it in console and then refresh data.
  aqUtils.Delay(2000);
  DataChecking();
  maint_MachineMonitor_Variable.Data.Refresh();
  //Checks whether the 'IsVisible' property of the Compressor Tab object equals True and select it.
  checkVisibilityAndClick(maint_MachineMonitor_Variable.CompressorTab, "Compressor");
  //Checking the data visibility and printing it in console and then refresh data.
  aqUtils.Delay(2000);
  DataChecking();
  maint_MachineMonitor_Variable.Data.Refresh();
  //Checks whether the 'IsVisible' property of the DeckFork Tab object equals True and select it.
  checkVisibilityAndClick(maint_MachineMonitor_Variable.DeckForkTab, "Deck Fork");
  //Checking the data visibility and printing it in console and then refresh data.
  aqUtils.Delay(2000);
  DataChecking();
  maint_MachineMonitor_Variable.Data.Refresh();
  //Checks whether the 'IsVisible' property of the DeckHatch Tab object equals True and select it.
  checkVisibilityAndClick(maint_MachineMonitor_Variable.DeckHatchTab, "Deck Hatch");
  //Checking the data visibility and printing it in console and then refresh data.
  aqUtils.Delay(2000);
  DataChecking();
  maint_MachineMonitor_Variable.Data.Refresh();
  //Checks whether the 'IsVisible' property of the DustCurtain Tab object equals True and select it.
  checkVisibilityAndClick(maint_MachineMonitor_Variable.DustCurtainTab, "Dust Curtain");
  //Checking the data visibility and printing it in console and then refresh data.
  aqUtils.Delay(2000);
  DataChecking();
  maint_MachineMonitor_Variable.Data.Refresh();
  //Checks whether the 'IsVisible' property of the EStops Tab object equals True and select it.
  checkVisibilityAndClick(maint_MachineMonitor_Variable.EStopsTab, "E-Stops");
  //Checking the data visibility and printing it in console and then refresh data.
  aqUtils.Delay(2000);
  DataChecking();
  maint_MachineMonitor_Variable.Data.Refresh();
  //Checks whether the 'IsVisible' property of the FlandersIo Tab object equals True and select it.
  checkVisibilityAndClick(maint_MachineMonitor_Variable.FlandersIOTab, "Flanders IO");
  //Checking the data visibility and printing it in console and then refresh data.
  aqUtils.Delay(2000);
  DataChecking();
  maint_MachineMonitor_Variable.Data.Refresh();
  //Checks whether the 'IsVisible' property of the Hoist Tab object equals True and select it.
  checkVisibilityAndClick(maint_MachineMonitor_Variable.HoistTab, "Hoist");
  //Checking the data visibility and printing it in console and then refresh data.
  aqUtils.Delay(2000);
  DataChecking();
  maint_MachineMonitor_Variable.Data.Refresh();
  //Checks whether the 'IsVisible' property of the Hydraulic Tab object equals True and select it.
  checkVisibilityAndClick(maint_MachineMonitor_Variable.HydraulicTab, "Hydraulic");
  //Checking the data visibility and printing it in console and then refresh data.
  aqUtils.Delay(2000);
  DataChecking();
  maint_MachineMonitor_Variable.Data.Refresh();
  //Checks whether the 'IsVisible' property of the Leveling Tab object equals True and select it.
  checkVisibilityAndClick(maint_MachineMonitor_Variable.LevelingTab, "Leveling");
  //Checking the data visibility and printing it in console and then refresh data.
  aqUtils.Delay(2000);
  DataChecking();
  maint_MachineMonitor_Variable.Data.Refresh();
  //Checks whether the 'IsVisible' property of the Lights Tab object equals True and select it.
  checkVisibilityAndClick(maint_MachineMonitor_Variable.LightsTab, "Lights");
  //Checking the data visibility and printing it in console and then refresh data.
  aqUtils.Delay(2000);
  DataChecking();
  maint_MachineMonitor_Variable.Data.Refresh();
  //Close the application.
  closeHMI();
}

function DataChecking()
{
  if(maint_MachineMonitor_Variable.Data.IsVisible)
  {
    var count = maint_MachineMonitor_Variable.Data.Child(1).ChildCount;
    if(count == 0)
    {
      Log.Warning("Tab has no data");
    }
    for(var i = 0; i < count; i++)
    {
      var linearGuageTitle = maint_MachineMonitor_Variable.Data.Child(1).Child(i).Child(0).Child(4).Child(1).WPFControlText;
      if(!maint_MachineMonitor_Variable.Data.Child(1).Child(i).Child(0).Child(4).Child(0).Enabled)
      {
        Log.Warning("Value box for " + linearGuageTitle + " is not Enabled");
      }
      var linearGuageValue = maint_MachineMonitor_Variable.Data.Child(1).Child(i).Child(0).Child(4).Child(0).Child(0).Child(0).Child(2).WPFControlText;
      var linearGuageUnit = maint_MachineMonitor_Variable.Data.Child(1).Child(i).Child(0).Child(4).Child(0).Child(0).Child(0).Child(1).WPFControlText;
      if(!maint_MachineMonitor_Variable.Data.Child(1).Child(i).Child(0).Child(5).Enabled)
      {
        Log.Warning("Linear Guage bar for " + linearGuageTitle + " is not Enabled");
      }
      Log.Message(linearGuageTitle + " has " + linearGuageValue + " " + linearGuageUnit + " value.");
    }
  } else
  {
    Log.Warning("Linear bars data is not available for the tab");
  }
}