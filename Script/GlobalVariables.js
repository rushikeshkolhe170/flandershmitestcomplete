
const {mainOptionVariables} = require('MainOptionsVariable');

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
  mainOptionVariables.ArdvarcLogo.Click();
  //Clicks the 'Button' button.
  mainOptionVariables.Commissioning_Btn.ClickButton();
  //Enters text in the 'ActualPassword' text editor.
  mainOptionVariables.CommPass_Box.SetText(Project.Variables.CommPassword2);
  //Enters '[Enter]' in the 'ActualPassword' object.
  mainOptionVariables.CommPass_Box.Keys("[Enter]");
}

function maintenanceModePass(){
  
  //Entering Maintenance mode password
  //Clicks the 'ActualPassword' object.
  mainOptionVariables.MainModePass_Box.Click();
  //Enters text in the 'ActualPassword' text editor.
  mainOptionVariables.MainModePass_Box.SetText(Project.Variables.MainModePassword);
  //Clicks the 'OkButton' button.
  mainOptionVariables.MainModePass_Ok_Btn.ClickButton();
}

function openDiagnosticDashboard()
{
  //Runs the "Flanders_Ardvarc_Hmi_Client" tested application.
  launchHMI();
  aqUtils.Delay(2000);
  //Clicks the 'Ellipse' object.
  mainOptionVariables.ArdvarcLogo.Click();
  //Clicks the 'Button2' button.
  mainOptionVariables.DiagnoDash_Btn.ClickButton();
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