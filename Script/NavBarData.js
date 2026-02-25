
// Validation of change in the Operator and status name.

const {config, launchHMI, closeHMI} = require('GlobalVariables');
const {mainWindowVariables} = require('MainWindowPage');
const {mainOptionVariables} = require('MainOptionsVariable');
const {checkVisibilityAndClick, verifyWpfControlTextWithExistCheck, verifyElementEnabled, verifyElementDisabled, wpfControlText} = require('CommonFunc');

function NavBarData()
{
  //Runs the "Flanders_Ardvarc_Hmi_Client" tested application.
  launchHMI();
  //Capturing WPFControlText of operator and click and select first operator 
  var OperatorName = wpfControlText(mainWindowVariables.OperatorListBox.Child(2).Child(0).Child(0));
  mainWindowVariables.OperatorListBox.Child(2).Child(0).Child(0).Click();
  //Capturing WPFControlText of status and click and select third last status 
  var Status = wpfControlText(mainWindowVariables.StatusListBox.Child(3).Child(0).Child(0));
  mainWindowVariables.StatusListBox.Child(3).Child(0).Child(0).Click();
  //Select first status details
  mainWindowVariables.StatusDetailsListBox.Child(1).Child(0).Child(0).Click();
  //Clicks the 'ChangeOperatorButton' button.
  mainWindowVariables.Change_StatusBtn.ClickButton();
  aqUtils.Delay(6000);
  //Capturing Operator Name and status from nav bar
  var OperatorName_Nav = wpfControlText(mainWindowVariables.OperatorName_NavBar.Child(0));
  //Captuing the text of status from nav bar
  var status_nav_border = mainWindowVariables.Status_Navbar;
  var stackPanel = status_nav_border.StackPanel;
  var childCount = stackPanel.ChildCount;
  var Text;
  if (childCount > 0) {
        for (var i = 1; i < childCount; i++) {
            var childElement = stackPanel.Child(i);
            var Name = childElement.ClrClassName;

            // If it's a TextBlock, try to retrieve its text
            if (Name == "TextBlock") {
                Text = childElement.WPFControlText;  // Get the text of the TextBlock
                Log.Message("Found TextBlock with text: " + Text);
            }
        }
    } else {
        Log.Message("No child elements found in StackPanel.");
    }
  //Comparing the capture details
  if(OperatorName == OperatorName_Nav && Status == Text){
    Log.Message("Data is correctly showing on the navbar");
  } else {
    Log.Error("Operator or Status is mismatch on navbar and selection");
  } 
  //Closes the 'HwndSource_MainWindow' window.
  closeHMI();
  aqUtils.Delay(3000);
  //Runs the "Flanders_Ardvarc_Hmi_Client" tested application.
  launchHMI();
  //Capturing WPFControlText of operator and click and select second operator 
  var OperatorName1 = wpfControlText(mainWindowVariables.OperatorListBox.Child(1).Child(0).Child(0));
  mainWindowVariables.OperatorListBox.Child(1).Child(0).Child(0).Click();
  //Capturing WPFControlText of status and click and select last status 
  var Status1 = wpfControlText(mainWindowVariables.StatusListBox.Child(1).Child(0).Child(0));
  mainWindowVariables.StatusListBox.Child(1).Child(0).Child(0).Click();
  //Select first status details
  mainWindowVariables.StatusDetailsListBox.Child(1).Child(0).Child(0).Click();
  //Clicks the 'ChangeOperatorButton' button.
  mainWindowVariables.Change_StatusBtn.ClickButton();
  aqUtils.Delay(6000);
  //Capturing Operator Name and status from nav bar
  var OperatorName_Nav1 = wpfControlText(mainWindowVariables.OperatorName_NavBar.Child(0));
  //Captuing the text of status from nav bar
  var status_nav_border1 = mainWindowVariables.Status_Navbar;
  var stackPanel1 = status_nav_border1.StackPanel;
  var childCount1 = stackPanel1.ChildCount;
  var Text1;
  if (childCount > 0) {
        for (var i = 1; i < childCount; i++) {
            var childElement1 = stackPanel1.Child(i);
            var Name1 = childElement1.ClrClassName;

            // If it's a TextBlock, try to retrieve its text
            if (Name1 == "TextBlock") {
                Text1 = childElement1.WPFControlText;  // Get the text of the TextBlock
                Log.Message("Found TextBlock with text: " + Text1);
            }
        }
    } else {
        Log.Message("No child elements found in StackPanel.");
    }
  //Comparing the capture details
  if(OperatorName1 == OperatorName_Nav1 && Status1 == Text1){
    Log.Message("Data is correctly showing on the navbar");
  } else {
    Log.Error("Operator or Status is mismatch on navbar and selection");
  } 
  //Closes the 'HwndSource_MainWindow' window.
  closeHMI();
}