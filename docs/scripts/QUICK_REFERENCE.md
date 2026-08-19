# Item Icons Maintenance - Quick Reference

## Current Status
```
Total Items:    15,581
Existing:          574 (3.68%)
Missing:        15,022 (96.32%)
```

## Most Common Tasks

### 1. Check What's Missing
```powershell
cd scripts
./maintain-item-icons.ps1 -Action check -ProjectRoot ..
```
Shows: Total items, existing files, missing files, first 20 missing IDs

### 2. Create Placeholder Files
```powershell
cd scripts
./maintain-item-icons.ps1 -Action create-placeholders -ProjectRoot ..
```
Creates 1x1 transparent PNG files for all 15,022 missing items

### 3. Download Real Icons
```powershell
cd scripts
./download-item-icons.ps1 -ProjectRoot ..
```
Attempts to download from Lootscape CDN and RuneLite, creates placeholders if fails

### 4. Get Detailed Report
```powershell
cd scripts
./maintain-item-icons.ps1 -Action report -OutputReport missing_items.csv -ProjectRoot ..
```
Creates CSV with all items and their status (FOUND/MISSING)

## Script Parameters Explained

### maintain-item-icons.ps1
| Parameter | Options | Description |
|-----------|---------|-------------|
| `-Action` | check, create-placeholders, report, sync | What to do |
| `-OutputReport` | filename | CSV output file (default: missing_items.csv) |
| `-ProjectRoot` | path | Project directory (auto-detect if omitted) |

### download-item-icons.ps1
| Parameter | Type | Description |
|-----------|------|-------------|
| `-ItemIds` | int[] | Specific IDs to download (all missing if omitted) |
| `-ForceOverwrite` | switch | Overwrite existing files |
| `-MaxRetries` | int | Retry attempts per item (default: 3) |
| `-ProjectRoot` | path | Project directory (auto-detect if omitted) |

## Icon Download Sources

**Primary**: Lootscape CDN (https://lootscape-cdn.b-cdn.net/item-icons/)
**Fallback**: RuneLite Wiki (https://raw.githubusercontent.com/runelite/runelite.net/master/public/img/items/)

## File Naming Convention

Icon files MUST be named with their numeric item ID:
- ✅ Correct: `1017.png`, `10282.png`, `23345.png`
- ❌ Wrong: `item_1017.png`, `sword.png`, `1017_icon.png`

Special named files (legacy):
- `3rd-age-range-top.png` (interface item)
- `adamant-plateskirt-g.png` (variant)
- etc.

## File Location

```
osrs-tools/
└── public/assets/items/
    ├── 1017.png
    ├── 10282.png
    ├── 23345.png
    ├── 3rd-age-range-top.png
    └── ... (574 current, 15,022 missing)
```

## Recommended Workflow

1. **Initial Setup**
   ```powershell
   ./maintain-item-icons.ps1 -Action check -ProjectRoot ..
   ```

2. **Create Placeholders**
   ```powershell
   ./maintain-item-icons.ps1 -Action create-placeholders -ProjectRoot ..
   ```

3. **Download Real Icons**
   ```powershell
   ./download-item-icons.ps1 -ProjectRoot ..
   ```

4. **Verify Results**
   ```powershell
   ./maintain-item-icons.ps1 -Action check -ProjectRoot ..
   ```

5. **Generate Report**
   ```powershell
   ./maintain-item-icons.ps1 -Action report -ProjectRoot ..
   ```

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Script not found | Run from `scripts/` directory |
| Permission denied | Run PowerShell as Administrator |
| Timeout errors | Increase `-MaxRetries` in download script |
| Path issues | Use `-ProjectRoot` parameter explicitly |

## Performance

- **Check**: ~5-10 seconds
- **Create Placeholders**: ~30-60 seconds
- **Download (15k items)**: 1-3 minutes (network dependent)
- **Report Generation**: ~5-10 seconds

## Useful PowerShell Commands

### Count files by type
```powershell
Get-ChildItem public/assets/items -Filter "*.png" | Measure-Object
```

### Find items starting with specific ID
```powershell
Get-ChildItem public/assets/items -Filter "1017*.png"
```

### Delete all placeholder files (1x1 PNGs)
```powershell
# Warning: This is destructive!
Get-ChildItem public/assets/items -Filter "*.png" | Where-Object {
    (Get-Item $_.FullName).Length -lt 100
} | Remove-Item
```

## Contact & Documentation

- Full documentation: `ITEM_ICONS_README.md`
- Source file: `allitems.txt` (15,581 items)
- Generated report: `missing_items.csv`
