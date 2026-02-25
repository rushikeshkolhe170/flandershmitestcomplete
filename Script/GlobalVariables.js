var config = {

  drillNo: '411',
  opA: 'Operator A',
  status: 'Effective Time',
  statusDetails: 'Operating - Drill - Autonomous',
  localDB: "LOCAL_DRILL",
  serverDB: "SERVER_DRILL",
  lang_AE: "Australia English",
  lang_ES: "Español Chile"
   
};

function launchHMI(){
  
  //Runs the "Flanders_Ardvarc_Hmi_Client" tested application.
  TestedApps.Flanders_Ardvarc_Hmi_Client.Run();
}

function closeHMI(){
  
  //Closes the 'HwndSource_MainWindow' window.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.Close();
}

function commissioningPass(){
  
  //Entering commissioning screen opening password
  //Clicks the 'MainWindow' object.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.Click(48, 25);
  //Clicks the 'Button' button.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_TopLeftWindow.TopLeftWindow.Button.ClickButton();
  //Enters text in the 'ActualPassword' text editor.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_PasswordWindow.PasswordWindow.ActualPassword.SetText(Project.Variables.CommPassword);
  //Enters '[Enter]' in the 'ActualPassword' object.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_PasswordWindow.PasswordWindow.ActualPassword.Keys("[Enter]");
}

function maintenanceModePass(){
  
  //Entering Maintenance mode password
  //Clicks the 'ActualPassword' object.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MaintenancePasswordWindow.MaintenancePasswordWindow.ActualPassword.Click(77, 3);
  //Enters text in the 'ActualPassword' text editor.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MaintenancePasswordWindow.MaintenancePasswordWindow.ActualPassword.SetText(Project.Variables.MainModePassword);
  //Clicks the 'OkButton' button.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MaintenancePasswordWindow.MaintenancePasswordWindow.OkButton.ClickButton();
}

module.exports = {config, launchHMI, closeHMI, commissioningPass, maintenanceModePass};