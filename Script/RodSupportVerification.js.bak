
const {config, launchHMI, closeHMI} = require('GlobalVariables');

function RodSupportVerification()
{
  //Runs the "Flanders_Ardvarc_Hmi_Client" tested application.
  launchHMI();
  //Clicks the 0 item of the 'OperatorListBox' list box.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.OperatorListBox.ClickItem(0);
  //Clicks the 0 item of the 'MachineStatusListBox' list box.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.MachineStatusListBox.ClickItem(0);
  //Clicks the 0 item of the 'MachineStatusDetailListBox' list box.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.MachineStatusDetailListBox.ClickItem(0);
  //Clicks the 'ChangeOperatorButton' button.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.ChangeOperatorButton.ClickButton();
  //Clicks the 'AuxiliaryControlButton' button.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.AuxiliaryControlButton.ClickButton();
  //Selects the 2 tab of the 'TabControl' tab control.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.TabControl.ClickTab(2);
  //Checks whether the 'IsVisible' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.TabControl.TextblockRodSupport object equals True.
  aqObject.CheckProperty(Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.TabControl.TextblockRodSupport, "IsVisible", cmpEqual, true);
  //Clicks the 'MainWindow' object.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.Click(35, 14);
  //Clicks the 'Button' button.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_TopLeftWindow.TopLeftWindow.Button.ClickButton();
  //Enters text in the 'ActualPassword' text editor.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_PasswordWindow.PasswordWindow.ActualPassword.SetText(Project.Variables.CommPassword);
  //Clicks the 'OkButton' button.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_PasswordWindow.PasswordWindow.OkButton.ClickButton();
  //Clicks the 'SearchTextBox' object.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_SeriousWindow.SeriousWindow.TabControl.SearchTextBox.Click(66, 16);
  //Enters the text 'rodsupport' in the 'SearchTextBox' text editor.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_SeriousWindow.SeriousWindow.TabControl.SearchTextBox.SetText("rodsupport");
  //Checks whether the 'WPFControlText' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_SeriousWindow.SeriousWindow.TabControl.SettingsListView.TextblockAuxiliarycontrolshowrodsupport object equals 'AuxiliaryControlShowRodSupport'.
  aqObject.CheckProperty(Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_SeriousWindow.SeriousWindow.TabControl.SettingsListView.TextblockAuxiliarycontrolshowrodsupport, "WPFControlText", cmpEqual, "AuxiliaryControlShowRodSupport");
  //Drags the 'HwndSource_SeriousWindow' object.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_SeriousWindow.Drag(891, 444, 271, 196);
  //Checks whether the 'Enabled' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_SeriousWindow.SeriousWindow.TabControl.SettingsListView.TextblockAuxiliarycontrolshowrodsupport object equals True.
  aqObject.CheckProperty(Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_SeriousWindow.SeriousWindow.TabControl.SettingsListView.TextblockAuxiliarycontrolshowrodsupport, "Enabled", cmpEqual, true);
  //Checks whether the 'Enabled' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_SeriousWindow.SeriousWindow.TabControl.SettingsListView.Textblock1 object equals True.
  aqObject.CheckProperty(Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_SeriousWindow.SeriousWindow.TabControl.SettingsListView.Textblock1, "Enabled", cmpEqual, true);
  //Clicks the 1 item of the 'SettingsListView' list box.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_SeriousWindow.SeriousWindow.TabControl.SettingsListView.ClickItem(1);
  //Checks whether the 'wState' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_SeriousWindow.SeriousWindow.TabControl.BoolAppSettingCheckBox object equals 1.
  aqObject.CheckProperty(Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_SeriousWindow.SeriousWindow.TabControl.BoolAppSettingCheckBox, "wState", cmpEqual, 1);
  //Closes the 'HwndSource_SeriousWindow' window.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_SeriousWindow.Close();
  //Checks whether the 'IsVisible' property of the Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.TabControl.TextblockRodSupport object equals True.
  aqObject.CheckProperty(Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.TabControl.TextblockRodSupport, "IsVisible", cmpEqual, true);
  //Clicks the 'MainWindow' object.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.Click(47, 23);
  //Clicks the 'Button' button.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_TopLeftWindow.TopLeftWindow.Button.ClickButton();
  //Enters text in the 'ActualPassword' text editor.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_PasswordWindow.PasswordWindow.ActualPassword.SetText(Project.Variables.CommPassword);
  //Clicks the 'OkButton' button.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_PasswordWindow.PasswordWindow.OkButton.ClickButton();
  //Sets the state of the 'BoolAppSettingCheckBox' check box to cbUnchecked.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_SeriousWindow.SeriousWindow.TabControl.BoolAppSettingCheckBox.ClickButton(cbUnchecked);
  //Clicks the 'CommitButton' button.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_SeriousWindow.SeriousWindow.TabControl.CommitButton.ClickButton();
  //Closes the 'HwndSource_SeriousWindow' window.
  Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_SeriousWindow.Close();
  //Closes the 'HwndSource_MainWindow' window.
  closeHMI();
}