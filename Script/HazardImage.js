
//Hazard Image Titles, Camera view box availability and status change after click on Load button validation
//Before running script add the location of images into the camera url setting in the commissioning

const {config, launchHMI, closeHMI, maintenanceModePass} = require('GlobalVariables');
const {mainOptionVariables} = require('MainOptionsVariable');
const {gpsMapVariables} = require('GPSMapPage');
const {logIn, visibilityInBooleanStatus, wpfControlText, verifyVisibilityWithExistCheck} = require('CommonFunc');
  
function HazardImage()
{
  //Login into the application.
  logIn();
  //Clicks the 'GpsMapButton' button.
  mainOptionVariables.GPSMap_Btn.ClickButton();
  //Clicks the 'ButtonHazardImage' button.
  gpsMapVariables.HazardImage_Btn.ClickButton();
  aqUtils.Delay(3000);
  //Checking the status is Ready.
  readyStatusCheck();  
  //Checks whether the 'IsVisible' property of the DrillEnd block title object equals True.
  verifyVisibilityWithExistCheck(gpsMapVariables.DrillEnd_Title);
  //Checks whether the 'IsVisible' property of the Drill End Camera0 object equals True.
  verifyVisibilityWithExistCheck(gpsMapVariables.DrillEnd_Camera0);
  //Checks whether the 'IsVisible' property of the Drill End Camera1 object equals True.
  verifyVisibilityWithExistCheck(gpsMapVariables.DrillEnd_Camera1);
  //Checks whether the 'IsVisible' property of the Drill End ButtonLoad object equals True.
  verifyVisibilityWithExistCheck(gpsMapVariables.DrillEnd_Load_Btn);
  //Checks whether the 'IsVisible' property of the Camera 0 view object equals True.
  verifyVisibilityWithExistCheck(gpsMapVariables.DrillEnd_Camera0_View);
  //Checks whether the 'IsVisible' property of the Camera 1 view object equals True.
  verifyVisibilityWithExistCheck(gpsMapVariables.DrillEnd_Camera1_View)
  //Checks whether the 'IsVisible' property of the NonDrillEnd block title object equals True.
  verifyVisibilityWithExistCheck(gpsMapVariables.NonDrillEnd_Title);
  //Checks whether the 'IsVisible' property of the Non Drill End Camera0 object equals True.
  verifyVisibilityWithExistCheck(gpsMapVariables.NonDrillEnd_Camera0);
  //Checks whether the 'IsVisible' property of the Non Drill End Camera1 object equals True.
  verifyVisibilityWithExistCheck(gpsMapVariables.NonDrillEnd_Camera1);
  //Checks whether the 'IsVisible' property of the Non Drill End ButtonLoad object equals True.
  verifyVisibilityWithExistCheck(gpsMapVariables.NonDrillEnd_Load_Btn);
  //Checks whether the 'IsVisible' property of the Camera 0 view object equals True.
  verifyVisibilityWithExistCheck(gpsMapVariables.NonDrillEnd_Camera0_View);
  //Checks whether the 'IsVisible' property of the Camera 1 view object equals True.
  verifyVisibilityWithExistCheck(gpsMapVariables.NonDrillEnd_Camera1_View);
  //Clicks the 'Drill End ButtonLoad' button.
  gpsMapVariables.DrillEnd_Load_Btn.ClickButton();
  aqUtils.Delay(3000);
  //Checking if the Hazard Image status is showing Ok.
  readyStatusCheck();
  //Checking if the Hazard Image status is showing error.
  errorStatusCheck();
  //Clicks the 'Non Drill End ButtonLoad' button.
  gpsMapVariables.NonDrillEnd_Load_Btn.ClickButton();
  aqUtils.Delay(3000);
  //Checking if the Hazard Image status is showing Ok.
  readyStatusCheck();
  //Checking if the Hazard Image status is showing error.
  errorStatusCheck();
  //Closes the 'HwndSource_MainWindow' window.
  closeHMI();
}

function errorStatusCheck(){
  var status = visibilityInBooleanStatus(gpsMapVariables.HazardImage_Status.Child(6).Child(0).Child(11).Child(1).Child(0));
  if(status == true)
  {
      Log.Error("Status is showing Error");
  } else
  {
    Log.Message("Status is correct");
  }
}

function readyStatusCheck(){
  var status = visibilityInBooleanStatus(gpsMapVariables.HazardImage_Status.Child(6).Child(0).Child(11).Child(1).Child(2));
  if(status == true)
  {
      Log.Message("Status is correct, showing Ready");
  } else
  {
    Log.Error("Status is Incorrect");
  }
}

function okStatusCheck(){
  var status = visibilityInBooleanStatus(gpsMapVariables.HazardImage_Status.Child(6).Child(0).Child(11).Child(1).Child(1));
  if(status == true)
  {
      Log.Message("Status is correct, showing OK");
  } else
  {
    Log.Warning("Status is Incorrect");
  }
}