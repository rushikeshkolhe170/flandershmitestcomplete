
const {verifyWpfControlTextWithExistCheck, verifyVisibilityWithExistCheck} = require('CommonFunc');
const {machineStatusVariables, Sandvik410I_Variables, Sandvik416I_Variables, AtlasCopco2714JackWithStairs_Variables, AtlasCopco271MastStairs_Variables, Epiroc271E_Variables,
AtlasCopco351E_Variables, AtlasCopco351_Variables, Cat6420_Variables, Cat6420FiveEStops_Variables, AtlasCopco235_Variables, AtlasCopco2713Jack_Variables,
AtlasCopco2714Jack_Variables, AtlasCopco275_Variables} = require('MachineStatusPage');

function Sandvik412I()
{
  //Checks whether the 'WPFControlText' property of the TextblockOneTouchDrillControl object equals 'ONE TOUCH DRILL CONTROL'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.OneTouchDrillCoontrol_Label, "ONE TOUCH\r\nDRILL CONTROL");
  //Checks whether the 'IsVisible' property of the AIR COMPRESSOR FILTER object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.AirCompressorFilter_UI);
  //Checks whether the 'WPFControlText' property of the AIR COMPRESSOR FILTER object equals 'AIR COMPRESSOR FILTER'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.AirCompressorFilter_Label, "AIR COMPRESSOR FILTER");
  //Checks whether the 'IsVisible' property of the ENGINE AIR FILTER object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.EngineAirFilter_UI);
  //Checks whether the 'WPFControlText' property of the ENGINE AIR FILTER object equals 'ENGINE AIR FILTER'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.EngineAirFilter_Label, "ENGINE AIR FILTER");
  //Checks whether the 'IsVisible' property of the Jack1 object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.Jack1);
  //Checks whether the 'IsVisible' property of the Jack2 object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.Jack2);
  //Checks whether the 'IsVisible' property of the ENGINE RADIATOR object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.EngineRadiator_UI);
  //Checks whether the 'WPFControlText' property of the ENGINE RADIATOR object equals 'ENGINE RADIATOR'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.EngineRadiator_Label, "ENGINE RADIATOR");
  //Checks whether the 'IsVisible' property of the AIR COMPRESSOR RADIATOR object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.AirCompressorRadiator_UI);
  //Checks whether the 'WPFControlText' property of the AIR COMPRESSOR RADIATOR object equals 'AIR COMPRESSOR RADIATOR'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.AirCompressorRadiator_Label, "AIR COMPRESSOR RADIATOR");
  //Checks whether the 'IsVisible' property of the RECEIVER AIR TANK PSI object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.RecAirTankPSI_UI);
  //Checks whether the 'WPFControlText' property of the RECEIVER AIR TANK PSI object equals 'RECEIVER AIR TANK PSI'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.RecAirTankPSI_Label, "RECEIVER AIR TANK PSI"),
  //Checks whether the 'IsVisible' property of the AIR TEMP object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.AirTemp_UI);
  //Checks whether the 'WPFControlText' property of the AIR TEMP object equals 'AIR TEMP'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.AirTemp_label, "AIR TEMP"),
  //Checks whether the 'IsVisible' property of the ENGINE RPM object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.EngineRPM_UI);
  //Checks whether the 'WPFControlText' property of the ENGINE RPM object equals 'ENGINE RPM'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.EngineRPM_Label, "ENGINE RPM");
  //Checks whether the 'IsVisible' property of the HYDRAULIC PUMPS object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.HydraulicPump_UI);
  //Checks whether the 'WPFControlText' property of the HYDRAULIC PUMPS object equals 'HYDRAULIC PUMPS'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.HydraulicPump_Label, "HYDRAULIC PUMPS");
  //Checks whether the 'IsVisible' property of the Jack3 object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.Jack3);
  //Checks whether the 'IsVisible' property of the Jack4 object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.Jack4);
  //Checks whether the 'IsVisible' property of the Other Option I button object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.OtherOptions_Btn);
  //Clicks the Other Option I button.
  machineStatusVariables.OtherOptions_Btn.ClickButton();
  //Checks whether the 'IsVisible' property of the Aux Pump 1 object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.AirPump1_UI);
  //Checks whether the 'WPFControlText' property of the Aux Pump 1 object equals 'Aux Pump 1'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.AirPump1_Label, "Aux Pump 1");
  //Checks whether the 'IsVisible' property of the Aux Pump 2 and Fan Pump object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.AirPump2FanPump_UI);
  //Checks whether the 'WPFControlText' property of the Aux Pump 2 object equals 'Aux Pump 2'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.AirPump2_label, "Aux Pump 2");
  //Checks whether the 'WPFControlText' property of the Fan Pump object equals 'Fan Pump'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.FanPump_Label, "Fan Pump");
  //Checks whether the 'IsVisible' property of the NCS PORT B object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.NCSPortB_UI);
  //Checks whether the 'WPFControlText' property of the NCS PORT B object equals 'NCS PORT B'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.NCSPortB_Label, "NCS PORT B")
  //Checks whether the 'IsVisible' property of the CS PORT B object equals True.
  verifyVisibilityWithExistCheck(machineStatusVariables.CSPortB_UI);
  //Checks whether the 'WPFControlText' property of the CS PORT B object equals 'CS PORT B'.
  verifyWpfControlTextWithExistCheck(machineStatusVariables.CSPortB, "CS PORT B");
  //Clicks the 'ButtonClose' button.
  machineStatusVariables.Close_Btn.ClickButton();
  Log.Message("Verification Ended for the machine: Sandvik412i");
};

function Sandvik410I()
{
  //Checks whether the 'WPFControlText' property of the kEngineRadiator object equals 'ENGINE RADIATOR'.
  verifyWpfControlTextWithExistCheck(Sandvik410I_Variables.EngineRadiator_Label, "ENGINE RADIATOR");
  //Checks whether the 'IsVisible' property of the Engine Radiator part object equals True.
  verifyVisibilityWithExistCheck(Sandvik410I_Variables.EngineRadiator_UI);
  //Checks whether the 'WPFControlText' property of the AirCompressorRadiator object equals 'AIR COMPRESSOR RADIATOR'.
  verifyWpfControlTextWithExistCheck(Sandvik410I_Variables.AirCompRadiator_Label, "AIR COMPRESSOR RADIATOR");
  //Checks whether the 'IsVisible' property of the Air Compressor Radiator part object equals True.
  verifyVisibilityWithExistCheck(Sandvik410I_Variables.AirCompRadiator_UI);
  //Checks whether the 'WPFControlText' property of the AirCompressorFilter object equals 'AIR COMPRESSOR FILTER'.
  verifyWpfControlTextWithExistCheck(Sandvik410I_Variables.AirCompFilter_Label, "AIR COMPRESSOR FILTER");
  //Checks whether the 'IsVisible' property of the Air Compressor Filter part object equals True.
  verifyVisibilityWithExistCheck(Sandvik410I_Variables.AirCompFilter_UI);
  //Checks whether the 'WPFControlText' property of the EngineAirFilter object equals 'ENGINE AIR FILTER'.
  verifyWpfControlTextWithExistCheck(Sandvik410I_Variables.EngineAirFilter_Label, "ENGINE AIR FILTER");
  //Checks whether the 'IsVisible' property of the Engine Air Filter part object equals True.
  verifyVisibilityWithExistCheck(Sandvik410I_Variables.EngineAirFilter_UI);
  //Checks whether the 'WPFControlText' property of the EngineRpm object equals 'ENGINE RPM'.
  verifyWpfControlTextWithExistCheck(Sandvik410I_Variables.EngineRPM_Label, "ENGINE RPM");
  //Checks whether the 'IsVisible' property of the Engine Rpm part object equals True.
  verifyVisibilityWithExistCheck(Sandvik410I_Variables.EngineRPM_UI);
  //Checks whether the 'WPFControlText' property of the ReceiverAirTankPsi object equals 'RECEIVER AIR TANK PSI'.
  verifyWpfControlTextWithExistCheck(Sandvik410I_Variables.ReceiverAirTankPSI_Label, "RECEIVER AIR TANK PSI");
  //Checks whether the 'IsVisible' property of the Receiver Air Tank Psi part object equals True.
  verifyVisibilityWithExistCheck(Sandvik410I_Variables.ReceiverAirTankPSI_UI);
  Log.Message("Verification Ended for the machine: Sandvik410i");
};

function Sandvik416I()
{
  //Checks whether the 'WPFControlText' property of the CollarTankPressure object equals 'COLLAR TANK PRESSURE'.
  verifyWpfControlTextWithExistCheck(Sandvik416I_Variables.CollarTankPressure_Label, "COLLAR TANK PRESSURE");
  //Checks whether the 'IsVisible' property of the HMI_Comp_CollarTankPressure object equals True.
  verifyVisibilityWithExistCheck(Sandvik416I_Variables.CollarTankPressure_UI);
  //Checks whether the 'WPFControlText' property of the ReceiverTankPressure object equals 'RECEIVER TANK PRESSURE'.
  verifyWpfControlTextWithExistCheck(Sandvik416I_Variables.ReceiverTankPressure_Label, "RECEIVER TANK PRESSURE");
  //Checks whether the 'IsVisible' property of the HMI_Comp_RcvrTankPress object equals True.
  verifyVisibilityWithExistCheck(Sandvik416I_Variables.ReceiverTankPressure_UI);
  //Checks whether the 'WPFControlText' property of the FilterPressNcs object equals 'FILTER PRESS NCS'.
  verifyWpfControlTextWithExistCheck(Sandvik416I_Variables.FilterPressNCS_Label, "FILTER PRESS NCS");
  //Checks whether the 'IsVisible' property of the io_Comp_FilterPressNcs object equals True.
  verifyVisibilityWithExistCheck(Sandvik416I_Variables.FilterPressNCS_UI);
  //Checks whether the 'WPFControlText' property of the FilterPressCs object equals 'FILTER PRESS CS'.
  verifyWpfControlTextWithExistCheck(Sandvik416I_Variables.FilterPressCS_Label, "FILTER PRESS CS");
  //Checks whether the 'IsVisible' property of the io_Comp_FilterPressCs object equals True.
  verifyVisibilityWithExistCheck(Sandvik416I_Variables.FilterPressCS_UI);
  //Checks whether the 'WPFControlText' property of the AirTempNcs object equals 'AIR TEMP (NCS)'.
  verifyWpfControlTextWithExistCheck(Sandvik416I_Variables.AirTempNCS_Label, "AIR TEMP (NCS)");
  //Checks whether the 'IsVisible' property of the HMI_Comp_AirTempNcs object equals True.
  verifyVisibilityWithExistCheck(Sandvik416I_Variables.AirTempNCS_UI);
  //Checks whether the 'WPFControlText' property of the EngineRpm object equals 'ENGINE RPM'.
  verifyWpfControlTextWithExistCheck(Sandvik416I_Variables.EngineRPM_Label, "ENGINE RPM");
  //Checks whether the 'IsVisible' property of the Engine Rpm object equals True.
  verifyVisibilityWithExistCheck(Sandvik416I_Variables.EngineRPM_UI);
  //Checks whether the 'WPFControlText' property of the HydPump1Psi object equals 'HYD PUMP 1 PSI'.
  verifyVisibilityWithExistCheck(Sandvik416I_Variables.HYDPump1PSI_Label);
  //Checks whether the 'WPFControlText' property of the HydPump2Psi object equals 'HYD PUMP 2 PSI'.
  verifyVisibilityWithExistCheck(Sandvik416I_Variables.HYDPump2PSI_Label);
  //Checks whether the 'WPFControlText' property of the HydPump3Psi object equals 'HYD PUMP 3 PSI'.
  verifyVisibilityWithExistCheck(Sandvik416I_Variables.HYDPump3PSI_Label);
  //Checks whether the 'WPFControlText' property of the HydPump4Psi object equals 'HYD PUMP 4 PSI'.
  verifyVisibilityWithExistCheck(Sandvik416I_Variables.HYDPump4PSI_Label);
  //Checks whether the 'WPFControlText' property of the HydPump5Psi object equals 'HYD PUMP 5 PSI'.
  verifyVisibilityWithExistCheck(Sandvik416I_Variables.HYDPump5PSI_Label);
  Log.Message("Verification Ended for the machine: Sandvik416i");
};

function AtlasCopco2714JackWithStairs()
{
  //Checks whether the 'WPFControlText' property of the HydraulicRadiator object equals 'HYDRAULIC RADIATOR'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714JackWithStairs_Variables.HydRadiator_Label, "HYDRAULIC RADIATOR");
 //Checks whether the 'Visible' property of the HYDRAULIC RADIATOR part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco2714JackWithStairs_Variables.HydRadiator_UI);
  //Checks whether the 'WPFControlText' property of the EngineRadiator object equals 'ENGINE RADIATOR'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714JackWithStairs_Variables.EngineRadiator_Label, "ENGINE RADIATOR");
  //Checks whether the 'Visible' property of the ENGINE RADIATOR part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco2714JackWithStairs_Variables.EngineRadiator_UI);
  //Checks whether the 'WPFControlText' property of the AirCompressorRadiator object equals 'AIR COMPRESSOR RADIATOR'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714JackWithStairs_Variables.AirCompRadiator_Label, "AIR COMPRESSOR RADIATOR");
  //Checks whether the 'Visible' property of the AIR COMPRESSOR RADIATOR part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco2714JackWithStairs_Variables.AirCompRadiator_UI);
  //Checks whether the 'WPFControlText' property of the AirTemp object equals 'AIR TEMP'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714JackWithStairs_Variables.AirTemp_Label, "AIR TEMP");
  //Checks whether the 'WPFControlText' property of the AirCompressor object equals 'AIR COMPRESSOR'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714JackWithStairs_Variables.AirComp_Label, "AIR COMPRESSOR");
  //Checks whether the 'Visible' property of the AIR TEMP and AIR COMPRESSOR part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco2714JackWithStairs_Variables.AirTempAirComp_UI);
  //Checks whether the 'WPFControlText' property of the ReceiverAirTankPsi object equals 'RECEIVER AIR TANK PSI'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714JackWithStairs_Variables.ReceiverAirTankPSI_Label, "RECEIVER AIR TANK PSI");
  //Checks whether the 'Visible' property of the RECEIVER AIR TANK part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco2714JackWithStairs_Variables.ReceiverAirTankPSI_UI);
  //Checks whether the 'WPFControlText' property of the EngineRpm object equals 'ENGINE RPM'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714JackWithStairs_Variables.EngineRPM_Label, "ENGINE RPM");
  //Checks whether the 'Visible' property of the ENGINE RPM part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco2714JackWithStairs_Variables.EngineRPM_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicReturnFilters object equals 'HYDRAULIC RETURN FILTERS'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714JackWithStairs_Variables.HydReturnFilter_Label, "HYDRAULIC RETURN FILTERS");
  //Checks whether the 'Visible' property of the HYDRAULIC RETURN FILTERS part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco2714JackWithStairs_Variables.HydReturnFilter_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicTank2 object equals 'HYDRAULIC TANK'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714JackWithStairs_Variables.HydTank_Label, "HYDRAULIC TANK");
  //Checks whether the 'Visible' property of the HYDRAULIC TANK part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco2714JackWithStairs_Variables.HydTank_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicDrainFilters object equals 'HYDRAULIC DRAIN FILTERS'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714JackWithStairs_Variables.HydDrainFilter_Label, "HYDRAULIC DRAIN FILTERS");
  //Checks whether the 'Visible' property of the HYDRAULIC DRAIN FILTERS part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco2714JackWithStairs_Variables.HydDrainFilter_UI);
  //Checks whether the 'WPFControlText' property of the LubeLevel2 object equals 'LUBE LEVEL'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714JackWithStairs_Variables.LubeLevel_Label, "LUBE LEVEL");
  //Checks whether the 'Visible' property of the LUBE LEVEL part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco2714JackWithStairs_Variables.LubeLevel_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicPumps2 object equals 'HYDRAULIC PUMPS'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714JackWithStairs_Variables.HydPump_Label, "HYDRAULIC PUMPS");
  //Checks whether the 'Visible' property of the HYDRAULIC PUMPS part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco2714JackWithStairs_Variables.HydPump_UI);
  //Clicks the 'Button4' button.
  AtlasCopco2714JackWithStairs_Variables.OtherOption_Btn.ClickButton();
  aqUtils.Delay(3000);
  //Checks whether the 'WPFControlText' property of the NcsPortA object equals 'NCS PORT A'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714JackWithStairs_Variables.NCSPortA_Label, "NCS PORT A");
  //Checks whether the 'WPFControlText' property of the NcsPortB2 object equals 'NCS PORT B'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714JackWithStairs_Variables.NCSPortB_Label, "NCS PORT B");
  //Checks whether the 'WPFControlText' property of the CsPortA object equals 'CS PORT A'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714JackWithStairs_Variables.CSPortA_Label, "CS PORT A");
  //Checks whether the 'WPFControlText' property of the CsPortB2 object equals 'CS PORT B'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714JackWithStairs_Variables.CSPortB_Label, "CS PORT B");
  //Clicks the 'ButtonClose2' button.
  AtlasCopco2714JackWithStairs_Variables.OtherOptClose_Btn.ClickButton();
}

function AtlasCopco271MastStairs()
{
  //Checks whether the 'WPFControlText' property of the HydraulicRadiator object equals 'HYDRAULIC RADIATOR'.
  verifyWpfControlTextWithExistCheck(AtlasCopco271MastStairs_Variables.HydRadiator_Label, "HYDRAULIC RADIATOR");
 //Checks whether the 'Visible' property of the HYDRAULIC RADIATOR part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco271MastStairs_Variables.HydRadiator_UI);
  //Checks whether the 'WPFControlText' property of the EngineRadiator object equals 'ENGINE RADIATOR'.
  verifyWpfControlTextWithExistCheck(AtlasCopco271MastStairs_Variables.EngineRadiator_Label, "ENGINE RADIATOR");
  //Checks whether the 'Visible' property of the ENGINE RADIATOR part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco271MastStairs_Variables.EngineRadiator_UI);
  //Checks whether the 'WPFControlText' property of the AirCompressorRadiator object equals 'AIR COMPRESSOR RADIATOR'.
  verifyWpfControlTextWithExistCheck(AtlasCopco271MastStairs_Variables.AirCompRadiator_Label, "AIR COMPRESSOR RADIATOR");
  //Checks whether the 'Visible' property of the AIR COMPRESSOR RADIATOR part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco271MastStairs_Variables.AirCompRadiator_UI);
  //Checks whether the 'WPFControlText' property of the AirTemp object equals 'AIR TEMP'.
  verifyWpfControlTextWithExistCheck(AtlasCopco271MastStairs_Variables.AirTemp_Label, "AIR TEMP");
  //Checks whether the 'WPFControlText' property of the AirCompressor object equals 'AIR COMPRESSOR'.
  verifyWpfControlTextWithExistCheck(AtlasCopco271MastStairs_Variables.AirComp_Label, "AIR COMPRESSOR");
  //Checks whether the 'Visible' property of the AIR TEMP and AIR COMPRESSOR part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco271MastStairs_Variables.AirTempAirComp_UI);
  //Checks whether the 'WPFControlText' property of the ReceiverAirTankPsi object equals 'RECEIVER AIR TANK PSI'.
  verifyWpfControlTextWithExistCheck(AtlasCopco271MastStairs_Variables.ReceiverAirTankPSI_Label, "RECEIVER AIR TANK PSI");
  //Checks whether the 'Visible' property of the RECEIVER AIR TANK part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco271MastStairs_Variables.ReceiverAirTankPSI_UI);
  //Checks whether the 'WPFControlText' property of the EngineRpm object equals 'ENGINE RPM'.
  verifyWpfControlTextWithExistCheck(AtlasCopco271MastStairs_Variables.EngineRPM_Label, "ENGINE RPM");
  //Checks whether the 'Visible' property of the ENGINE RPM part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco271MastStairs_Variables.EngineRPM_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicReturnFilters object equals 'HYDRAULIC RETURN FILTERS'.
  verifyWpfControlTextWithExistCheck(AtlasCopco271MastStairs_Variables.HydReturnFilter_Label, "HYDRAULIC RETURN FILTERS");
  //Checks whether the 'Visible' property of the HYDRAULIC RETURN FILTERS part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco271MastStairs_Variables.HydReturnFilter_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicTank2 object equals 'HYDRAULIC TANK'.
  verifyWpfControlTextWithExistCheck(AtlasCopco271MastStairs_Variables.HydTank_Label, "HYDRAULIC TANK");
  //Checks whether the 'Visible' property of the HYDRAULIC TANK part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco271MastStairs_Variables.HydTank_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicDrainFilters object equals 'HYDRAULIC DRAIN FILTERS'.
  verifyWpfControlTextWithExistCheck(AtlasCopco271MastStairs_Variables.HydDrainFilter_Label, "HYDRAULIC DRAIN FILTERS");
  //Checks whether the 'Visible' property of the HYDRAULIC DRAIN FILTERS part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco271MastStairs_Variables.HydDrainFilter_UI);
  //Checks whether the 'WPFControlText' property of the LubeLevel2 object equals 'LUBE LEVEL'.
  verifyWpfControlTextWithExistCheck(AtlasCopco271MastStairs_Variables.LubeLevel_Label, "LUBE LEVEL");
  //Checks whether the 'Visible' property of the LUBE LEVEL part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco271MastStairs_Variables.LubeLevel_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicPumps2 object equals 'HYDRAULIC PUMPS'.
  verifyWpfControlTextWithExistCheck(AtlasCopco271MastStairs_Variables.HydPump_Label, "HYDRAULIC PUMPS");
  //Checks whether the 'Visible' property of the HYDRAULIC PUMPS part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco271MastStairs_Variables.HydPump_UI);
  //Clicks the 'Button4' button.
  AtlasCopco271MastStairs_Variables.OtherOption_Btn.ClickButton();
  aqUtils.Delay(3000);
  //Checks whether the 'WPFControlText' property of the NcsPortA object equals 'NCS PORT A'.
  verifyWpfControlTextWithExistCheck(AtlasCopco271MastStairs_Variables.NCSPortA_Label, "NCS PORT A");
  //Checks whether the 'WPFControlText' property of the NcsPortB2 object equals 'NCS PORT B'.
  verifyWpfControlTextWithExistCheck(AtlasCopco271MastStairs_Variables.NCSPortB_Label, "NCS PORT B");
  //Checks whether the 'WPFControlText' property of the CsPortA object equals 'CS PORT A'.
  verifyWpfControlTextWithExistCheck(AtlasCopco271MastStairs_Variables.CSPortA_Label, "CS PORT A");
  //Checks whether the 'WPFControlText' property of the CsPortB2 object equals 'CS PORT B'.
  verifyWpfControlTextWithExistCheck(AtlasCopco271MastStairs_Variables.CSPortB_Label, "CS PORT B");
  //Clicks the 'ButtonClose2' button.
  AtlasCopco271MastStairs_Variables.OtherOptClose_Btn.ClickButton();
}

function Epiroc271E()
{
  //Checks whether the 'WPFControlText' property of the HydraulicRadiator object equals 'HYDRAULIC RADIATOR'.
  verifyWpfControlTextWithExistCheck(Epiroc271E_Variables.HydRadiator_Label, "HYDRAULIC RADIATOR");
  //Checks whether the 'IsVisible' property of the HYDRAULIC RADIATOR part object equals True.
  verifyVisibilityWithExistCheck(Epiroc271E_Variables.HydRadiator_UI);
  //Checks whether the 'WPFControlText' property of the AirCompressorRadiator object equals 'AIR COMPRESSOR RADIATOR'.
  verifyWpfControlTextWithExistCheck(Epiroc271E_Variables.AirCompRadiator_Label, "AIR COMPRESSOR RADIATOR");
  //Checks whether the 'IsVisible' property of the AIR COMPRESSOR RADIATOR part object equals True.
  verifyVisibilityWithExistCheck(Epiroc271E_Variables.AirCompRadiator_UI);
  //Checks whether the 'WPFControlText' property of the AirTemp object equals 'AIR TEMP'.
  verifyWpfControlTextWithExistCheck(Epiroc271E_Variables.AirTemp_Label, "AIR TEMP");
  //Checks whether the 'WPFControlText' property of the AirCompressor object equals 'AIR COMPRESSOR'.
  verifyWpfControlTextWithExistCheck(Epiroc271E_Variables.AirComp_Label, "AIR COMPRESSOR");
  //Checks whether the 'IsVisible' property of the AIR TEMP and AIR COMPRESSOR part object equals True.
  verifyVisibilityWithExistCheck(Epiroc271E_Variables.AirTempAirComp_UI);
  //Checks whether the 'WPFControlText' property of the ReceiverAirTankPsi object equals 'RECEIVER AIR TANK PSI'.
  verifyWpfControlTextWithExistCheck(Epiroc271E_Variables.ReceiverAirTankPSI_Label, "RECEIVER AIR TANK PSI");
  //Checks whether the 'IsVisible' property of the RECEIVER AIR TANK PSI part object equals True.
  verifyVisibilityWithExistCheck(Epiroc271E_Variables.ReceiverAirTankPSI_UI);
  //Checks whether the 'WPFControlText' property of the MotorRpm object equals 'MOTOR RPM'.
  verifyWpfControlTextWithExistCheck(Epiroc271E_Variables.MotorRPM_Label, "MOTOR RPM");
  //Checks whether the 'IsVisible' property of the MOTOR RPM part object equals True.
  verifyVisibilityWithExistCheck(Epiroc271E_Variables.MotorRPM_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicPumps2 object equals 'HYDRAULIC PUMPS'.
  verifyWpfControlTextWithExistCheck(Epiroc271E_Variables.HydPump_Label, "HYDRAULIC PUMPS");
  //Checks whether the 'IsVisible' property of the HYDRAULIC PUMPS part object equals True.
  verifyVisibilityWithExistCheck(Epiroc271E_Variables.HydPump_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicReturnFilters object equals 'HYDRAULIC RETURN FILTERS'.
  verifyWpfControlTextWithExistCheck(Epiroc271E_Variables.HydReturnFilter_Label, "HYDRAULIC RETURN FILTERS");
  //Checks whether the 'IsVisible' property of the HYDRAULIC RETURN FILTERS part object equals True.
  verifyVisibilityWithExistCheck(Epiroc271E_Variables.HydReturnFilter_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicTank2 object equals 'HYDRAULIC TANK'.
  verifyWpfControlTextWithExistCheck(Epiroc271E_Variables.HydTank_Label, "HYDRAULIC TANK");
  //Checks whether the 'IsVisible' property of the HYDRAULIC TANK part object equals True.
  verifyVisibilityWithExistCheck(Epiroc271E_Variables.HydTank_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicDrainFilters object equals 'HYDRAULIC DRAIN FILTERS'.
  verifyWpfControlTextWithExistCheck(Epiroc271E_Variables.HydDrainFilter_Label, "HYDRAULIC DRAIN FILTERS");
  //Checks whether the 'IsVisible' property of the HYDRAULIC DRAIN FILTERS part object equals True.
  verifyVisibilityWithExistCheck(Epiroc271E_Variables.HydDrainFilter_UI);
  //Checks whether the 'WPFControlText' property of the LubeLevel2 object equals 'LUBE LEVEL'.
  verifyWpfControlTextWithExistCheck(Epiroc271E_Variables.LubeLevel_Label, "LUBE LEVEL");
  //Checks whether the 'IsVisible' property of the LUBE LEVEL part object equals True.
  verifyVisibilityWithExistCheck(Epiroc271E_Variables.LubeLevel_UI);
}

function AtlasCopco351E()
{
  //Checks whether the 'WPFControlText' property of the ReceiverAirTankPsi object equals 'RECEIVER AIR TANK PSI'.
  verifyWpfControlTextWithExistCheck(AtlasCopco351E_Variables.ReceiverAirTankPSI_Label, "RECEIVER AIR TANK PSI");
  //Checks whether the 'WPFControlText' property of the AirTemp object equals 'AIR TEMP'.
  verifyWpfControlTextWithExistCheck(AtlasCopco351E_Variables.AirTemp_Label, "AIR TEMP");
  //Checks whether the 'IsVisible' property of the RECEIVER AIR TANK PSI and AIR TEMP part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco351E_Variables.ReceiverAirTankPSIandAirTemp_UI);
  //Checks whether the 'WPFControlText' property of the AirCompressor object equals 'AIR COMPRESSOR'.
  verifyWpfControlTextWithExistCheck(AtlasCopco351E_Variables.AirComp_Label, "AIR COMPRESSOR");
  //Checks whether the 'IsVisible' property of the AIR COMPRESSOR part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco351E_Variables.AirComp_UI);
  //Checks whether the 'WPFControlText' property of the EngineRpm object equals 'ENGINE RPM'.
  verifyWpfControlTextWithExistCheck(AtlasCopco351E_Variables.EngineRPM_Label, "ENGINE RPM");
  //Checks whether the 'IsVisible' property of the ENGINE RPM object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco351E_Variables.EngineRPM_UI);
}

function AtlasCopco351()
{
  //Checks whether the 'WPFControlText' property of the ReceiverAirTankPsi object equals 'RECEIVER AIR TANK PSI'.
  verifyWpfControlTextWithExistCheck(AtlasCopco351_Variables.ReceiverAirTankPSI_Label, "RECEIVER AIR TANK PSI");
  //Checks whether the 'WPFControlText' property of the AirCompressor object equals 'AIR COMPRESSOR'.
  verifyWpfControlTextWithExistCheck(AtlasCopco351_Variables.AirComp_Label, "AIR COMPRESSOR");
  //Checks whether the 'IsVisible' property of the AIR COMPRESSOR part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco351_Variables.AirComp_UI);
  //Checks whether the 'WPFControlText' property of the AirTemp object equals 'AIR TEMP'.
  verifyWpfControlTextWithExistCheck(AtlasCopco351_Variables.AirTemp_Label, "AIR TEMP");
  //Checks whether the 'IsVisible' property of the AIR TEMP part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco351_Variables.AirTemp_UI);
  //Checks whether the 'WPFControlText' property of the EngineRpm object equals 'ENGINE RPM'.
  verifyWpfControlTextWithExistCheck(AtlasCopco351_Variables.EngineRPM_Label, "ENGINE RPM");
  //Checks whether the 'IsVisible' property of the ENGINE RPM part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco351_Variables.EngineRPM_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicRadiator object equals 'HYDRAULIC RADIATOR'.
  verifyWpfControlTextWithExistCheck(AtlasCopco351_Variables.HydRadiator_Label, "HYDRAULIC RADIATOR");
  //Checks whether the 'IsVisible' property of the HYDRAULIC RADIATOR part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco351_Variables.HydRadiator_UI);
  //Checks whether the 'WPFControlText' property of the AirCompressorRadiator object equals 'AIR COMPRESSOR RADIATOR'.
  verifyWpfControlTextWithExistCheck(AtlasCopco351_Variables.AirCompRadiator_Label, "AIR COMPRESSOR RADIATOR");
  //Checks whether the 'IsVisible' property of the AIR COMPRESSOR RADIATOR part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco351_Variables.AirCompRadiator_UI);
  //Checks whether the 'WPFControlText' property of the EngineRadiator object equals 'ENGINE RADIATOR'.
  verifyWpfControlTextWithExistCheck(AtlasCopco351_Variables.EngineRadiator_Label, "ENGINE RADIATOR");
  //Checks whether the 'IsVisible' property of the ENGINE RADIATOR part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco351_Variables.EngineRadiator_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicTank2 object equals 'HYDRAULIC TANK'.
  verifyWpfControlTextWithExistCheck(AtlasCopco351_Variables.HydTank_Label, "HYDRAULIC TANK");
  //Checks whether the 'IsVisible' property of the HYDRAULIC TANK part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco351_Variables.HydTank_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicPumps2 object equals 'HYDRAULIC PUMPS'.
  verifyWpfControlTextWithExistCheck(AtlasCopco351_Variables.HydPump_Label, "HYDRAULIC PUMPS");
  //Checks whether the 'IsVisible' property of the HYDRAULIC PUMPS part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco351_Variables.HydPump_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicDrainFilters object equals 'HYDRAULIC DRAIN FILTERS'.
  verifyWpfControlTextWithExistCheck(AtlasCopco351_Variables.HydDrainFilter_Label, "HYDRAULIC DRAIN FILTERS");
  //Checks whether the 'IsVisible' property of the HYDRAULIC DRAIN FILTERS part 1 object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco351_Variables.HydDrainFilter1_UI);
  //Checks whether the 'IsVisible' property of the HYDRAULIC DRAIN FILTERS part 2 object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco351_Variables.HydDrainFilter2_UI);
  //Clicks the 'Button4' button.
  AtlasCopco351_Variables.OtherOption_Btn.ClickButton();
  aqUtils.Delay(3000);
  //Checks whether the 'WPFControlText' property of the NcsPortA object equals 'NCS PORT A'.
  verifyWpfControlTextWithExistCheck(AtlasCopco351_Variables.NCSPortA_Label, "NCS PORT A");
  //Checks whether the 'WPFControlText' property of the NcsPortB2 object equals 'NCS PORT B'.
  verifyWpfControlTextWithExistCheck(AtlasCopco351_Variables.NCSPortB_Label, "NCS PORT B");
  //Checks whether the 'WPFControlText' property of the CsPortA object equals 'CS PORT A'.
  verifyWpfControlTextWithExistCheck(AtlasCopco351_Variables.CSPortA_Label, "CS PORT A");
  //Checks whether the 'WPFControlText' property of the CsPortB2 object equals 'CS PORT B'.
  verifyWpfControlTextWithExistCheck(AtlasCopco351_Variables.CSPortB_Label, "CS PORT B");
  //Clicks the 'ButtonClose2' button.
  AtlasCopco351_Variables.OtherOptClose_Btn.ClickButton();
}

function Cat6420()
{
  //Checks whether the 'WPFControlText' property of the HydraulicRadiator object equals 'HYDRAULIC RADIATOR'.
  verifyWpfControlTextWithExistCheck(Cat6420_Variables.HydRadiator_Label, "HYDRAULIC RADIATOR");
  //Checks whether the 'IsVisible' property of the HYDRAULIC RADIATOR part object equals True.
  verifyVisibilityWithExistCheck(Cat6420_Variables.HydRadiator_UI);
  //Checks whether the 'WPFControlText' property of the EngineRadiator object equals 'ENGINE RADIATOR'.
  verifyWpfControlTextWithExistCheck(Cat6420_Variables.EngineRadiator_Label, "ENGINE RADIATOR");
  //Checks whether the 'IsVisible' property of the ENGINE RADIATOR part object equals True.
  verifyVisibilityWithExistCheck(Cat6420_Variables.EngineRadiator_UI);
  //Checks whether the 'WPFControlText' property of the AirCompressorRadiator object equals 'AIR COMPRESSOR RADIATOR'.
  verifyWpfControlTextWithExistCheck(Cat6420_Variables.AirCompRadiator_Label, "AIR COMPRESSOR RADIATOR");
  //Checks whether the 'IsVisible' property of the AIR COMPRESSOR RADIATOR part object equals True.
  verifyVisibilityWithExistCheck(Cat6420_Variables.AirCompRadiator_UI);
  //Checks whether the 'WPFControlText' property of the AirTemp object equals 'AIR TEMP'.
  verifyWpfControlTextWithExistCheck(Cat6420_Variables.AirTemp_Label, "AIR TEMP");
  //Checks whether the 'WPFControlText' property of the AirCompressor object equals 'AIR COMPRESSOR'.
  verifyWpfControlTextWithExistCheck(Cat6420_Variables.AirComp_Label, "AIR COMPRESSOR");
  //Checks whether the 'IsVisible' property of the AIR TEMP and AIR COMPRESSOR part object equals True.
  verifyVisibilityWithExistCheck(Cat6420_Variables.AirTempAirComp_UI);
  //Checks whether the 'WPFControlText' property of the ReceiverAirTankPsi object equals 'RECEIVER AIR TANK PSI'.
  verifyWpfControlTextWithExistCheck(Cat6420_Variables.ReceiverAirTankPSI_Label, "RECEIVER AIR TANK PSI");
  //Checks whether the 'WPFControlText' property of the EngineRpm object equals 'ENGINE RPM'.
  verifyWpfControlTextWithExistCheck(Cat6420_Variables.EngineRPM_Label, "ENGINE RPM");
  //Checks whether the 'IsVisible' property of the ENGINE RPM part object equals True.
  verifyVisibilityWithExistCheck(Cat6420_Variables.EngineRPM_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicPumps2 object equals 'HYDRAULIC PUMPS'.
  verifyWpfControlTextWithExistCheck(Cat6420_Variables.HydPump_Label, "HYDRAULIC PUMPS");
  //Checks whether the 'IsVisible' property of the HYDRAULIC PUMPS part object equals True.
  verifyVisibilityWithExistCheck(Cat6420_Variables.HydPump_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicTank2 object equals 'HYDRAULIC TANK'.
  verifyWpfControlTextWithExistCheck(Cat6420_Variables.HydTank_Label, "HYDRAULIC TANK");
  //Checks whether the 'IsVisible' property of the HYDRAULIC TANK part object equals True.
  verifyVisibilityWithExistCheck(Cat6420_Variables.HydTank_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicTemp object equals 'HYDRAULIC TEMP'.
  verifyWpfControlTextWithExistCheck(Cat6420_Variables.HydTemp_Label, "HYDRAULIC TEMP");
  //Checks whether the 'IsVisible' property of the HYDRAULIC TEMP part object equals True.
  verifyVisibilityWithExistCheck(Cat6420_Variables.HydTemp_UI);
}

function Cat6420FiveEStops()
{
  //Checks whether the 'WPFControlText' property of the HydraulicRadiator object equals 'HYDRAULIC RADIATOR'.
  verifyWpfControlTextWithExistCheck(Cat6420FiveEStops_Variables.HydRadiator_Label, "HYDRAULIC RADIATOR");
  //Checks whether the 'IsVisible' property of the HYDRAULIC RADIATOR part object equals True.
  verifyVisibilityWithExistCheck(Cat6420FiveEStops_Variables.HydRadiator_UI);
  //Checks whether the 'WPFControlText' property of the EngineRadiator object equals 'ENGINE RADIATOR'.
  verifyWpfControlTextWithExistCheck(Cat6420FiveEStops_Variables.EngineRadiator_Label, "ENGINE RADIATOR");
  //Checks whether the 'IsVisible' property of the ENGINE RADIATOR part object equals True.
  verifyVisibilityWithExistCheck(Cat6420FiveEStops_Variables.EngineRadiator_UI);
  //Checks whether the 'WPFControlText' property of the AirCompressorRadiator object equals 'AIR COMPRESSOR RADIATOR'.
  verifyWpfControlTextWithExistCheck(Cat6420FiveEStops_Variables.AirCompRadiator_Label, "AIR COMPRESSOR RADIATOR");
  //Checks whether the 'IsVisible' property of the AIR COMPRESSOR RADIATOR part object equals True.
  verifyVisibilityWithExistCheck(Cat6420FiveEStops_Variables.AirCompRadiator_UI);
  //Checks whether the 'WPFControlText' property of the AirTemp object equals 'AIR TEMP'.
  verifyWpfControlTextWithExistCheck(Cat6420FiveEStops_Variables.AirTemp_Label, "AIR TEMP");
  //Checks whether the 'WPFControlText' property of the AirCompressor object equals 'AIR COMPRESSOR'.
  verifyWpfControlTextWithExistCheck(Cat6420FiveEStops_Variables.AirComp_Label, "AIR COMPRESSOR");
  //Checks whether the 'IsVisible' property of the AIR TEMP and AIR COMPRESSOR part object equals True.
  verifyVisibilityWithExistCheck(Cat6420FiveEStops_Variables.AirTempAirComp_UI);
  //Checks whether the 'WPFControlText' property of the ReceiverAirTankPsi object equals 'RECEIVER AIR TANK PSI'.
  verifyWpfControlTextWithExistCheck(Cat6420FiveEStops_Variables.ReceiverAirTankPSI_Label, "RECEIVER AIR TANK PSI");
  //Checks whether the 'WPFControlText' property of the EngineRpm object equals 'ENGINE RPM'.
  verifyWpfControlTextWithExistCheck(Cat6420FiveEStops_Variables.EngineRPM_Label, "ENGINE RPM");
  //Checks whether the 'IsVisible' property of the ENGINE RPM part object equals True.
  verifyVisibilityWithExistCheck(Cat6420FiveEStops_Variables.EngineRPM_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicPumps2 object equals 'HYDRAULIC PUMPS'.
  verifyWpfControlTextWithExistCheck(Cat6420FiveEStops_Variables.HydPump_Label, "HYDRAULIC PUMPS");
  //Checks whether the 'IsVisible' property of the HYDRAULIC PUMPS part object equals True.
  verifyVisibilityWithExistCheck(Cat6420FiveEStops_Variables.HydPump_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicTank2 object equals 'HYDRAULIC TANK'.
  verifyWpfControlTextWithExistCheck(Cat6420FiveEStops_Variables.HydTank_Label, "HYDRAULIC TANK");
  //Checks whether the 'IsVisible' property of the HYDRAULIC TANK part object equals True.
  verifyVisibilityWithExistCheck(Cat6420FiveEStops_Variables.HydTank_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicTemp object equals 'HYDRAULIC TEMP'.
  verifyWpfControlTextWithExistCheck(Cat6420FiveEStops_Variables.HydTemp_Label, "HYDRAULIC TEMP");
  //Checks whether the 'IsVisible' property of the HYDRAULIC TEMP part object equals True.
  verifyVisibilityWithExistCheck(Cat6420FiveEStops_Variables.HydTemp_UI);
}

function AtlasCopco235()
{
  //Checks whether the 'WPFControlText' property of the EngineAirFilter object equals 'ENGINE AIR FILTER'.
  verifyWpfControlTextWithExistCheck(AtlasCopco235_Variables.EngineAirFilter_Label, "ENGINE AIR FILTER");
  //Checks whether the 'IsVisible' property of the ENGINE AIR FILTER part 1 object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco235_Variables.EngineAirFilter1_UI);
  //Checks whether the 'IsVisible' property of the ENGINE AIR FILTER part 2 object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco235_Variables.EngineAirFilter2_UI);
  //Checks whether the 'WPFControlText' property of the AirCompressorFilter object equals 'AIR COMPRESSOR FILTER'.
  verifyWpfControlTextWithExistCheck(AtlasCopco235_Variables.AirCompFilter_Label, "AIR COMPRESSOR FILTER");
  //Checks whether the 'IsVisible' property of the AIR COMPRESSOR FILTER part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco235_Variables.AirCompFilter_UI);
  //Checks whether the 'WPFControlText' property of the ReceiverAirTankPsi object equals 'RECEIVER AIR TANK PSI'.
  verifyWpfControlTextWithExistCheck(AtlasCopco235_Variables.ReceiverAirTankPSI_Label, "RECEIVER AIR TANK PSI");
  //Checks whether the 'IsVisible' property of the RECEIVER AIR TANK PSI part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco235_Variables.ReceiverAirTankPSI_UI);
  //Checks whether the 'WPFControlText' property of the AirCompressor object equals 'AIR COMPRESSOR'.
  verifyWpfControlTextWithExistCheck(AtlasCopco235_Variables.AirComp_Label, "AIR COMPRESSOR");
  //Checks whether the 'IsVisible' property of the AIR COMPRESSOR part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco235_Variables.AirComp_UI);
  //Checks whether the 'WPFControlText' property of the EngineRpm object equals 'ENGINE RPM'.
  verifyWpfControlTextWithExistCheck(AtlasCopco235_Variables.EngineRPM_Label, "ENGINE RPM");
  //Checks whether the 'IsVisible' property of the ENGINE RPM part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco235_Variables.EngineRPM_UI);
}

function AtlasCopco2713Jack()
{
  //Checks whether the 'WPFControlText' property of the ReceiverAirTankPsi object equals 'RECEIVER AIR TANK PSI'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2713Jack_Variables.ReceiverAirTankPSI_Label, "RECEIVER AIR TANK PSI");
  //Checks whether the 'WPFControlText' property of the HydraulicRadiator object equals 'HYDRAULIC RADIATOR'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2713Jack_Variables.HydRadiator_Label, "HYDRAULIC RADIATOR");
  //Checks whether the 'IsVisible' property of the HYDRAULIC RADIATOR part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco2713Jack_Variables.HydRadiator_UI);
  //Checks whether the 'WPFControlText' property of the EngineRadiator object equals 'ENGINE RADIATOR'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2713Jack_Variables.EngineRadiator_Label, "ENGINE RADIATOR");
  //Checks whether the 'IsVisible' property of the ENGINE RADIATOR part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco2713Jack_Variables.EngineRadiator_UI);
  //Checks whether the 'WPFControlText' property of the AirCompressorRadiator object equals 'AIR COMPRESSOR RADIATOR'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2713Jack_Variables.AirCompRadiator_Label, "AIR COMPRESSOR RADIATOR");
  //Checks whether the 'IsVisible' property of the AIR COMPRESSOR RADIATOR part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco2713Jack_Variables.AirCompRadiator_UI);
  //Checks whether the 'WPFControlText' property of the AirTemp object equals 'AIR TEMP'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2713Jack_Variables.AirTemp_Label, "AIR TEMP");
  //Checks whether the 'WPFControlText' property of the AirCompressor object equals 'AIR COMPRESSOR'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2713Jack_Variables.AirComp_Label, "AIR COMPRESSOR");
  //Checks whether the 'IsVisible' property of the AIR TEMP and AIR COMPRESSOR part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco2713Jack_Variables.AirTempAirComp_UI);
  //Checks whether the 'WPFControlText' property of the EngineRpm object equals 'ENGINE RPM'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2713Jack_Variables.EngineRPM_Label, "ENGINE RPM");
  //Checks whether the 'WPFControlText' property of the HydraulicPumps2 object equals 'HYDRAULIC PUMPS'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2713Jack_Variables.HydPump_Label, "HYDRAULIC PUMPS");
  //Checks whether the 'IsVisible' property of the HYDRAULIC PUMPS part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco2713Jack_Variables.HydPump_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicReturnFilters object equals 'HYDRAULIC RETURN FILTERS'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2713Jack_Variables.HydReturnFilters_Label, "HYDRAULIC RETURN FILTERS");
  //Checks whether the 'IsVisible' property of the HYDRAULIC RETURN FILTERS part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco2713Jack_Variables.HydReturnFilters_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicTank2 object equals 'HYDRAULIC TANK'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2713Jack_Variables.HydTank_Label, "HYDRAULIC TANK");
  //Checks whether the 'IsVisible' property of the HYDRAULIC TANK part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco2713Jack_Variables.HydTank_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicDrainFilters object equals 'HYDRAULIC DRAIN FILTERS'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2713Jack_Variables.HydDrainFilter_Label, "HYDRAULIC DRAIN FILTERS");
  //Checks whether the 'IsVisible' property of the HYDRAULIC DRAIN FILTERS part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco2713Jack_Variables.HydDrainFilter_UI);
  //Checks whether the 'WPFControlText' property of the LubeLevel2 object equals 'LUBE LEVEL'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2713Jack_Variables.LubeLevel_Label, "LUBE LEVEL");
  //Clicks the 'Button4' button.
  AtlasCopco2713Jack_Variables.OtherOption_Btn.ClickButton();
  aqUtils.Delay(3000);
  //Checks whether the 'WPFControlText' property of the NcsPortA object equals 'NCS PORT A'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2713Jack_Variables.NCSPortA_Label, "NCS PORT A");
  //Checks whether the 'WPFControlText' property of the NcsPortB2 object equals 'NCS PORT B'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2713Jack_Variables.NCSPortB_Label, "NCS PORT B");
  //Checks whether the 'WPFControlText' property of the CsPortA object equals 'CS PORT A'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2713Jack_Variables.CSPortA_Label, "CS PORT A");
  //Checks whether the 'WPFControlText' property of the CsPortB2 object equals 'CS PORT B'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2713Jack_Variables.CSPortB_Label, "CS PORT B");
  //Clicks the 'ButtonClose2' button.
  AtlasCopco2713Jack_Variables.OtherOptClose_Btn.ClickButton();
}

function AtlasCopco2714Jack()
{
  //Checks whether the 'WPFControlText' property of the HydraulicRadiator object equals 'HYDRAULIC RADIATOR'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714Jack_Variables.HydRadiator_Label, "HYDRAULIC RADIATOR");
  //Checks whether the 'IsVisible' property of the HYDRAULIC RADIATOR part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco2714Jack_Variables.HydRadiator_UI);
  //Checks whether the 'WPFControlText' property of the EngineRadiator object equals 'ENGINE RADIATOR'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714Jack_Variables.EngineRadiator_Label, "ENGINE RADIATOR");
  //Checks whether the 'IsVisible' property of the ENGINE RADIATOR part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco2714Jack_Variables.EngineRadiator_UI);
  //Checks whether the 'WPFControlText' property of the AirCompressorRadiator object equals 'AIR COMPRESSOR RADIATOR'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714Jack_Variables.AirCompRadiator_Label, "AIR COMPRESSOR RADIATOR");
  //Checks whether the 'IsVisible' property of the AIR COMPRESSOR RADIATOR part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco2714Jack_Variables.AirCompRadiator_UI);
  //Checks whether the 'WPFControlText' property of the ReceiverAirTankPsi object equals 'RECEIVER AIR TANK PSI'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714Jack_Variables.ReceiverAirTankPSI_Label, "RECEIVER AIR TANK PSI");
  //Checks whether the 'WPFControlText' property of the AirTemp object equals 'AIR TEMP'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714Jack_Variables.AirTemp_Label, "AIR TEMP");
  //Checks whether the 'WPFControlText' property of the AirCompressor object equals 'AIR COMPRESSOR'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714Jack_Variables.AirComp_Label, "AIR COMPRESSOR");
  //Checks whether the 'IsVisible' property of the AIR TEMP and AIR COMPRESSOR part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco2714Jack_Variables.AirTempAirComp_UI);
  //Checks whether the 'WPFControlText' property of the EngineRpm object equals 'ENGINE RPM'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714Jack_Variables.EngineRPM_Label, "ENGINE RPM");
  //Checks whether the 'WPFControlText' property of the HydraulicReturnFilters object equals 'HYDRAULIC RETURN FILTERS'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714Jack_Variables.HydReturnFilters_Label, "HYDRAULIC RETURN FILTERS");
  //Checks whether the 'IsVisible' property of the HYDRAULIC RETURN FILTERS part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco2714Jack_Variables.HydReturnFilters_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicTank2 object equals 'HYDRAULIC TANK'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714Jack_Variables.HydTank_Label, "HYDRAULIC TANK");
  //Checks whether the 'IsVisible' property of the HYDRAULIC TANK part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco2714Jack_Variables.HydTank_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicDrainFilters object equals 'HYDRAULIC DRAIN FILTERS'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714Jack_Variables.HydDrainFilter_Label, "HYDRAULIC DRAIN FILTERS");
  //Checks whether the 'IsVisible' property of the HYDRAULIC DRAIN FILTERS part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco2714Jack_Variables.HydDrainFilter_UI);
  //Checks whether the 'WPFControlText' property of the LubeLevel2 object equals 'LUBE LEVEL'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714Jack_Variables.LubeLevel_Label, "LUBE LEVEL");
  //Checks whether the 'WPFControlText' property of the HydraulicPumps2 object equals 'HYDRAULIC PUMPS'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714Jack_Variables.HydPump_Label, "HYDRAULIC PUMPS");
  //Checks whether the 'IsVisible' property of the HYDRAULIC PUMPS part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco2714Jack_Variables.HydPump_UI);
  //Clicks the 'Button4' button.
  AtlasCopco2714Jack_Variables.OtherOption_Btn.ClickButton();
  aqUtils.Delay(3000);
  //Checks whether the 'WPFControlText' property of the NcsPortA object equals 'NCS PORT A'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714Jack_Variables.NCSPortA_Label, "NCS PORT A");
  //Checks whether the 'WPFControlText' property of the NcsPortB2 object equals 'NCS PORT B'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714Jack_Variables.NCSPortB_Label, "NCS PORT B");
  //Checks whether the 'WPFControlText' property of the CsPortA object equals 'CS PORT A'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714Jack_Variables.CSPortA_Label, "CS PORT A");
  //Checks whether the 'WPFControlText' property of the CsPortB2 object equals 'CS PORT B'.
  verifyWpfControlTextWithExistCheck(AtlasCopco2714Jack_Variables.CSPortB_Label, "CS PORT B");
  //Clicks the 'ButtonClose2' button.
  AtlasCopco2714Jack_Variables.OtherOptClose_Btn.ClickButton();
}

function AtlasCopco275()
{
  //Checks whether the 'WPFControlText' property of the ReceiverAirTankPsi object equals 'RECEIVER AIR TANK PSI'.
  verifyWpfControlTextWithExistCheck(AtlasCopco275_Variables.ReceiverAirTankPSI_Label, "RECEIVER AIR TANK PSI");
  //Checks whether the 'IsVisible' property of the RECEIVER AIR TANK PSI part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco275_Variables.ReceiverAirTankPSI_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicRadiator object equals 'HYDRAULIC RADIATOR'.
  verifyWpfControlTextWithExistCheck(AtlasCopco275_Variables.HydRadiator_Label, "HYDRAULIC RADIATOR");
  //Checks whether the 'IsVisible' property of the HYDRAULIC RADIATOR part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco275_Variables.HydRadiator_UI);
  //Checks whether the 'WPFControlText' property of the EngineRadiator object equals 'ENGINE RADIATOR'.
  verifyWpfControlTextWithExistCheck(AtlasCopco275_Variables.EngineRadiator_Label, "ENGINE RADIATOR");
  //Checks whether the 'IsVisible' property of the ENGINE RADIATOR part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco275_Variables.EngineRadiator_UI);
  //Checks whether the 'WPFControlText' property of the AirCompressorRadiator object equals 'AIR COMPRESSOR RADIATOR'.
  verifyWpfControlTextWithExistCheck(AtlasCopco275_Variables.AirCompRadiator_Label, "AIR COMPRESSOR RADIATOR");
  //Checks whether the 'IsVisible' property of the AIR COMPRESSOR RADIATOR part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco275_Variables.AirCompRadiator_UI);
  //Checks whether the 'WPFControlText' property of the AirTemp object equals 'AIR TEMP'.
  verifyWpfControlTextWithExistCheck(AtlasCopco275_Variables.AirTemp_Label, "AIR TEMP");
  //Checks whether the 'WPFControlText' property of the AirCompressor object equals 'AIR COMPRESSOR'.
  verifyWpfControlTextWithExistCheck(AtlasCopco275_Variables.AirComp_Label, "AIR COMPRESSOR");
  //Checks whether the 'IsVisible' property of the AIR TEMP and AIR COMPRESSOR part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco275_Variables.AirTempAirComp_UI);
  //Checks whether the 'WPFControlText' property of the EngineRpm object equals 'ENGINE RPM'.
  verifyWpfControlTextWithExistCheck(AtlasCopco275_Variables.EngineRPM_Label, "ENGINE RPM");
  //Checks whether the 'IsVisible' property of the ENGINE RPM part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco275_Variables.EngineRPM_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicPumps2 object equals 'HYDRAULIC PUMPS'.
  verifyWpfControlTextWithExistCheck(AtlasCopco275_Variables.HydPump_Label, "HYDRAULIC PUMPS");
  //Checks whether the 'IsVisible' property of the HYDRAULIC PUMPS part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco275_Variables.HydPump_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicReturnFilters object equals 'HYDRAULIC RETURN FILTERS'.
  verifyWpfControlTextWithExistCheck(AtlasCopco275_Variables.HydReturnFilters_Label, "HYDRAULIC RETURN FILTERS");
  //Checks whether the 'IsVisible' property of the HYDRAULIC RETURN FILTERS part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco275_Variables.HydReturnFilters_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicTank2 object equals 'HYDRAULIC TANK'.
  verifyWpfControlTextWithExistCheck(AtlasCopco275_Variables.HydTank_Label, "HYDRAULIC TANK");
  //Checks whether the 'IsVisible' property of the HYDRAULIC TANK part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco275_Variables.HydTank_UI);
  //Checks whether the 'WPFControlText' property of the HydraulicDrainFilters object equals 'HYDRAULIC DRAIN FILTERS'.
  verifyWpfControlTextWithExistCheck(AtlasCopco275_Variables.HydDrainFilter_Label, "HYDRAULIC DRAIN FILTERS");
  //Checks whether the 'IsVisible' property of the HYDRAULIC DRAIN FILTERS part object equals True.
  verifyVisibilityWithExistCheck(AtlasCopco275_Variables.HydDrainFilter_UI);
  //Checks whether the 'WPFControlText' property of the LubeLevel2 object equals 'LUBE LEVEL'.
  verifyWpfControlTextWithExistCheck(AtlasCopco275_Variables.LubeLevel_Label, "LUBE LEVEL");
}

module.exports = {Sandvik412I, Sandvik410I, Sandvik416I, AtlasCopco2714JackWithStairs, AtlasCopco271MastStairs, Epiroc271E, AtlasCopco351E, AtlasCopco351, Cat6420, Cat6420FiveEStops,
AtlasCopco235, AtlasCopco2713Jack, AtlasCopco2714Jack, AtlasCopco275};

