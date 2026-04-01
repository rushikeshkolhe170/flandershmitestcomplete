// Verifying all the machine status by changing machine from dashbiard

const {config, launchHMI, closeHMI, commissioningPass, openDiagnosticDashboard, closeDiagnosticDashboard} = require('GlobalVariables');
const {mainOptionVariables} = require('MainOptionsVariable');
const {mainWindowVariables} = require('MainWindowPage');
const {Sandvik412I, Sandvik416I, Sandvik410I, AtlasCopco2714JackWithStairs, AtlasCopco271MastStairs, Epiroc271E, AtlasCopco351E, AtlasCopco351, Cat6420,
Cat6420FiveEStops, AtlasCopco235, AtlasCopco2713Jack, AtlasCopco2714Jack, AtlasCopco275, AtlasCopco275MastStairs, AtlasCopcoD65, AtlasCopcoDML, AtlasCopcoDMLHP,
Bucyrus49R, BucyrusSKSS16, Cat6250, Cat6310, Cat6640, Cat6640Siemens, Cat6540, PH120, PH320XPC, PH320et200sp, SandvikD90, SandvikDR460} = require('MachinesUIandLabelPage');
const {preInspectionVariables} = require('PreInspectionPage');
const {machineStatusVariables} = require('MachineStatusPage');
const {Browser_Variables, Commissioning_Variables, MachineConfig_Variables} = require('BrowserPage');
const {logIn, searchAndSelectDropdownItemComm, checkVisibilityAndClick, TypeOnKeyboard} = require('CommonFunc');

function MachineUIDetails()
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
  //Clicks the 'panelMachineConfiguration' control.
  Commissioning_Variables.MachineConfiguration_Opt().Click();
  //If SandvikDR410i is selected then it will select Sandvikdr412i.
  if(MachineConfig_Variables.MachineType_Btn().textContent == "SandvikDR412i"){
    MachineConfig_Variables.MachineType_Btn().Click();
    machineEle("Sandvikdr410i").Click();
    Browser_Variables.Save_Btn().Click();
    Browser_Variables.ConfirmationSave_Btn().Click();
  }
  aqUtils.Delay(3000);
  
  //Selecting Sandvikdr412i machine
  selectMachineType("Sandvikdr412i");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: SandvikDR412i");
  //Verifying Sandvik412i ui and label
  if(machineStatusVariables.MachineUnavailable_Text.Exists == true){
    Log.Warning("UI for the selected machine is not available");
  } else{
    Sandvik412I();
  }
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  
  //Selecting Sandvikdr416i machine
  selectMachineType("Sandvikdr416i");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: SandvikDR416i");
  //Verifying Sandvik416i ui and label
  if(machineStatusVariables.MachineUnavailable_Text.Exists == true){
    Log.Warning("UI for the selected machine is not available");
  } else{
    Sandvik416I();
  }
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  
  //Selecting Sandvikdr410i machine
  selectMachineType("Sandvikdr410i");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: SandvikDR410i");
  //Verifying Sandvik410i ui and label
  if(machineStatusVariables.MachineUnavailable_Text.Exists == true){
    Log.Warning("UI for the selected machine is not available");
  } else{
    Sandvik410I();
  }
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  
  //Selecting AtlasCopco2714JackWithStairs machine
  selectMachineType("Atlascopco2714jackwithst");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: AtlasCopco2714JackWithStairs");
  //Verifying AtlasCopco2714JackWithStairs ui and label
  if(machineStatusVariables.MachineUnavailable_Text.Exists == true){
    Log.Warning("UI for the selected machine is not available");
  } else{
    AtlasCopco2714JackWithStairs();
  }
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  
  //Selecting AtlasCopco271MastStairs machine
  selectMachineType("Atlascopco271maststairs");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: AtlasCopco271MastStairs");
  //Verifying AtlasCopco271MastStairs ui and label
  if(machineStatusVariables.MachineUnavailable_Text.Exists == true){
    Log.Warning("UI for the selected machine is not available");
  } else{
    AtlasCopco271MastStairs();
  }
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);

  //Selecting Epiroc271E machine
  selectMachineType("Epiroc271e");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: Epiroc271E");
  //Verifying Epiroc271E ui and label
  if(machineStatusVariables.MachineUnavailable_Text.Exists == true){
    Log.Warning("UI for the selected machine is not available");
  } else{
    Epiroc271E();
  }
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);

  //Selecting AtlasCopco351E machine
  selectMachineType("Atlascopco351e");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: AtlasCopco351E");
  //Verifying AtlasCopco351E ui and label
  if(machineStatusVariables.MachineUnavailable_Text.Exists == true){
    Log.Warning("UI for the selected machine is not available");
  } else{
    AtlasCopco351E();
  }
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  
  //Selecting AtlasCopco351 machine
  selectMachineType("Atlascopco351");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: AtlasCopco351");
  //Verifying AtlasCopco351 ui and label
  if(machineStatusVariables.MachineUnavailable_Text.Exists == true){
    Log.Warning("UI for the selected machine is not available");
  } else{
    AtlasCopco351();
  }
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  
  //Selecting Cat6420 machine
  selectMachineType("Cat6420");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: Cat6420");
  //Verifying Cat6420 ui and label
  if(machineStatusVariables.MachineUnavailable_Text.Exists == true){
    Log.Warning("UI for the selected machine is not available");
  } else{
    Cat6420();
  }
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  
  //Selecting Cat6420FiveEStops machine
  selectMachineType("Cat6420fiveestops");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: Cat6420FiveEStops");
  //Verifying Cat6420FiveEStops ui and label
  if(machineStatusVariables.MachineUnavailable_Text.Exists == true){
    Log.Warning("UI for the selected machine is not available");
  } else{
    Cat6420FiveEStops();
  }
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  
  //Selecting AtlasCopco235 machine
  selectMachineType("Atlascopco235");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: AtlasCopco235");
  //Verifying AtlasCopco235 ui and label
  if(machineStatusVariables.MachineUnavailable_Text.Exists == true){
    Log.Warning("UI for the selected machine is not available");
  } else{
    AtlasCopco235();
  }
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  
  //Selecting AtlasCopco2713Jack machine
  selectMachineType("Atlascopco2713jack");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: AtlasCopco2713Jack");
  //Verifying AtlasCopco2713Jack ui and label
  if(machineStatusVariables.MachineUnavailable_Text.Exists == true){
    Log.Warning("UI for the selected machine is not available");
  } else{
    AtlasCopco2713Jack();
  }
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  
  //Selecting AtlasCopco2714Jack machine
  selectMachineType("Atlascopco2714jack");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: AtlasCopco2714Jack");
  //Verifying AtlasCopco2714Jack ui and label
  if(machineStatusVariables.MachineUnavailable_Text.Exists == true){
    Log.Warning("UI for the selected machine is not available");
  } else{
    AtlasCopco2714Jack();
  }
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);

  //Selecting AtlasCopco275 machine
  selectMachineType("Atlascopco275");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: AtlasCopco275");
  //Verifying AtlasCopco275 ui and label
  if(machineStatusVariables.MachineUnavailable_Text.Exists == true){
    Log.Warning("UI for the selected machine is not available");
  } else{
    AtlasCopco275();
  }
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  
  //Selecting AtlasCopco275MastStairs machine
  selectMachineType("Atlascopco275maststairs");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: AtlasCopco275MastStairs");
  //Verifying AtlasCopco275MastStairs ui and label
  if(machineStatusVariables.MachineUnavailable_Text.Exists == true){
    Log.Warning("UI for the selected machine is not available");
  } else{
    AtlasCopco275MastStairs();
  }
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  
  //Selecting AtlasCopcoD65 machine
  selectMachineType("Atlascopcod65");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: AtlasCopcoD65");
  //Verifying AtlasCopcoD65 ui and label
  if(machineStatusVariables.MachineUnavailable_Text.Exists == true){
    Log.Warning("UI for the selected machine is not available");
  } else{
    AtlasCopcoD65();
  }
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  
  //Selecting AtlasCopcoDML machine
  selectMachineType("Atlascopcodml");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: AtlasCopcoDML");
  //Verifying AtlasCopcoDML ui and label
  if(machineStatusVariables.MachineUnavailable_Text.Exists == true){
    Log.Warning("UI for the selected machine is not available");
  } else{
    AtlasCopcoDML();
  }
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  
  //Selecting AtlasCopcoDMLHP machine
  selectMachineType("Atlascopcodmlhp");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: AtlasCopcoDMLHP");
  //Verifying AtlasCopcoDMLHP ui and label
  if(machineStatusVariables.MachineUnavailable_Text.Exists == true){
    Log.Warning("UI for the selected machine is not available");
  } else{
    AtlasCopcoDMLHP();
  }
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  
  //Selecting Bucyrus49R machine
  selectMachineType("Bucyrus49r");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: Bucyrus49R");
  //Verifying Bucyrus49R ui and label
  if(machineStatusVariables.MachineUnavailable_Text.Exists == true){
    Log.Warning("UI for the selected machine is not available");
  } else{
    Bucyrus49R();
  }
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  
  //Selecting BucyrusSKSS16 machine
  selectMachineType("Bucyrusskss16");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: BucyrusSKSS16");
  //Verifying BucyrusSKSS16 ui and label
  if(machineStatusVariables.MachineUnavailable_Text.Exists == true){
    Log.Warning("UI for the selected machine is not available");
  } else{
    BucyrusSKSS16();
  }
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  
  //Selecting Cat6250 machine
  selectMachineType("Cat6250");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: Cat6250");
  //Verifying Cat6250 ui and label
  if(machineStatusVariables.MachineUnavailable_Text.Exists == true){
    Log.Warning("UI for the selected machine is not available");
  } else{
    Cat6250();
  }
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  
  //Selecting Cat6310 machine
  selectMachineType("Cat6310");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: Cat6310");
  //Verifying Cat6310 ui and label
  if(machineStatusVariables.MachineUnavailable_Text.Exists == true){
    Log.Warning("UI for the selected machine is not available");
  } else{
    Cat6310();
  }
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  
  //Selecting Cat6640 machine
  selectMachineType("Cat6640");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: Cat6640");
  //Verifying Cat6640 ui and label
  if(machineStatusVariables.MachineUnavailable_Text.Exists == true){
    Log.Warning("UI for the selected machine is not available");
  } else{
    Cat6640();
  }
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  
  //Selecting Cat6640Siemens machine
  selectMachineType("Cat6640siemens");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: Cat6640Siemens");
  //Verifying Cat6640Siemens ui and label
  if(machineStatusVariables.MachineUnavailable_Text.Exists == true){
    Log.Warning("UI for the selected machine is not available");
  } else{
    Cat6640Siemens();
  }
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  
  //Selecting Cat6540 machine
  selectMachineType("Cat6540");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: Cat6540");
  //Verifying Cat6540 ui and label
  if(machineStatusVariables.MachineUnavailable_Text.Exists == true){
    Log.Warning("UI for the selected machine is not available");
  } else{
    Cat6540();
  }
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  
  //Selecting PH120 machine
  selectMachineType("Ph120");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: PH120");
  //Verifying PH120 ui and label
  if(machineStatusVariables.MachineUnavailable_Text.Exists == true){
    Log.Warning("UI for the selected machine is not available");
  } else{
    PH120();
  }
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  
  //Selecting PH320XPC machine
  selectMachineType("Ph320xpc");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: PH320XPC");
  //Verifying PH320XPC ui and label
  if(machineStatusVariables.MachineUnavailable_Text.Exists == true){
    Log.Warning("UI for the selected machine is not available");
  } else{
    PH320XPC();
  }
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  
  //Selecting PH320et200sp machine
  selectMachineType("Ph320et200sp");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: PH320et200sp");
  //Verifying PH320et200sp ui and label
  if(machineStatusVariables.MachineUnavailable_Text.Exists == true){
    Log.Warning("UI for the selected machine is not available");
  } else{
    PH320et200sp();
  }
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  
  //Selecting SandvikD90 machine
  selectMachineType("Sandvikd90");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: SandvikD90");
  //Verifying SandvikD90 ui and label
  if(machineStatusVariables.MachineUnavailable_Text.Exists == true){
    Log.Warning("UI for the selected machine is not available");
  } else{
    SandvikD90();
  }
  //Closed HMI
  closeHMI();
  aqUtils.Delay(3000);
  
  //Selecting SandvikDR460 machine
  selectMachineType("Sandvikdr460");
  logIn();
  mainOptionVariables.MachineStatus_Btn.ClickButton();
  Log.Message("Verification started for the machine: SandvikDR460");
  //Verifying SandvikDR460 ui and label
  if(machineStatusVariables.MachineUnavailable_Text.Exists == true){
    Log.Warning("UI for the selected machine is not available");
  } else{
    SandvikDR460();
  }
  //Closed HMI
  closeHMI();
  closeDiagnosticDashboard();
}

function machineEle(machineName)
{ 
  //returning machine element with text of machine 
  return Aliases.msedge.pageDiagnosticDashboard3["textnode" + machineName];
}

function selectMachineType(machine)
{
  //Clicks the 'machine type' button.
  MachineConfig_Variables.MachineType_Btn().Click();
  //Clicks the required machine.
  machineEle(machine).Click();
  //Clicks the 'buttonSave' button.
  Browser_Variables.Save_Btn().Click();
  //Clicks the 'buttonSave' button.
  Browser_Variables.ConfirmationSave_Btn().Click();
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
  mainOptionVariables.MachineStatus_Btn().ClickButton();
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