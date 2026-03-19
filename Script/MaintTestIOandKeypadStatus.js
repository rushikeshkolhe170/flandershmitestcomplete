
//IOStatus various screens in the differnet tabs availability on the screen.
//KeypadStatus various screens in the differnet tabs availability on the screen.

const {config, launchHMI, closeHMI, maintenanceModePass, commissioningPass} = require('GlobalVariables');
const {mainOptionVariables} = require('MainOptionsVariable');
const {maint_MaintTest_Variable} = require('MaintenancePage');
const {mainWindowVariables} = require('MainWindowPage');
const {logIn, verifyElementEnabled, verifyElementDisabled, verifyVisibilityWithExistCheck, searchAndSelectCheckboxComm} = require('CommonFunc');

function MaintTestIOStatus()
{
  //Login into the application.
  logIn();
  //Clicks the 'MaintenanceButton' button.
  mainOptionVariables.Maint_Btn.ClickButton();
  //Clicks the 'MachineTestButton' button.
  mainOptionVariables.MaintTest_Btn.ClickButton();
  //Checks whether the 'IsVisible' property of the IOStatus object equals True.
  verifyVisibilityWithExistCheck(maint_MaintTest_Variable.IOStatus_Btn_Label);
  //Clicks the 'ButtonIOStatus' button.
  maint_MaintTest_Variable.IOStatus_Btn.ClickButton();
  //Getting the size of all the tabcontrols on the screen.
  var size = maint_MaintTest_Variable.Status_TabControl.ChildCount;
  //Going through all the tabs one by one and verify the visibility of IODevice module on screen
  for (var i = 0; i <= size-2; i++) {
    maint_MaintTest_Variable.Status_TabControl.ClickTab(i);
    Log.Message("Clicked tab index: " + i);
    verifyVisibilityWithExistCheck(maint_MaintTest_Variable.Device_IOModule);
  }
  //Clicks the 'MoveBack' button.
  maint_MaintTest_Variable.Back_Btn.Click(51, 47);
  //Close the application.
  closeHMI();
}


function MaintTestKeypadStatus()
{
  //Login into the application.
  logIn();
  //Enabling options from commissioning to view all screens.
  commissioningPass();
  searchAndSelectCheckboxComm("MaintenanceKeypadLeftTopShow", mainWindowVariables.commMaintenancekeypadlefttopshow, "MaintenanceKeypadLeftTopShow");
  searchAndSelectCheckboxComm("MaintenanceKeypadRightTopShow", mainWindowVariables.commMaintenancekeypadrighttopshow, "MaintenanceKeypadRightTopShow");
  searchAndSelectCheckboxComm("MaintenanceKeypadLeftBottomShow", mainWindowVariables.commMaintenancekeypadleftbottomshow, "MaintenanceKeypadLeftBottomShow");
  searchAndSelectCheckboxComm("MaintenanceKeypadLeftMiddleShow", mainWindowVariables.commMaintenancekeypadleftmiddleshow, "MaintenanceKeypadLeftMiddleShow");
  searchAndSelectCheckboxComm("MaintenanceKeypadRightBottomShow", mainWindowVariables.commMaintenancekeypadrightbottomshow, "MaintenanceKeypadRightBottomShow");
  searchAndSelectCheckboxComm("MaintenanceKeypadRightMiddleShow", mainWindowVariables.commMaintenancekeypadrightmiddleshow, "MaintenanceKeypadRightMiddleShow");
  //Closes the 'Commissioning screen' window.
  mainWindowVariables.CommWindow.Close();
  //Clicks the 'MaintenanceButton' button.
  mainOptionVariables.Maint_Btn.ClickButton();
  //Clicks the 'MachineTestButton' button.
  mainOptionVariables.MaintTest_Btn.ClickButton();
  //Checks whether the 'Visible' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.TextblockKeypadStatus object equals True.
  verifyVisibilityWithExistCheck(maint_MaintTest_Variable.KeypadStatus_Btn_Label);
  //Clicks the 'ButtonKeypadStatus' button.
  maint_MaintTest_Variable.KeypadStatus_Btn.ClickButton();
  //Getting the size of all the tabcontrols on the screen.
  var size = maint_MaintTest_Variable.Status_TabControl.ChildCount;
  //Going through all the tabs one by one and verify the visibility of IODevice module on screen
  for (var i = 0; i <= size-2; i++) {
    maint_MaintTest_Variable.Status_TabControl.ClickTab(i);
    Log.Message("Clicked tab index: " + i);
    verifyVisibilityWithExistCheck(maint_MaintTest_Variable.Keypad_Module);
  }  
  //Clicks the 'MoveBack' button.
  maint_MaintTest_Variable.Back_Btn.Click(51, 47);
  //Close the application.
  closeHMI();
}