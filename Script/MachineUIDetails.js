
const {config, launchHMI, closeHMI, commissioningPass} = require('GlobalVariables');
const {mainOptionVariables} = require('MainOptionsVariable');
const {mainWindowVariables} = require('MainWindowPage');
const {Sandvik412I, Sandvik416I, Sandvik410I, AtlasCopco2714JackWithStairs, AtlasCopco271MastStairs, Epiroc271E, AtlasCopco351E, AtlasCopco351, Cat6420,
Cat6420FiveEStops, AtlasCopco235, AtlasCopco2713Jack, AtlasCopco2714Jack, AtlasCopco275} = require('MachinesUIandLabelPage');
const {preInspectionVariables} = require('PreInspectionPage');
//const {Browser_Variables, Commissioning_Variables} = require('BrowserPage');
const {logIn, searchAndSelectDropdownItemComm, checkVisibilityAndClick, TypeOnKeyboard} = require('CommonFunc');

function MachineUIDetails()
{
  //Checking if the HMI is open and if yes then it will close first and then open
  if(Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.Exists){
    closeHMI();
  }
  /*
  aqUtils.Delay(3000);
  //open diagnostic dashboard browser.
  openDiagnosticDashboard();
  //Clicks the 'linkCommissioning' link.
  Browser_Variables.CommissioningOption.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageDiagnosticDashboard2.Wait();
  //Clicks the 'panelMachineConfiguration' control.
  Commissioning_Variables.MachineConfiguration_Opt.Click();
  //If SandvikDR410i is selected then it will select Sandvikdr412i.
  if(Commissioning_Variables.MachineType_Btn.textContent == "SandvikDR412i"){
    Commissioning_Variables.MachineType_Btn.ClickButton();
    machineEle("Sandvikdr410i").Click();
    Browser_Variables.Save1_Btn.ClickButton();
    Browser_Variables.ConfirmationSave_Btn.ClickButton();
  }
  */
  aqUtils.Delay(3000);
  
  /*
  //Selecting Sandvikdr412i machine
  selectMachineType("Sandvikdr412i2");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: SandvikDR412i");
  //Verifying sandivik412i ui and label
  Sandvik412I();
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  */
  //Verifying machine "SandvikDR412i"
  ////veryfingMachine("SandvikDR412i");
  ////aqUtils.Delay(3000);
  //Verifying sandivik412i ui and label
  ////Sandvik412I();
  //Closed HMI
  ////closeHMI();
  ////aqUtils.Delay(3000);
  
  /*
  //Selecting Sandvikdr416i machine
  selectMachineType("Sandvikdr416i");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: SandvikDR416i");
  //Verifying sandivik416i ui and label
  Sandvik416I();
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  */
  //Verifying machine "SandvikDR416i"
  ////veryfingMachine("SandvikDR416i");
  ////aqUtils.Delay(3000);
  //Verifying sandivik416i ui and label
  ////Sandvik416I();
  //Closed HMI
  ////closeHMI();
  ////aqUtils.Delay(3000);
  
  /*
  //Selecting Sandvikdr410i machine
  selectMachineType("Sandvikdr410i");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: SandvikDR410i");
  //Verifying sandivik410i ui and label
  Sandvik410I();
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  */
  //Verifying machine "SandvikDR410i"
  ////veryfingMachine("SandvikDR410i");
  ////aqUtils.Delay(3000);
  //Verifying sandivik410i ui and label
  ////Sandvik410I();
  //Closed HMI
  ////closeHMI();
  ////aqUtils.Delay(3000);
  
  /*
  //Selecting AtlasCopco2714JackWithStairs machine
  selectMachineType("AtlasCopco2714JackWithStairs");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: AtlasCopco2714JackWithStairs");
  //Verifying AtlasCopco2714JackWithStairs ui and label
  AtlasCopco2714JackWithStairs();
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  */
  //Verifying machine "AtlasCopco2714JackWithStairs"
  ////veryfingMachine("AtlasCopco2714JackWithStairs");
  ////aqUtils.Delay(3000);
  //Verifying AtlasCopco2714JackWithStairs ui and label
  ////AtlasCopco2714JackWithStairs();
  //Closed HMI
  ////closeHMI();
  ////aqUtils.Delay(3000);
  
  /*
  //Selecting AtlasCopco271MastStairs machine
  selectMachineType("AtlasCopco271MastStairs");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: AtlasCopco271MastStairs");
  //Verifying AtlasCopco271MastStairs ui and label
  AtlasCopco271MastStairs();
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  */
  //Verifying machine "AtlasCopco271MastStairs"
  ////veryfingMachine("AtlasCopco271MastStairs");
  ////aqUtils.Delay(3000);
  //Verifying AtlasCopco271MastStairs ui and label
  ////AtlasCopco271MastStairs();
  //Closed HMI
  ////closeHMI();
  ////aqUtils.Delay(3000);
  
  /*
  //Selecting Epiroc271E machine
  selectMachineType("Epiroc271E");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: Epiroc271E");
  //Verifying Epiroc271E ui and label
  Epiroc271E();
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  */
  //Verifying machine "Epiroc271E"
  ////veryfingMachine("Epiroc271E");
  ////aqUtils.Delay(3000);
  //Verifying Epiroc271E ui and label
  ////Epiroc271E();
  //Closed HMI
  ////closeHMI();
  ////aqUtils.Delay(3000);
  
  /*
  //Selecting AtlasCopco351E machine
  selectMachineType("AtlasCopco351E");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: AtlasCopco351E");
  //Verifying AtlasCopco351E ui and label
  AtlasCopco351E();
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  */
  //Verifying machine "AtlasCopco351E"
  ////veryfingMachine("AtlasCopco351E");
  ////aqUtils.Delay(3000);
  //Verifying AtlasCopco351E ui and label
  ////AtlasCopco351E();
  //Closed HMI
  ////closeHMI();
  ////aqUtils.Delay(3000);
  
  /*
  //Selecting AtlasCopco351 machine
  selectMachineType("AtlasCopco351");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: AtlasCopco351");
  //Verifying AtlasCopco351 ui and label
  AtlasCopco351();
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  */
  //Verifying machine "AtlasCopco351"
  ////veryfingMachine("AtlasCopco351");
  ////aqUtils.Delay(3000);
  //Verifying AtlasCopco351 ui and label
  ////AtlasCopco351();
  //Closed HMI
  ////closeHMI();
  ////aqUtils.Delay(3000);
  
  /*
  //Selecting Cat6420 machine
  selectMachineType("Cat6420");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: Cat6420");
  //Verifying Cat6420 ui and label
  Cat6420();
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  */
  //Verifying machine "Cat6420"
  ////veryfingMachine("Cat6420");
  ////aqUtils.Delay(3000);
  //Verifying Cat6420 ui and label
  ////Cat6420();
  //Closed HMI
  ////closeHMI();
  ////aqUtils.Delay(3000);
  
  /*
  //Selecting Cat6420FiveEStops machine
  selectMachineType("Cat6420FiveEStops");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: Cat6420FiveEStops");
  //Verifying Cat6420FiveEStops ui and label
  Cat6420FiveEStops();
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  */
  //Verifying machine "Cat6420FiveEStops"
  ////veryfingMachine("Cat6420FiveEStops");
  ////aqUtils.Delay(3000);
  //Verifying Cat6420FiveEStops ui and label
  ////Cat6420FiveEStops();
  //Closed HMI
  ////closeHMI();
  ////aqUtils.Delay(3000);
  
  /*
  //Selecting AtlasCopco235 machine
  selectMachineType("AtlasCopco235");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: AtlasCopco235");
  //Verifying AtlasCopco235 ui and label
  AtlasCopco235();
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  */
  //Verifying machine "AtlasCopco235"
  ////veryfingMachine("AtlasCopco235");
  ////aqUtils.Delay(3000);
  //Verifying AtlasCopco235 ui and label
  ////AtlasCopco235();
  //Closed HMI
  ////closeHMI();
  ////aqUtils.Delay(3000);
  
  /*
  //Selecting AtlasCopco2713Jack machine
  selectMachineType("AtlasCopco2713Jack");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: AtlasCopco2713Jack");
  //Verifying AtlasCopco2713Jack ui and label
  AtlasCopco2713Jack();
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  */
  //Verifying machine "AtlasCopco2713Jack"
  ////veryfingMachine("AtlasCopco2713Jack");
  ////aqUtils.Delay(3000);
  //Verifying AtlasCopco2713Jack ui and label
  ////AtlasCopco2713Jack();
  //Closed HMI
  ////closeHMI();
  ////aqUtils.Delay(3000);
  
  /*
  //Selecting AtlasCopco2714Jack machine
  selectMachineType("AtlasCopco2714Jack");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: AtlasCopco2714Jack");
  //Verifying AtlasCopco2714Jack ui and label
  AtlasCopco2714Jack();
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  */
  //Verifying machine "AtlasCopco2714Jack"
  ////veryfingMachine("AtlasCopco2714Jack");
  ////aqUtils.Delay(3000);
  //Verifying AtlasCopco2714Jack ui and label
  ////AtlasCopco2714Jack();
  //Closed HMI
  ////closeHMI();
  ////aqUtils.Delay(3000);
  
  /*
  //Selecting AtlasCopco275 machine
  selectMachineType("AtlasCopco275");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: AtlasCopco275");
  //Verifying AtlasCopco275 ui and label
  AtlasCopco275();
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  */
  //Verifying machine "AtlasCopco275"
  veryfingMachine("AtlasCopco275");
  aqUtils.Delay(3000);
  //Verifying AtlasCopco275 ui and label
  AtlasCopco275();
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
}

function machineEle(machineName)
{ 
  //returning machine element with text of machine 
  return Aliases.browser.pageDiagnosticDashboard2["textnode" + machineName];
}

function selectMachineType(machine)
{
  //Clicks the 'machine type' button.
  Commissioning_Variables.MachineType_Btn.ClickButton();
  //Clicks the required machine.
  machineEle(machine).Click();
  //Clicks the 'buttonSave1' button.
  Browser_Variables.Save1_Btn.ClickButton();
  //Clicks the 'buttonSave' button.
  Browser_Variables.ConfirmationSave_Btn.ClickButton();
}

function veryfingMachine(machineName)
{
  //Runs the "Flanders_Ardvarc_Hmi_Client" tested application.
  launchHMI();
  //Opening commissioning settings.
  commissioningPass();
  //Searching for 'MachineType' button and select the checkbox if not selected
  searchAndSelectDropdownItemComm("MachineType", mainWindowVariables.commMachineType, "MachineType", machineName);
  //Closes the 'HwndSource_SeriousWindow' window.
  mainWindowVariables.CommWindow.Close();
  //Logged in
  loggedIN();
  //Clicks the 'MachineStatusButton' button.
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: " + machineName);
}

function loggedIN()
{
  // Operator A selection
  checkVisibilityAndClick(mainWindowVariables.OperatorA, config.opA);
  // Machine Status 'Effective Time' selection
  checkVisibilityAndClick(mainWindowVariables.Effective_Time, config.status);
  // Machine Status Details 'Operating - Drill - Autonomous' selection
  checkVisibilityAndClick(mainWindowVariables.Operating_Drill_Autonomous, config.statusDetails);
  //Clicks the 'ChangeOperatorButton' button.
  mainWindowVariables.Change_StatusBtn.ClickButton();
  //Select PreInspection details and pass
  preInspectionPass();
}

function preInspectionPass()
{
  if(preInspectionVariables.ShiftDropdown.Exists){
    //Clicks the 'description input keyboard' button.
    preInspectionVariables.Description_Keyboard_Open.ClickButton();
    //Enter Descripton text
    TypeOnKeyboard(textToInput);
    //Clicks the 'ButtonAccept' button.
    preInspectionVariables.Keyboard_Accept_Btn.ClickButton();
    //Clicks the 'OkButton' button.
    preInspectionVariables.Popup_OK_Btn.ClickButton();
    //Sets the state of the 'NA' check box to cbChecked.
    getBOBox().ClickButton(cbChecked);
    //Selects the 'Day' item of the 'ComboBox' combo box.
    preInspectionVariables.ShiftDropdown.ClickItem("Day");
    //Clicks the 'ButtonAccept' button.
    preInspectionVariables.Inspection_Accept_Btn.ClickButton();
  }
}

function getNABox(){
  return preInspectionVariables.UserControl.Child(0).Child(9).Child(0).Child(1);
}

function getBOBox(){
  return preInspectionVariables.UserControl.Child(0).Child(10).Child(0).Child(1);
}

function getOKBox(){
  return preInspectionVariables.UserControl.Child(0).Child(11).Child(0).Child(1);
}

function getPMBox(){
  return preInspectionVariables.UserControl.Child(0).Child(8).Child(0).Child(1);
} 