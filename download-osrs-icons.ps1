# Script to download comprehensive OSRS icons from the Old School RuneScape Wiki
# This downloads skill icons, UI icons, and diary icons

$iconsPath = "public/assets/icons"
$baseWikiUrl = "https://oldschool.runescape.wiki/images"

# Create subdirectories
$dirs = @("$iconsPath/skills", "$iconsPath/ui", "$iconsPath/diaries")
foreach ($dir in $dirs) {
    if (!(Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
        Write-Host "Created directory: $dir"
    }
}

# Function to download icon with retry logic
function Download-Icon {
    param(
        [string]$url,
        [string]$outputPath,
        [int]$maxRetries = 3
    )

    $retries = 0
    $success = $false

    while ($retries -lt $maxRetries -and -not $success) {
        try {
            Invoke-WebRequest -Uri $url -OutFile $outputPath -ErrorAction Stop
            Write-Host "Downloaded: $(Split-Path -Leaf $outputPath)"
            $success = $true
        }
        catch {
            $retries++
            if ($retries -lt $maxRetries) {
                Start-Sleep -Seconds 1
            }
        }
    }

    return $success
}

# Inventory Tab Icons - Main interface tabs
Write-Host "=== Downloading Inventory Tab Icons ===" -ForegroundColor Cyan

$tabIcons = @(
    @{name="Quest_Tab"; urls=@("$baseWikiUrl/Quest_icon.png", "$baseWikiUrl/Quest_point_icon.png", "$baseWikiUrl/Quests_icon.png")},
    @{name="Prayer_Tab"; urls=@("$baseWikiUrl/Prayer_icon.png")},
    @{name="Friends_Chat_Tab"; urls=@("$baseWikiUrl/Friends_icon.png", "$baseWikiUrl/Friends_chat_icon.png", "$baseWikiUrl/Chat_icon.png", "$baseWikiUrl/Social_icon.png", "$baseWikiUrl/Clan_icon.png", "$baseWikiUrl/Clans_icon.png")},
    @{name="Combat_Tab"; urls=@("$baseWikiUrl/Combat_icon.png")},
    @{name="Inventory_Tab"; urls=@("$baseWikiUrl/Inventory_icon.png", "$baseWikiUrl/Inventory.png")},
    @{name="Magic_Tab"; urls=@("$baseWikiUrl/Magic_icon.png")},
    @{name="Skills_Tab"; urls=@("$baseWikiUrl/Skills_icon.png", "$baseWikiUrl/Skill_icon.png")}
)

foreach ($icon in $tabIcons) {
    $outputPath = "$iconsPath/$($icon.name).png"
    foreach ($url in $icon.urls) {
        if (Download-Icon -url $url -outputPath $outputPath) {
            break
        }
    }
}

# Skill Icons
Write-Host "=== Downloading Skill Icons ===" -ForegroundColor Cyan

$skills = @(
    "Attack", "Defence", "Strength", "Hitpoints", "Ranged", "Prayer", "Magic",
    "Cooking", "Woodcutting", "Fletching", "Fishing", "Firemaking", "Crafting",
    "Smithing", "Mining", "Herblore", "Agility", "Thieving", "Slayer", "Farming",
    "Runecrafting", "Construction", "Dungeoneering", "Divination", "Sailing"
)

foreach ($skill in $skills) {
    $outputPath = "$iconsPath/skills/${skill}_icon.png"
    $url = "$baseWikiUrl/${skill}_icon.png"
    Download-Icon -url $url -outputPath $outputPath
}

# UI Icons - Common interface elements
Write-Host "=== Downloading UI Icons ===" -ForegroundColor Cyan

$uiIcons = @(
    @{name="Coins"; urls=@("$baseWikiUrl/Coins_icon.png", "$baseWikiUrl/Gold_coins_icon.png")},
    @{name="Quest_Points"; urls=@("$baseWikiUrl/Quest_point_icon.png", "$baseWikiUrl/Quest_points_icon.png")},
    @{name="Experience"; urls=@("$baseWikiUrl/Experience_icon.png", "$baseWikiUrl/XP_icon.png")},
    @{name="Bank"; urls=@("$baseWikiUrl/Bank_icon.png")},
    @{name="Settings"; urls=@("$baseWikiUrl/Settings_icon.png")},
    @{name="Logout"; urls=@("$baseWikiUrl/Logout_icon.png")},
    @{name="Health"; urls=@("$baseWikiUrl/Health_icon.png", "$baseWikiUrl/HP_icon.png")},
    @{name="Prayer_Points"; urls=@("$baseWikiUrl/Prayer_points_icon.png")},
    @{name="Energy"; urls=@("$baseWikiUrl/Energy_icon.png", "$baseWikiUrl/Run_icon.png")},
    @{name="Protect"; urls=@("$baseWikiUrl/Piety_icon.png")},
    @{name="Untradeable"; urls=@("$baseWikiUrl/Untradeable_icon.png")},
    @{name="Members"; urls=@("$baseWikiUrl/Members_icon.png")},
    @{name="Search"; urls=@("$baseWikiUrl/Search_icon.png")},
    @{name="Lock"; urls=@("$baseWikiUrl/Lock_icon.png")},
    @{name="Notification"; urls=@("$baseWikiUrl/Notification_icon.png")},
    @{name="Achievement_Diary"; urls=@("$baseWikiUrl/Achievement_Diary_icon.png", "$baseWikiUrl/Diary_icon.png")},
    @{name="Lockout"; urls=@("$baseWikiUrl/Lockout_icon.png", "$baseWikiUrl/Locked_icon.png")},
    @{name="Music"; urls=@("$baseWikiUrl/Music_icon.png", "$baseWikiUrl/Sound_icon.png")},
    @{name="Emotes"; urls=@("$baseWikiUrl/Emotes_icon.png", "$baseWikiUrl/Emote_icon.png")}
)

foreach ($icon in $uiIcons) {
    $outputPath = "$iconsPath/ui/$($icon.name).png"
    foreach ($url in $icon.urls) {
        if (Download-Icon -url $url -outputPath $outputPath) {
            break
        }
    }
}

# Diary Icons
Write-Host "=== Downloading Diary Icons ===" -ForegroundColor Cyan

$diaries = @(
    "Ardougne", "Desert", "Falador", "Fremennik", "Kandarin",
    "Karamja", "Kourend", "Lumbridge", "Morytania",
    "Varrock", "Wilderness", "Western"
)

foreach ($diary in $diaries) {
    $outputPath = "$iconsPath/diaries/${diary}_Diary.png"
    $urls = @(
        "$baseWikiUrl/${diary}_Diary_icon.png",
        "$baseWikiUrl/${diary}_diary_icon.png",
        "$baseWikiUrl/${diary}_Diary.png"
    )

    foreach ($url in $urls) {
        if (Download-Icon -url $url -outputPath $outputPath) {
            break
        }
    }
}

Write-Host "=== Download Summary ===" -ForegroundColor Green
Write-Host "Inventory tabs: $($tabIcons.Count)"
Write-Host "Skills: $($skills.Count)"
Write-Host "UI elements: $($uiIcons.Count)"
Write-Host "Diaries: $($diaries.Count)"
Write-Host "Icons saved to: $(Resolve-Path $iconsPath)"
