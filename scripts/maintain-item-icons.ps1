<#
.SYNOPSIS
    Maintains item icon files for OSRS items based on allitems.txt

.DESCRIPTION
    This script:
    - Extracts all unique numeric item IDs from allitems.txt
    - Identifies missing icon files in public/assets/items/
    - Creates placeholder PNG files for missing items
    - Generates a report of missing items
    - Can sync with OSRS Wiki or external sources

.PARAMETER Action
    The action to perform: "check", "create-placeholders", "report", or "sync"

.PARAMETER OutputReport
    Output file path for the missing items report (CSV format)

.EXAMPLE
    .\maintain-item-icons.ps1 -Action check
    .\maintain-item-icons.ps1 -Action create-placeholders
    .\maintain-item-icons.ps1 -Action report -OutputReport missing_items.csv
#>

param(
    [ValidateSet("check", "create-placeholders", "report", "sync")]
    [string]$Action = "check",

    [string]$OutputReport = "missing_items.csv",
    [string]$ProjectRoot = ""
)

# If ProjectRoot not specified, calculate it
if (-not $ProjectRoot) {
    $ProjectRoot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
    # Try to find the osrs-tools directory
    if (Test-Path (Join-Path $ProjectRoot "osrs-tools")) {
        $ProjectRoot = Join-Path $ProjectRoot "osrs-tools"
    }
}

# Define paths
$allItemsFile = Join-Path $ProjectRoot "allitems.txt"
$itemsDir = Join-Path $ProjectRoot "public\assets\items"

Write-Host "OSRS Item Icons Maintenance Tool" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
Write-Host "Project Root: $ProjectRoot"
Write-Host "Items Directory: $itemsDir"
Write-Host ""

# Verify paths exist
if (-not (Test-Path $allItemsFile)) {
    Write-Error "allitems.txt not found at $allItemsFile"
    exit 1
}

if (-not (Test-Path $itemsDir)) {
    Write-Warning "Items directory does not exist. Creating it..."
    New-Item -ItemType Directory -Path $itemsDir | Out-Null
}

# Extract unique numeric item IDs from allitems.txt
Write-Host "Extracting item IDs from allitems.txt..." -ForegroundColor Yellow

$allIds = @()
$itemNames = @{}

Get-Content $allItemsFile | ForEach-Object {
    $line = $_ -replace "`t", "`t"  # Normalize tabs
    $parts = $line -split "`t"

    if ($parts.Count -eq 2) {
        $itemName = $parts[0].Trim()
        $itemId = $parts[1].Trim()

        # Only keep numeric IDs (ignore historical/interface items)
        if ($itemId -match '^\d+$') {
            $allIds += [int]$itemId
            # Store the name mapping (use the first occurrence)
            if (-not $itemNames.ContainsKey($itemId)) {
                $itemNames[$itemId] = $itemName
            }
        }
    }
}

$uniqueIds = $allIds | Sort-Object -Unique
Write-Host "Found $($uniqueIds.Count) unique item IDs" -ForegroundColor Green

# Get existing files
$existingFiles = Get-ChildItem -Path $itemsDir -Filter "*.png" |
    Where-Object { $_.BaseName -match '^\d+$' } |
    ForEach-Object { [int]$_.BaseName }

Write-Host "Found $($existingFiles.Count) existing icon files" -ForegroundColor Green

# Find missing items
$missingIds = @()
foreach ($id in $uniqueIds) {
    if ($id -notin $existingFiles) {
        $missingIds += $id
    }
}

Write-Host "Found $($missingIds.Count) missing icon files" -ForegroundColor Red
Write-Host ""

# Perform requested action
switch ($Action) {
    "check" {
        Write-Host "Missing Item IDs (first 20):" -ForegroundColor Yellow
        $missingIds | Select-Object -First 20 | ForEach-Object {
            $name = if ($itemNames.ContainsKey($_)) { $itemNames[$_] } else { "Unknown" }
            Write-Host "  ID: $_ - $name"
        }

        if ($missingIds.Count -gt 20) {
            Write-Host "  ... and $($missingIds.Count - 20) more" -ForegroundColor Gray
        }

        Write-Host ""
        Write-Host "Summary:" -ForegroundColor Cyan
        Write-Host "  Total Items: $($uniqueIds.Count)"
        Write-Host "  Existing Icons: $($existingFiles.Count)"
        Write-Host "  Missing Icons: $($missingIds.Count)"
        Write-Host "  Coverage: $([math]::Round(($existingFiles.Count / $uniqueIds.Count) * 100, 2))%"
    }

    "create-placeholders" {
        if ($missingIds.Count -eq 0) {
            Write-Host "No missing items to create placeholders for!" -ForegroundColor Green
            exit 0
        }

        Write-Host "Creating placeholder PNG files for $($missingIds.Count) missing items..." -ForegroundColor Yellow

        $progressCount = 0
        foreach ($id in $missingIds) {
            $progressCount++
            if ($progressCount % 100 -eq 0) {
                Write-Host "  Progress: $progressCount / $($missingIds.Count)"
            }

            $filePath = Join-Path $itemsDir "$id.png"

            # Create a simple 1x1 transparent PNG as placeholder
            # PNG header for a 1x1 transparent image
            $pngBytes = @(
                0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A,  # PNG signature
                0x00, 0x00, 0x00, 0x0D,  # IHDR chunk length
                0x49, 0x48, 0x44, 0x52,  # IHDR
                0x00, 0x00, 0x00, 0x01,  # Width: 1
                0x00, 0x00, 0x00, 0x01,  # Height: 1
                0x08, 0x06, 0x00, 0x00, 0x00,  # Bit depth, color type, compression, filter, interlace
                0x1F, 0x15, 0xC4, 0x89,  # CRC
                0x00, 0x00, 0x00, 0x0A,  # IDAT chunk length
                0x49, 0x44, 0x41, 0x54,  # IDAT
                0x78, 0x9C, 0x63, 0x00, 0x01, 0x00, 0x00, 0x05, 0x00, 0x01,  # Compressed data
                0x0D, 0x0A, 0x2D, 0xB4,  # CRC
                0x00, 0x00, 0x00, 0x00,  # IEND chunk length
                0x49, 0x45, 0x4E, 0x44,  # IEND
                0xAE, 0x42, 0x60, 0x82   # CRC
            )

            [System.IO.File]::WriteAllBytes($filePath, $pngBytes)
        }

        Write-Host "Created $($missingIds.Count) placeholder PNG files" -ForegroundColor Green
        Write-Host "Location: $itemsDir"
    }

    "report" {
        Write-Host "Generating report to: $OutputReport" -ForegroundColor Yellow

        $report = @()
        $report += "Item_ID,Item_Name,Status"

        foreach ($id in $uniqueIds) {
            $status = if ($id -in $existingFiles) { "FOUND" } else { "MISSING" }
            $name = if ($itemNames.ContainsKey($id)) { $itemNames[$id] } else { "Unknown" }
            $report += "$id,""$name"",$status"
        }

        $report | Out-File -FilePath $OutputReport -Encoding UTF8

        Write-Host "Report created successfully!" -ForegroundColor Green
        Write-Host "Total items: $($uniqueIds.Count)"
        Write-Host "Found: $($existingFiles.Count)"
        Write-Host "Missing: $($missingIds.Count)"
    }

    "sync" {
        Write-Host "Sync functionality requires external icon source configuration" -ForegroundColor Yellow
        Write-Host "TODO: Implement sync with OSRS Wiki or external icon repository"
        Write-Host ""
        Write-Host "For now, use 'create-placeholders' to create placeholder files" -ForegroundColor Gray
        Write-Host "Then replace them manually or with an automated download script"
    }
}

Write-Host ""
Write-Host "Done!" -ForegroundColor Green
