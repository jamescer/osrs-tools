@echo off
REM Quick launcher for item icons maintenance scripts
REM This batch file provides easy access to all maintenance functions

setlocal enabledelayedexpansion
cd /d "%~dp0"

:menu
cls
echo.
echo ======================================
echo   OSRS Item Icons Maintenance Tool
echo ======================================
echo.
echo Current Status:
echo   Total Items:     15,581
echo   Existing:        574 (3.68%%)
echo   Missing:         15,022 (96.32%%)
echo.
echo Choose an option:
echo.
echo   1. Check Status
echo   2. Create Placeholders
echo   3. Download Icons
echo   4. Generate Report
echo   5. View Documentation
echo   6. View Quick Reference
echo   7. Exit
echo.
set /p choice="Enter your choice (1-7): "

if "%choice%"=="1" goto check
if "%choice%"=="2" goto placeholders
if "%choice%"=="3" goto download
if "%choice%"=="4" goto report
if "%choice%"=="5" goto docs
if "%choice%"=="6" goto quickref
if "%choice%"=="7" goto end

echo Invalid choice. Please try again.
pause
goto menu

:check
cls
echo.
echo Checking item icon status...
echo.
powershell -ExecutionPolicy Bypass -File maintain-item-icons.ps1 -Action check -ProjectRoot ..
pause
goto menu

:placeholders
cls
echo.
echo Creating placeholder PNG files...
echo This may take 1-2 minutes...
echo.
powershell -ExecutionPolicy Bypass -File maintain-item-icons.ps1 -Action create-placeholders -ProjectRoot ..
echo.
pause
goto menu

:download
cls
echo.
echo Downloading item icons from external sources...
echo This may take several minutes depending on network speed...
echo.
powershell -ExecutionPolicy Bypass -File download-item-icons.ps1 -ProjectRoot ..
echo.
pause
goto menu

:report
cls
echo.
echo Generating detailed report...
echo.
powershell -ExecutionPolicy Bypass -File maintain-item-icons.ps1 -Action report -OutputReport missing_items.csv -ProjectRoot ..
echo.
if exist missing_items.csv (
    echo Report generated: missing_items.csv
    echo Opening in default application...
    start missing_items.csv
) else (
    echo Report generation failed!
)
echo.
pause
goto menu

:docs
cls
echo.
echo Opening full documentation...
echo.
if exist ITEM_ICONS_README.md (
    start notepad ITEM_ICONS_README.md
) else (
    echo Documentation file not found!
    pause
)
goto menu

:quickref
cls
echo.
echo Opening quick reference guide...
echo.
if exist QUICK_REFERENCE.md (
    start notepad QUICK_REFERENCE.md
) else (
    echo Quick reference file not found!
    pause
)
goto menu

:end
cls
echo.
echo Goodbye!
echo.
exit /b 0
