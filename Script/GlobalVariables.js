var config = {

  drillNo: '411',
  opA: 'Operator A',
  status: 'Effective Time',
  statusDetails: 'Operating - Drill - Autonomous',
  localDB: "LOCAL_DRILL",
  serverDB: "SERVER_DRILL",
  lang_AE: "Australia English",
  lang_ES: "Español Chile",
  diagnoDashboardUser : "admin"
   
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
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_PasswordWindow.PasswordWindow.ActualPassword.SetText(Project.Variables.CommPassword2);
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

function openDiagnosticDashboard()
{
  //Runs the "Flanders_Ardvarc_Hmi_Client" tested application.
  launchHMI();
  aqUtils.Delay(2000);
  //Clicks the 'Ellipse' object.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.Ellipse.Click(43, 26);
  //Clicks the 'Button2' button.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_TopLeftWindow.TopLeftWindow.Button2.ClickButton();
  //Clicks the 'BrowserWindow' object.
  Aliases.browser.BrowserWindow.Click(86, 85);
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(Project.Variables.browserType1).Navigate("http://wsl.flanders.local/login");
  Aliases.browser.pageDiagnosticDashboard3.Wait();
  Aliases.browser.BrowserWindow.Maximize();
  if(Aliases.browser.pageDiagnosticDashboard3.textbox.Exists){
    //Clicks the 'textbox' control.
    Aliases.browser.pageDiagnosticDashboard3.textbox.Click();
    //Sets the text 'admin' in the 'textbox' text editor.
    Aliases.browser.pageDiagnosticDashboard3.textbox.SetText(config.diagnoDashboardUser);
    //Clicks the 'passwordbox' control.
    Aliases.browser.pageDiagnosticDashboard3.passwordbox.Click();
    //Sets the text Project.Variables.Password3 in the 'passwordbox' text editor.
    Aliases.browser.pageDiagnosticDashboard3.passwordbox.SetText(Project.Variables.DiagnoDashboardPass);
    //Clicks the 'buttonLogin' button.
    Aliases.browser.pageDiagnosticDashboard3.buttonLogin.ClickButton();
  }
}

function closeDiagnosticDashboard()
{
  //Clicks the 'BrowserWindow' object.
  Aliases.browser.BrowserWindow.Close();
}

module.exports = {config, launchHMI, closeHMI, commissioningPass, maintenanceModePass, openDiagnosticDashboard, closeDiagnosticDashboard};