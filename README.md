# Automation Testing Framework

This repository contains an automation testing framework built using TestComplete tool and Javascript language for HMI Desktop application and Web application.

The **HMI Client** is a desktop application that displays live and historical data from industrial drill machines. It provides features such as uploading drilling patterns, setting boundaries, monitoring geolocation, and managing machine parameters.

The **Diagnostic Dashboard** is a web application that interacts with the HMI Client to provide centralized monitoring and control. It includes data from the Control Gateway, GPS, and commissioning details for different machine types, as well as logs, alerts, and operational insights.

---

## 📌 Project Overview

● Desktop application testing  
● Web application testing  
● Data-driven testing  
● Reusable test components  
● Test reporting  
● Regression testing  

---

## 🛠️ Tech Stack

● TestComplete  
● JavaScript  
● Git  
● Excel for test data  

---

## 📂 Project Structure

```bash
Project Suite 'HMI'
│
├── HMI
│   ├── Execution Plan
│   ├── ImageRepository
│   ├── KeywordTests
│   │   └── Test1
│   ├── NameMapping
│   ├── Script
│   ├── AutoDrillParameterBrowser
│   │   ├── AirPressureCycleTransition
│   │   ├── BitSpecifiedDownForceLimit
│   │   ├── BottomOfHoleWaterDistance
│   │   ├── BottomOfHoleWaterSetpoint
│   │   ├── CollaringCompressorVolumeCommand
│   │   ├── CollaringDepth
│   │   ├── CollaringDownForceLimit
│   │   ├── CollaringMaxPenetrationSpeed
│   │   ├── DrillHoleDepth
│   │   ├── DrillingCompressorVolumeCommand
│   │   ├── DrillingHoistDownSpeedReference
│   │   ├── DrillingMaxPenetrationSpeed
│   │   ├── EndOfHoleWaterOffSetpoint
│   │   ├── GroundDetectForceSetpoint
│   │   ├── GroundDetectHoistSpeedReference
│   │   ├── HoistHighSpeedDownReference
│   │   └── HoistHighSpeedUpReference
│   ├── AuxControl
│   │   ├── AuxControlLockUnlock
│   │   ├── AuxControlMast
│   │   ├── AuxControlMisc
│   │   ├── AuxControlRod
│   │   ├── ChangingModes
│   │   ├── HMISetupMode
│   │   └── RodSupportVerify
│   ├── Fault
│   │   ├── ActiveHistoryDataCheck
│   │   └── DefaultTableResetButton
│   ├── GPSMap
│   │   ├── DirStatusButtons
│   │   ├── GPSZoomLevel
│   │   └── HazardImage
│   ├── MachineDetails
│   │   └── MachineUIDetails
│   ├── MachineStatus
│   │   ├── MachineStatusMachine
│   │   └── MachineStatusParameters
│   ├── MainScreen
│   │   ├── ButtonsVisibility
│   │   └── MainScreenDrillingOptions
│   ├── MaintenanceScreen
│   │   ├── ConsumableMaintenance
│   │   ├── DrillMastJackSystemInterlockScreens
│   │   ├── EngineLog
│   │   ├── Fluid
│   │   ├── HeadLimit
│   │   ├── Joystick
│   │   ├── MachineMonitor
│   │   ├── MaintTestIOandKeypadStatus
│   │   ├── PropelInterlockScreens
│   │   ├── SetupHoistResolver
│   │   └── SystemInterlockScreens
│   ├── MainWindowScreen
│   │   ├── ByDefaultOptions
│   │   ├── HMILoginTest
│   │   └── NavBarData
│   ├── Pages
│   │   ├── AuxControlPage
│   │   ├── BrowserPage
│   │   ├── CommonFunc
│   │   ├── FaultPage
│   │   ├── GlobalVariables
│   │   ├── GPSMapPage
│   │   ├── MachineStatusPage
│   │   ├── MachinesUIandLabelPage
│   │   ├── MainOptionsVariable
│   │   ├── MainScreenPage
│   │   ├── MaintenancePage
│   │   ├── MainWindowPage
│   │   ├── PreInspectionPage
│   │   ├── ProdMonitorPage
│   │   └── SetupPage
│   ├── PreInspectionScreen
│   │   └── PreInspection
│   ├── ProdMonitor
│   │   └── ProdMonitorData
│   ├── SetupScreen
│   │   ├── AutoDrillParameters
│   │   ├── BoundaryImportRemove
│   │   ├── ConsumableSetup
│   │   ├── ImportPatternDirections
│   │   ├── LanguageChange
│   │   ├── LubricationTiming
│   │   ├── PatternImportRemove
│   │   └── SetupToggleBtn
│   └── ThemeChange
│
├── TestedApps
│   └── Flanders_Ardvarc_Hmi_Client
│
└── Project Suite Logs
    └── HMI Logs
```

---

## 📌 Folder Responsibilities / Module Description

● HMI  
Core project root containing all automation modules for HMI application testing.

● Execution Plan  
Defines test execution flow and manages test suite grouping for execution.

● ImageRepository  
Stores reference images used for image-based object recognition in TestComplete.

● KeywordTests  
Contains keyword-driven test cases (e.g., Test1).

● NameMapping  
Stores object repository mapping for UI elements used in automation scripts.

● Script  
Main automation logic organized into feature-wise modules.

● AutoDrillParameterBrowser  
Handles automation of Auto Drill Parameters through browser and validates them in the HMI desktop application.

● AuxControl  
Automates auxiliary control operations such as mast and rod functionalities.

● Fault  
Handles fault screen validations and fault history data verification.

● GPSMap  
Automates GPS Map screen features such as zoom, direction status, and hazard display validation.

● MachineDetails  
Handles machine UI details by updating values from the browser and validating them in the HMI desktop application for multiple machines.

● MachineStatus  
Validates machine status parameters and UI consistency.

● MainScreen  
Handles main dashboard screen functionalities including drilling options.

● MaintenanceScreen  
Automates maintenance-related screens including system interlocks, logs, joystick, fluid monitoring, and machine health modules.

● MainWindowScreen  
Handles login screen, navigation bar, and default UI validations.

● Pages  
Contains reusable page objects and shared logic used across multiple modules.

● PreInspectionScreen  
Handles pre-inspection workflow automation and validations.

● ProdMonitor  
Automates production monitoring screen validations.

● SetupScreen  
Handles setup configurations such as parameters, language change, lubrication timing, and pattern imports.

● ThemeChange  
Handles UI theme switching and validation.

● TestedApps  
Contains configuration of the application under test (HMI client).

● Project Suite Logs  
Stores execution logs, reports, and test run history.

---

## 📸 Screenshots

Regardless of Fail or Pass of the test case, screenshot will be captured for each functional step.  
After exporting the report and opening it in the browser, clicking on any step will show its screenshot.

---

## 🧪 Features Implemented

● Page Object Model Framework design  
● Reusable utility functions  
● Data-driven testing  
● Screenshot capture on every step  
● Desktop and Web automation support  
● Logging and reporting  
● Regression test execution  

---

## 👨‍💻 Author

Rushikesh Kolhe  
QA Automation Engineer
