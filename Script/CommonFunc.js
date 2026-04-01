
const {config, launchHMI, closeHMI} = require('GlobalVariables');
const {mainWindowVariables} = require('MainWindowPage');
const {mainOptionVariables} = require('MainOptionsVariable');
const {auxControlVariables} = require('AuxControlPage');
const {preInspectionVariables} = require('PreInspectionPage');

function logIn()
{
  //Checking if the HMI is open and if yes then it will close first and then open
  if(Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.Exists){
    closeHMI();
  }
  aqUtils.Delay(3000);
  //Runs the "Flanders_Ardvarc_Hmi_Client" tested application.
  launchHMI();
  aqUtils.Delay(3000);
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

// Function to check visibility and click on an element
function checkVisibilityAndClick(element, text) {
  if (element.Exists && aqObject.CheckProperty(element, "IsVisible", cmpEqual, true) && aqObject.CheckProperty(element, "WPFControlText", cmpEqual, text)) {
    element.Click();
  } else {
    Log.Error(text + " is not available or not visible.");
  }
}

function wItemCount(element){
  return element.wItemCount;
}

function isSelectedStatus(element){
  return element.IsSelected;
}

function selectFromCommDropdown(text){
  mainWindowVariables.CommOptionDropdown.DropDown();
  var count = mainWindowVariables.CommElementOptionList.ChildCount;
  for(var i = 2; i < count; i++){
    Log.Message(wpfControlText(mainWindowVariables.CommElementOptionList.Child(i)));
    if(wpfControlText(mainWindowVariables.CommElementOptionList.Child(i)) == text){
      mainWindowVariables.CommElementOptionList.Child(i).Click();
      mainWindowVariables.CommCommitBtn.ClickButton();
      break;
    }
  }
}

function checkCheckbox(){
  
  //Sets the state of the 'BoolAppSettingCheckBox' check box to cbChecked.
  mainWindowVariables.CommBoolValueBox.ClickButton(cbChecked);
  //Clicks the 'CommitButton' button.
  mainWindowVariables.CommCommitBtn.ClickButton();
}

function mouseScroll(element, range){
  element.MouseWheel(range);
}

function verifyWpfControlTextWithExistCheck(element, expectedText) {
  try {
    // Check if the element exists
    if (!element.Exists) {
      // Log and handle failure if the element doesn't exist
      Log.Error("Element does not exist: " + element);
      throw new Error("Element not found: " + element);
    }

    // Check if the WPFControlText property of the element matches the expected text
    aqObject.CheckProperty(element, "WPFControlText", cmpEqual, expectedText);

  } catch (e) {
    // Handle failure (log the error)
    Log.Error("Verification failed for element: " + element + ". Expected text: " + expectedText);
    
    // Rethrow the error to indicate failure
    throw e;
  }
}

function verifyWTextWithExistCheck(element, expectedText) {
  try {
    // Check if the element exists
    if (!element.Exists) {
      // Log and handle failure if the element doesn't exist
      Log.Error("Element does not exist: " + element);
      throw new Error("Element not found: " + element);
    }

    // Check if the WPFControlText property of the element matches the expected text
    aqObject.CheckProperty(element, "wText", cmpEqual, expectedText);

  } catch (e) {
    // Handle failure (log the error)
    Log.Error("Verification failed for element: " + element + ". Expected text: " + expectedText);
    
    // Rethrow the error to indicate failure
    throw e;
  }
}

function verifyVisibilityWithExistCheck(element) {
  try {
    // Check if the element exists
    if (!element.Exists) {
      // Log and handle failure if the element doesn't exist
      Log.Error("Element does not exist: " + element);
      throw new Error("Element not found: " + element);
    }

    // Check if the IsVisible property of the element is true
    aqObject.CheckProperty(element, "IsVisible", cmpEqual, true);

  } catch (e) {
    // Handle failure (log the error)
    Log.Error("Visibility failed for element: " + element);
    
    // Rethrow the error to indicate failure
    throw e;
  }
}

function visibilityInBooleanStatus(element){
  // Check if the element exists
    if (!element.Exists) {
      // Log and handle failure if the element doesn't exist
      Log.Error("Element does not exist: " + element);
      throw new Error("Element not found: " + element);
    }
    
    if(element.IsVisible){
      return true;
    } else{
      return false;
    }
}

function visibleInBooleanStatus(element){
  // Check if the element exists
    if (!element.Exists) {
      // Log and handle failure if the element doesn't exist
      Log.Error("Element does not exist: " + element);
      throw new Error("Element not found: " + element);
    }
    
    if(element.Visible){
      return true;
    } else{
      return false;
    }
}

function verifyElementEnabled(element) {
  try {
    
    if (!element.Exists) {
      return false;
    }
    
    // Check if the element's 'Enabled' property is true
    aqObject.CheckProperty(element, "Enabled", cmpEqual, true);
    return true;
  } catch (e) {
    // Handle failure (log the error)
    Log.Error("Verification failed for element: " + element + ". Expected 'Enabled' property to be true.");
    
    // Rethrow the error to indicate failure
    throw e;
  }
}

function verifyElementDisabled(element) {
  try {
    
    if (!element.Exists) {
        return false;
      }
    // Check if the element's 'Enabled' property is false
    aqObject.CheckProperty(element, "Enabled", cmpEqual, false);
    return true;
  } catch (e) {
    // Handle failure (log the error)
    Log.Error("Verification failed for element: " + element + ". Expected 'Enabled' property to be false.");
    
    // Rethrow the error to indicate failure
    throw e;
  }
}

function verifyStatusIsOne(element) {
  try {

    // Check if the status is 1
    if (aqObject.CheckProperty(element, "wState" , cmpEqual, 1)){
      return true;
      
    } else {
      Log.Error("Status is not 1 for element: " + element);
      throw new Error("Expected status to be 1, but found: " + status);
    }

    // If the status is 1, we simply return true (or continue)
    //return true;

  } catch (e) {
    // Handle failure (log the error)
    Log.Error("Status verification failed for element: " + element);

    // Rethrow the error to indicate failure
    throw e;
  }
}

function verifyStatusIsZero(element) {
  try {

    // Check if the status is 0
    if (aqObject.CheckProperty(element, "wState" , cmpEqual, 0)){
      return true;
      
    } else {
      Log.Error("Status is not 0 for element: " + element);
      throw new Error("Expected status to be 0, but found: " + status);
    }

    // If the status is 0, we simply return true (or continue)
    //return true;

  } catch (e) {
    // Handle failure (log the error)
    Log.Error("Status verification failed for element: " + element);

    // Rethrow the error to indicate failure
    throw e;
  }
}

function wstate(element){
  
  return element.wState;
}

function wText(element){
  
  return element.wText;
}

function wpfControlText(element){
  
  return element.WPFControlText;
}

function clickAndHoldButton(element) {
    
  // Get the screen coordinates of the element
  var coordX = element.Left + element.Width / 2;  // X-coordinate (center of the element)
  var coordY = element.Top + element.Height / 2; // Y-coordinate (center of the element)
  
  // Specifies a delay in milliseconds
  var sDelay = 2000; // 2 seconds
  
  // Simulates pressing the left mouse button
  LLPlayer.MouseDown(MK_LBUTTON, coordX, coordY, sDelay);
  
  Delay(2000);
  
  // Simulates releasing the left mouse button
  LLPlayer.MouseUp(MK_LBUTTON, coordX, coordY, sDelay);
}

function criticalMsgOk(){
  
  mainWindowVariables.CriticalMsgOK_Btn.ClickButton();
}

function gpsMapToggleButtonsStateChange(ele){
  if(wstate(ele) == 0)
  {
    ele.ClickButton(cbChecked);
    aqUtils.Delay(2000);
    if(wstate(ele) == 1)
    {
      ele.ClickButton(cbUnchecked);
      aqUtils.Delay(2000);
    }
  } else
  {
    ele.ClickButton(cbUnchecked);
    aqUtils.Delay(2000);
  }
}

function searchAndSelectCheckboxComm(searchText, ele, eleWPFText){
  //Clicks the 'SearchTextBox' object.
  mainWindowVariables.CommSearchBox.Click(71, 24);
  //Selecting already available text.
  mainWindowVariables.CommSearchBox.Keys("^a");
  //Enters the text in the 'SearchTextBox' text editor.
  mainWindowVariables.CommSearchBox.SetText(searchText);
  //Clicks the item of the 'SettingsListView' list box.
  checkVisibilityAndClick(ele, eleWPFText);
  //Get the 'wState' property of the search object.
  let aval = wstate(mainWindowVariables.CommBoolValueBox);
  if(aval == 0){
    //Sets the state of the 'BoolAppSettingCheckBox' check box to cbChecked.
    mainWindowVariables.CommBoolValueBox.ClickButton(cbChecked);
    //Clicks the 'CommitButton' button.
    mainWindowVariables.CommCommitBtn.ClickButton();
  }
}

function searchAndSelectSettingInComm(searchText, ele, eleWPFText){
  //Clicks the 'SearchTextBox' object.
  mainWindowVariables.CommSearchBox.Click(71, 24);
  //Selecting already available text.
  mainWindowVariables.CommSearchBox.Keys("^a");
  //Enters the text in the 'SearchTextBox' text editor.
  mainWindowVariables.CommSearchBox.SetText(searchText);
  aqUtils.Delay(3000);
  //Clicks the item of the 'SettingsListView' list box.
  checkVisibilityAndClick(ele, eleWPFText);
}

function searchAndDeselectCheckboxComm(searchText, ele, eleWPFText){
  //Clicks the 'SearchTextBox' object.
  mainWindowVariables.CommSearchBox.Click(71, 24);
  //Selecting already available text.
  mainWindowVariables.CommSearchBox.Keys("^a");
  //Enters the text in the 'SearchTextBox' text editor.
  mainWindowVariables.CommSearchBox.SetText(searchText);
  //Clicks the item of the 'SettingsListView' list box.
  checkVisibilityAndClick(ele, eleWPFText);
  //Get the 'wState' property of the search object.
  let aval = wstate(mainWindowVariables.CommBoolValueBox);
  if(aval == 1){
    //Sets the state of the 'BoolAppSettingCheckBox' check box to cbChecked.
    mainWindowVariables.CommBoolValueBox.ClickButton(cbUnchecked);
    //Clicks the 'CommitButton' button.
    mainWindowVariables.CommCommitBtn.ClickButton();
  }
}

function searchAndSelectDropdownItemComm(searchText, ele, eleWPFText, text){
  //Clicks the 'SearchTextBox' object.
  mainWindowVariables.CommSearchBox.Click(71, 24);
  //Selecting already available text.
  mainWindowVariables.CommSearchBox.Keys("^a");
  //Enters the text in the 'SearchTextBox' text editor.
  mainWindowVariables.CommSearchBox.SetText(searchText);
  //Clicks the item of the 'SettingsListView' list box.
  checkVisibilityAndClick(ele, eleWPFText);
  //Select the required option from dropdown.
  mainWindowVariables.CommOptionDropdown.DropDown();
  mainWindowVariables.CommOptionDropdown.ClickItem(text);
  //Clicks the 'CommitButton' button.
  mainWindowVariables.CommCommitBtn.ClickButton();
}

function TypeOnKeyboard(text)
{
  //var keyboard = Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_KeyboardWindow.KeyboardWindow;
  var keyboard = mainOptionVariables.KeyboardWindow;

  var specialKeys = {
    " ": "ButtonSpace",
    "\n": "ButtonEnter",
    "!": "ButtonExclamation",
    "@": "ButtonAt",
    "#": "ButtonHash"
  };

  for (var i = 0; i < text.length; i++)
  {
    var ch = text.charAt(i);
    var buttonName;

    // Handle uppercase letters
    if (ch.match(/[A-Z]/))
    {
      keyboard.ButtonCaps.ClickButton();
      buttonName = "Button" + ch;
      keyboard[buttonName].ClickButton();
      keyboard.ButtonCaps.ClickButton();
    }
    // Handle special characters
    else if (specialKeys[ch] != undefined)
    {
      buttonName = specialKeys[ch];
      keyboard[buttonName].ClickButton();
    }
    // Handle normal characters
    else
    {
      buttonName = "Button" + ch.toUpperCase();
      keyboard[buttonName].ClickButton();
    }

    if (!keyboard.Exists && !keyboard[buttonName].Exists)
      Log.Warning("Button not found for character: " + ch)
      //keyboard[buttonName].ClickButton();
    //else
      //Log.Warning("Button not found for character: " + ch);
  }
}

function checkboxCheckedValidate(element)
{
  if(element.IsChecked == true){
    Log.Message(element.IsChecked);
    Log.Message("Element is checked");
  } else {
    Log.Error("Element is not Checked");
  }
}

function browserToggleSwitchStatus(element)
{
  // Wait until element exists & is visible
  if (!element.Exists) {
    Log.Error("Element not found");
  }
  
  element.WaitProperty("Visible", true, 5000);
  
  var state = element.getAttribute("aria-checked");

  if (state == "true") {
    return 1;
  } else {
    return 0;
  }
}

function browserAttributeValue(element, att)
{
  // Wait until element exists & is visible
  if (!element.Exists) {
    Log.Error("Element not found");
  }
  
  element.WaitProperty("Visible", true, 5000);
  
  var value = element.getAttribute(att);
  return value;
}

function scrollIntoViewBrowser(element)
{
  // Wait until element exists & is visible
  if (!element.Exists) {
    Log.Error("Element not found");
  }
  
  element.WaitProperty("Visible", true, 5000);
  
  element.scrollIntoView(true);
  aqUtils.Delay(3000);
  //Aliases.browser.pageDiagnosticDashboard2.Keys("[Up][Up][Up][Up][Up][Up][Up]");
}

module.exports = {logIn, checkVisibilityAndClick, verifyWpfControlTextWithExistCheck, 
verifyElementEnabled, verifyElementDisabled, verifyVisibilityWithExistCheck, 
verifyStatusIsOne, verifyStatusIsZero, wstate, wText, checkCheckbox, clickAndHoldButton,
criticalMsgOk, mouseScroll, wpfControlText, selectFromCommDropdown,
isSelectedStatus, gpsMapToggleButtonsStateChange, visibilityInBooleanStatus, verifyWTextWithExistCheck, 
searchAndSelectCheckboxComm, searchAndSelectSettingInComm, searchAndDeselectCheckboxComm, searchAndSelectDropdownItemComm, TypeOnKeyboard, checkboxCheckedValidate,
browserToggleSwitchStatus, scrollIntoViewBrowser, browserAttributeValue};