# OSRS Item Icons Maintenance Guide

This directory contains scripts for maintaining OSRS item icon files based on the `allitems.txt` database.

## Overview

- **Total OSRS Items**: 15,581
- **Current Icons**: 574 (3.68% coverage)
- **Missing Icons**: 15,022

The goal is to ensure all items have corresponding icon files in `public/assets/items/`. Each file should be named with its numeric item ID (e.g., `1017.png`, `10282.png`).

## Scripts

### 1. `maintain-item-icons.ps1`

Main maintenance script for checking and managing item icon files.

**Usage:**

```powershell
# Check status of item icons
./maintain-item-icons.ps1 -Action check

# Create placeholder PNG files for all missing items
./maintain-item-icons.ps1 -Action create-placeholders

# Generate detailed CSV report of all items and their status
./maintain-item-icons.ps1 -Action report -OutputReport missing_items.csv

# Sync functionality (currently shows TODO)
./maintain-item-icons.ps1 -Action sync
```

**Actions:**

- **check**: Reports current status and lists first 20 missing items
- **create-placeholders**: Creates 1x1 transparent PNG files as placeholders for all missing items
- **report**: Generates a CSV file with all items and their download status
- **sync**: Reserved for future external icon synchronization

**Parameters:**

- `-Action` (required): check, create-placeholders, report, or sync
- `-OutputReport` (optional): Output file path for CSV report (default: `missing_items.csv`)
- `-ProjectRoot` (optional): Project root directory (auto-detected if not specified)

### 2. `download-item-icons.ps1`

Attempts to download real item icons from external sources and creates placeholders for items that fail.

**Usage:**

```powershell
# Download all missing item icons
./download-item-icons.ps1

# Download specific items
./download-item-icons.ps1 -ItemIds 1017, 1063, 1083

# Force re-download and overwrite existing files
./download-item-icons.ps1 -ForceOverwrite

# With custom max retries
./download-item-icons.ps1 -MaxRetries 5
```

**Parameters:**

- `-ItemIds` (optional): Array of specific item IDs to download. If not specified, downloads all missing items
- `-ForceOverwrite` (optional): Overwrites existing files
- `-MaxRetries` (optional): Maximum download attempts per item (default: 3)
- `-ProjectRoot` (optional): Project root directory (auto-detected if not specified)

**Icon Sources (in order of preference):**

1. **OSRS Wiki / Lootscape CDN**: `https://lootscape-cdn.b-cdn.net/item-icons/{id}.png`
2. **RuneLite Wiki**: `https://raw.githubusercontent.com/runelite/runelite.net/master/public/img/items/{id}.png`

If all sources fail, a placeholder PNG is created instead.

## Workflow

### Step 1: Check Current Status

```powershell
./maintain-item-icons.ps1 -Action check
```

This shows:
- Total unique item IDs
- Existing icon files
- Missing icon files
- Coverage percentage

### Step 2: Create Placeholders (Optional)

If you want to create placeholder files first:

```powershell
./maintain-item-icons.ps1 -Action create-placeholders
```

This creates lightweight 1x1 transparent PNG files as placeholders.

### Step 3: Download Real Icons

```powershell
./download-item-icons.ps1
```

This attempts to download real icons from external sources and creates placeholders for any that fail to download.

### Step 4: Generate Report

```powershell
./maintain-item-icons.ps1 -Action report -OutputReport status.csv
```

Generates a CSV file with all items, names, and their current status (FOUND or MISSING).

## File Structure

```
osrs-tools/
├── public/assets/items/          # Icon files directory
│   ├── 1017.png
│   ├── 10282.png
│   ├── 3rd-age-range-top.png    # Named files (legacy/special items)
│   └── ...
├── scripts/
│   ├── maintain-item-icons.ps1   # Main maintenance script
│   ├── download-item-icons.ps1   # Download script
│   ├── ITEM_ICONS_README.md      # This file
│   └── download_log.txt          # Log from download runs
├── allitems.txt                  # Source of truth for item IDs/names
└── ...
```

## File Format

Each icon file must be a valid PNG image. Recommended specifications:

- **Format**: PNG with transparency
- **Size**: 32x32 pixels (standard for OSRS item icons)
- **Name**: Numeric item ID (e.g., `1017.png`)

## Maintenance Schedule

**Recommendations:**

1. **Weekly**: Run `maintain-item-icons.ps1 -Action check` to monitor coverage
2. **Monthly**: Run `download-item-icons.ps1 -ForceOverwrite` to refresh all icons
3. **Quarterly**: Run `maintain-item-icons.ps1 -Action report` to generate status report

## Troubleshooting

### Issue: "allitems.txt not found"

**Solution**: Ensure you're running the scripts from the `scripts/` directory or specify the `-ProjectRoot` parameter:

```powershell
./maintain-item-icons.ps1 -Action check -ProjectRoot "C:\path\to\osrs-tools"
```

### Issue: Download script times out

**Solution**: Increase the retry count:

```powershell
./download-item-icons.ps1 -MaxRetries 5
```

### Issue: Permission denied when creating files

**Solution**: Run PowerShell as Administrator or check write permissions on `public/assets/items/`

## Icon Source URLs

### Lootscape CDN (Recommended)
- Base URL: `https://lootscape-cdn.b-cdn.net/item-icons/`
- Format: `{base_url}{item_id}.png`
- Example: `https://lootscape-cdn.b-cdn.net/item-icons/1017.png`

### RuneLite Wiki
- Base URL: `https://raw.githubusercontent.com/runelite/runelite.net/master/public/img/items/`
- Format: `{base_url}{item_id}.png`
- Example: `https://raw.githubusercontent.com/runelite/runelite.net/master/public/img/items/1017.png`

### OSRS Official (if available)
- Requires authentication
- May have rate limiting

## Contributing

To add support for additional icon sources:

1. Edit `download-item-icons.ps1`
2. Add new source to the `$sources` array with the URL template
3. Test with a small subset: `./download-item-icons.ps1 -ItemIds 1017, 1063`

## Performance Notes

- **Checking**: ~5-10 seconds for 15,000+ items
- **Creating Placeholders**: ~30-60 seconds for 15,000+ items
- **Downloading**: 1-3 minutes per 1,000 items (depends on network speed and source availability)

## Future Enhancements

- [ ] Parallel downloads for faster execution
- [ ] Caching of failed downloads to avoid repeated attempts
- [ ] Integration with OSRS Wiki API for item metadata
- [ ] Automated verification of downloaded icons (size, format)
- [ ] Scheduled maintenance via Windows Task Scheduler
- [ ] Web dashboard to monitor icon coverage
- [ ] Batch mode for CI/CD integration

## Related Files

- `allitems.txt` - Source of truth for all item IDs
- `public/assets/items/` - Icon storage directory
- `.gitignore` - Should include placeholder PNG rules (optional)

## Support

For issues or questions:
1. Check the Troubleshooting section above
2. Review script logs in `scripts/download_log.txt`
3. Run with verbose output for debugging

---

Last Updated: 2026-06-01
