<#
.SYNOPSIS
    Downloads item icons from OSRS Wiki and other sources

.DESCRIPTION
    Attempts to download real item icons for OSRS items from various sources:
    - OSRS Wiki API
    - RuneLite Icons (if available)
    - Creates placeholders for items that cannot be downloaded

.PARAMETER ItemIds
    Array of item IDs to download. If not specified, downloads all missing items.

.PARAMETER ForceOverwrite
    If set, overwrites existing files

.PARAMETER MaxRetries
    Maximum number of retries per download (default: 3)

.EXAMPLE
    .\download-item-icons.ps1
    .\download-item-icons.ps1 -ItemIds 1017, 1063, 1083
    .\download-item-icons.ps1 -ForceOverwrite
#>

param(
    [int[]]$ItemIds = @(),
    [switch]$ForceOverwrite,
    [int]$MaxRetries = 3,
    [string]$ProjectRoot = ""
)

# If ProjectRoot not specified, calculate it
if (-not $ProjectRoot) {
    $ProjectRoot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
    if (Test-Path (Join-Path $ProjectRoot "osrs-tools")) {
        $ProjectRoot = Join-Path $ProjectRoot "osrs-tools"
    }
}

$itemsDir = Join-Path $ProjectRoot "public\assets\items"
$logFile = Join-Path $ProjectRoot "scripts\download_log.txt"

Write-Host "OSRS Item Icons Downloader" -ForegroundColor Cyan
Write-Host "===========================" -ForegroundColor Cyan
Write-Host "Project Root: $ProjectRoot"
Write-Host "Items Directory: $itemsDir"
Write-Host ""

if (-not (Test-Path $itemsDir)) {
    New-Item -ItemType Directory -Path $itemsDir | Out-Null
}

# Function to download with retries
function Download-File {
    param(
        [string]$Url,
        [string]$OutFile,
        [int]$Retries = 3
    )

    $attempt = 0
    while ($attempt -lt $Retries) {
        try {
            $attempt++
            Invoke-WebRequest -Uri $Url -OutFile $OutFile -TimeoutSec 10 -ErrorAction Stop
            return $true
        }
        catch {
            if ($attempt -lt $Retries) {
                Start-Sleep -Milliseconds 500
            }
        }
    }

    return $false
}

# Function to create a placeholder PNG
function Create-PlaceholderPng {
    param([string]$FilePath)

    $pngBytes = @(
        0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A,
        0x00, 0x00, 0x00, 0x0D, 0x49, 0x48, 0x44, 0x52,
        0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
        0x08, 0x06, 0x00, 0x00, 0x00, 0x1F, 0x15, 0xC4,
        0x89, 0x00, 0x00, 0x00, 0x0A, 0x49, 0x44, 0x41,
        0x54, 0x78, 0x9C, 0x63, 0x00, 0x01, 0x00, 0x00,
        0x05, 0x00, 0x01, 0x0D, 0x0A, 0x2D, 0xB4, 0x00,
        0x00, 0x00, 0x00, 0x49, 0x45, 0x4E, 0x44, 0xAE,
        0x42, 0x60, 0x82
    )

    [System.IO.File]::WriteAllBytes($FilePath, $pngBytes)
}

# Determine which items to download
if ($ItemIds.Count -eq 0) {
    Write-Host "Determining missing items..." -ForegroundColor Yellow

    $allItemsFile = Join-Path $ProjectRoot "allitems.txt"
    $allIds = @()

    Get-Content $allItemsFile | ForEach-Object {
        $parts = $_ -split "`t"
        if ($parts.Count -eq 2 -and $parts[1].Trim() -match '^\d+$') {
            $allIds += [int]$parts[1].Trim()
        }
    }

    $uniqueIds = $allIds | Sort-Object -Unique
    $existingFiles = Get-ChildItem -Path $itemsDir -Filter "*.png" -ErrorAction SilentlyContinue |
        Where-Object { $_.BaseName -match '^\d+$' } |
        ForEach-Object { [int]$_.BaseName }

    $ItemIds = $uniqueIds | Where-Object { $_ -notin $existingFiles }

    Write-Host "Found $($ItemIds.Count) items to download" -ForegroundColor Green

    if ($ItemIds.Count -eq 0) {
        Write-Host "All items already have icons!" -ForegroundColor Green
        exit 0
    }
}

Write-Host "Attempting to download $($ItemIds.Count) item icons..." -ForegroundColor Yellow
Write-Host ""

$successCount = 0
$failureCount = 0
$skipped = 0

# Try multiple sources in order of preference
$sources = @(
    @{ Name = "OSRS Wiki (lootscape)"; UrlTemplate = "https://lootscape-cdn.b-cdn.net/item-icons/{0}.png" },
    @{ Name = "RuneLite Wiki"; UrlTemplate = "https://raw.githubusercontent.com/runelite/runelite.net/master/public/img/items/{0}.png" }
)

$progressCount = 0
foreach ($itemId in $ItemIds) {
    $progressCount++
    if ($progressCount % 100 -eq 0) {
        Write-Host "Progress: $progressCount / $($ItemIds.Count)"
    }

    $outFile = Join-Path $itemsDir "$itemId.png"

    # Skip if file exists and not forcing overwrite
    if ((Test-Path $outFile) -and -not $ForceOverwrite) {
        $skipped++
        continue
    }

    $downloaded = $false

    # Try each source
    foreach ($source in $sources) {
        $url = $source.UrlTemplate -f $itemId

        if (Download-File -Url $url -OutFile $outFile -Retries $MaxRetries) {
            $successCount++
            $downloaded = $true
            break
        }
    }

    # If download failed, create a placeholder
    if (-not $downloaded) {
        Create-PlaceholderPng -FilePath $outFile
        $failureCount++
    }
}

Write-Host ""
Write-Host "Download Summary:" -ForegroundColor Cyan
Write-Host "  Successfully downloaded: $successCount"
Write-Host "  Failed (created placeholders): $failureCount"
Write-Host "  Skipped (already exist): $skipped"
Write-Host ""
Write-Host "All files created in: $itemsDir"
Write-Host "Done!" -ForegroundColor Green
