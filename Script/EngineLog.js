
//Verifying the table and its column availability on the screen.
//Verifying working of arrow keys with validation.

const {config, launchHMI, closeHMI} = require('GlobalVariables');
const {mainOptionVariables} = require('MainOptionsVariable');
const {maint_EngineLog_Variable} = require('MaintenancePage');
const {logIn, verifyVisibilityWithExistCheck, verifyElementEnabled, isSelectedStatus} = require('CommonFunc');

function EngineLogTable()
{
  //Login into the application.
  logIn();
  //Clicks the 'MaintenanceButton' button.
  mainOptionVariables.Maint_Btn.ClickButton();
  //Clicks the 'EngineLogButton' button.
  mainOptionVariables.EngineLog_Btn.ClickButton();
  //Checks whether the 'IsVisible' property of the Engine Log table object equals True.
  verifyVisibilityWithExistCheck(maint_EngineLog_Variable.EngineLogTable);
  //Checks whether the 'IsVisible' property of the LAMP column title object equals True.
  verifyVisibilityWithExistCheck(maint_EngineLog_Variable.LampColumn_Title);
  //Checks whether the 'IsVisible' property of the WHEN column title object equals True.
  verifyVisibilityWithExistCheck(maint_EngineLog_Variable.WhenColumn_Title);
  //Checks whether the 'IsVisible' property of the CODE column title object equals True.
  verifyVisibilityWithExistCheck(maint_EngineLog_Variable.CodeColumn_Title);
  //Checks whether the 'IsVisible' property of the FMI column title object equals True.
  verifyVisibilityWithExistCheck(maint_EngineLog_Variable.FMIColumn_Title);
  //Checks whether the 'IsVisible' property of the SPN column title object equals True.
  verifyVisibilityWithExistCheck(maint_EngineLog_Variable.SPNColumn_Title);
  //Checks whether the 'IsVisible' property of the Description column title object equals True.
  verifyVisibilityWithExistCheck(maint_EngineLog_Variable.DescriptionColumn_Title);
  //Checks whether the 'IsVisible' property of the ErrorWCI column title object equals True.
  verifyVisibilityWithExistCheck(maint_EngineLog_Variable.ErrorWCIColumn_Title);
  //Checks whether the 'IsVisible' property of the EID CID column title object equals True.
  verifyVisibilityWithExistCheck(maint_EngineLog_Variable.EIDCIDColumn_Title);
  //Rotates the mouse wheel to -20 over the Engine Log table grid object.
  maint_EngineLog_Variable.EngineLogTable_DataGrid.MouseWheel(-20);
  aqUtils.Delay(3000);
  //Rotates the mouse wheel to -20 over the Engine Log table grid object.
  maint_EngineLog_Variable.EngineLogTable_DataGrid.MouseWheel(20);
  aqUtils.Delay(3000);
  //Closes the 'HwndSource_MainWindow' window.
  closeHMI();
}

function ArrowButtons()
{
  //Login into the application.
  logIn();
  //Clicks the 'MaintenanceButton' button.
  mainOptionVariables.Maint_Btn.ClickButton();
  //Clicks the 'EngineLogButton' button.
  mainOptionVariables.EngineLog_Btn.ClickButton();
  //Checks whether the 'IsVisible' property of the Engine Log table object equals True.
  verifyVisibilityWithExistCheck(maint_EngineLog_Variable.EngineLogTable);
  //Clicks the 'ErrorDataGrid' grid cell at row 0, column 'WHEN'.
  maint_EngineLog_Variable.EngineLogTable_DataGrid.ClickCell(0, "WHEN");
  //Aliases.Flanders_Ardvarc_Hmi_Client.HwndSource_MainWindow.MainWindow.Border17.Border2.ErrorDataGrid.ClickCell(0, "EID CID");
  //Checks whether the 'Enabled' property of the Single line move down arrow object equals True.
  verifyElementEnabled(maint_EngineLog_Variable.SingleLineMove_Down_Arrow);
  //Checks whether the 'Enabled' property of the Single line move up arrow object equals True.
  verifyElementEnabled(maint_EngineLog_Variable.SingleLineMove_Up_Arrow);
  //Checks whether the 'Enabled' property of the Next Page Line Down arrow object equals True.
  verifyElementEnabled(maint_EngineLog_Variable.NextPageLineMove_Down_Arrow);
  //Checks whether the 'Enabled' property of the Previous Page Line Up arrow object equals True.
  verifyElementEnabled(maint_EngineLog_Variable.PreviousPageLineMove_Up_Arrow);
  //Checks whether the 'Enabled' property of the Last Line Down arrow object equals True.
  verifyElementEnabled(maint_EngineLog_Variable.LastLine_Down_Arrow);
  //Checks whether the 'Enabled' property of the First Line Up arrow object equals True.
  verifyElementEnabled(maint_EngineLog_Variable.FirstLine_Up_Arrow);
  //Performing Sinle line move Up and Down with validation
  if(isSelectedStatus(maint_EngineLog_Variable.FirstRow_EngineLogTable) == true)
  {
    //Click the Single line move down arrow
    maint_EngineLog_Variable.SingleLineMove_Down_Arrow.ClickButton();
    if(isSelectedStatus(maint_EngineLog_Variable.FirstRow_EngineLogTable) == false)
    {
      //Click the Single line move up arrow
      maint_EngineLog_Variable.SingleLineMove_Up_Arrow.ClickButton();
    } else
    {
      Log.Error("After click on Single Down arrow selection does not change");
    }
  } else
  {
    Log.Warning("First row is not selected in the Engine Log table");
  }
  //Performing Next and Previous page line move up and down with validation
  if(isSelectedStatus(maint_EngineLog_Variable.FirstRow_EngineLogTable) == true)
  {
    //Click the Next page line move down arrow
    maint_EngineLog_Variable.NextPageLineMove_Down_Arrow.ClickButton();
    if(isSelectedStatus(maint_EngineLog_Variable.FirstRow_EngineLogTable) == false)
    {
      //Click the Next page line move up arrow
      maint_EngineLog_Variable.PreviousPageLineMove_Up_Arrow.ClickButton();
    } else
    {
      Log.Error("After click on Next page Down arrow selection does not change");
    }
  } else
  {
    Log.Warning("First row is not selected in the Engine Log table");
  }
  //Performing Last and First row selection with validation
  if(isSelectedStatus(maint_EngineLog_Variable.FirstRow_EngineLogTable) == true)
  {
    //Click the Last line move down arrow
    maint_EngineLog_Variable.LastLine_Down_Arrow.ClickButton();
    if(isSelectedStatus(maint_EngineLog_Variable.FirstRow_EngineLogTable) == false)
    {
      //Click the First line move up arrow
      maint_EngineLog_Variable.FirstLine_Up_Arrow.ClickButton();
    } else
    {
      Log.Error("After click on First Line Up arrow selection does not change");
    }
  } else
  {
    Log.Warning("First row is not selected in the Engine Log table");
  }
  //Closes the 'HwndSource_MainWindow' window.
  closeHMI();
}