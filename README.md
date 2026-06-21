# OSRS Tools

[![NPM Version](https://img.shields.io/npm/v/osrs-tools.svg?style=for-the-badge)](https://www.npmjs.com/package/osrs-tools)
[![Downloads](https://img.shields.io/npm/dm/osrs-tools.svg?style=for-the-badge)](https://www.npmjs.com/package/osrs-tools)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-blue.svg?style=for-the-badge)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Node Version](https://img.shields.io/node/v/osrs-tools.svg?style=for-the-badge)](https://nodejs.org)
[![Test Coverage](https://img.shields.io/codecov/c/github/jamescer/osrs-tools.svg?style=for-the-badge)](https://codecov.io/gh/jamescer/osrs-tools)

> A comprehensive TypeScript library for Old School RuneScape (OSRS) data, tools, and game modeling.

📦 **Type-safe** &nbsp; 🚀 **Well-tested** &nbsp; 📚 **Game-aware** &nbsp; 🔄 **Actively maintained**

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [API Highlights](#api-highlights)
- [Development](#development)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

## Overview

`osrs-tools` provides OSRS developers with:

- a full quest and requirement system
- account data modeling for skills, bosses, clues, and progression
- achievement diary lookups
- clue scroll reward simulation
- item model asset references
- slayer master, task, and reward utilities
- guild and league support
- skill metadata helpers and validation utilities
- custom validation error handling

This library is built for analytics, web apps, and toolchains that need OSRS game logic and data. 
## Installation

### Prerequisites

- Node.js 16.x or higher
- TypeScript 4.9+

### Install

```bash
npm install osrs-tools
```

For account-related features using external hiscore JSON:

```bash
npm install osrs-json-hiscores
```

## Features

- Quest system with all OSRS quests and recursive requirement checking
- `OsrsAccount` parsing from JSON and skill / score lookups
- Achievement diaries and diary requirement inspection
- Clue Scroll reward table simulation with mimic and master clue handling
- Item modeling and 3D asset path exports
- Slayer masters, tasks, unlocks, extends, buys, and reward calculators
- Guild/hunter utilities for hunter progression
- League modules such as `DemonicPactsLeague` and `RagingEchoesLeague`
- Skill metadata utilities, combat-level helpers, and validation functions
- Custom `ValidationError` for consistent error handling

## Usage

### Core Import Example

```typescript
import {
  QuestTool,
  OsrsAccount,
  ClueScrollHelper,
  Item,
  yellowPartyhatModelPath,
  ValidationError,
} from "osrs-tools";

const account = OsrsAccount.fromJson({
  name: "Player123",
  skills: {
    attack: { level: 60 },
    strength: { level: 55 },
    defence: { level: 50 },
  },
});

const questTool = new QuestTool(account);
const dragonSlayer = QuestTool.getQuestByName("Dragon Slayer");
const canComplete = questTool.canCompleteQuest(dragonSlayer);

console.log("Dragon Slayer requirements", dragonSlayer?.requirements);
console.log("Can complete?", canComplete);
console.log("Model path:", yellowPartyhatModelPath);
```

### Subpackage Imports

```typescript
import { QuestTool, DragonSlayerI } from "osrs-tools/quest";
import { Duradel, getMasterByName } from "osrs-tools/slayer";
import { OsrsAccount } from "osrs-tools/account";
import diaries, { getDiaryByName, getAllDiaries } from "osrs-tools/diary";
import { ClueScrollHelper } from "osrs-tools/tools";
import { validateSkillLevel, getSkillMetadata } from "osrs-tools/utils";
import { yellowPartyhatModelPath } from "osrs-tools/models/yellowPartyhat";
```

## API Highlights

### Quest System

- `QuestTool` for account-based quest completion checks
- `getQuestByName(name)` to look up quest data
- `QuestList`, `MiniQuestList`, and full quest registry
- requirement types including level and quest dependencies

### Account Modeling

- `OsrsAccount.fromJson(json)` loads account and hiscores-style data
- access skills, skill details, combat level, and quest points
- boss score, clue score, bounty hunter, league points, and deadman points lookup

### Achievement Diaries

- `diaries` default export for all diaries
- `getDiaryByName(name)` to locate a diary
- `getAllDiaries()` for listing all diaries

### Clue Scroll Simulation

- `ClueScrollHelper.openCasket(tier)` simulates casket rewards
- tier-specific reward tables for beginner through master clues
- mimic roll and master clue handling
- item canonicalization and quantity resolution

### Item Models

- `Item` data model and item asset helpers
- `yellowPartyhatModelPath` and `getItemModelPath("yellowPartyhat")`
- `osrs-tools/models/*` export path for shipped assets

### Slayer System

- core classes: `SlayerMaster`, `Task`, `Assignment`
- named masters such as `Turael`, `Spria`, `Mazchna`, `Vannaka`, `Chaeldar`, `KonarQuoMaten`, `Nieve`, `Duradel`, `Krystilia`
- utility helpers: `getMasterByName`, `getAllMasters`, `getMastersByMinimumLevel`, `getMastersByProgression`, `getRandomMasterForLevel`
- reward utilities: `SlayerUnlock`, `SlayerExtend`, `SlayerBuy`, and cost calculators
- task weights, experience tables, and quantity presets

### Guilds

- hunter guild exports and guild-specific helpers
- hunter progression modeling and requirement support

### Leagues

- league-specific exports for OSRS limited-time modes
- `DemonicPactsLeagueAreas`, `RagingEchoesLeague`, and league model data

### Skills & Validation

- skill metadata helpers: `getSkillMetadata`, `getAllSkills`, `getCombatSkills`
- validation helpers: `validateSkillLevel`, `validateQuestPoints`, `validateCombatLevel`, `validateAccountName`
- `ValidationError` thrown for invalid data

## Development

### Local Setup

```bash
git clone https://github.com/jamescer/osrs-tools.git
cd osrs-tools
npm install
npm run build
npm test
```

### Available Scripts

| Command         | Description                 |
| --------------- | --------------------------- |
| `build`         | Compile TypeScript to dist/ |
| `dev`           | Watch mode compilation      |
| `test`          | Run test suite              |
| `test:watch`    | Run tests in watch mode     |
| `test:coverage` | Generate coverage report    |
| `lint`          | Lint and fix code           |
| `format`        | Format code with Prettier   |

### Project Structure

```
source/                          # TypeScript source code
├── index.ts                      # Main entry point
├── runescape/
│   ├── model/
│   │   ├── account/             # Player account & skills
│   │   ├── diaries/             # Achievement diaries
│   │   ├── quest/               # Quest system
│   │   │   ├── all/             # Individual quest classes
│   │   │   └── index.ts         # Quest module export
│   │   ├── slayer/              # Slayer system
│   │   ├── Item/                # Item models
│   │   └── npc/                 # NPC data
│   ├── tools/                   # Utility tools (ClueScrollHelper, experience calc, etc.)
│   ├── utils/                   # Helper utilities (validation, skill helpers)
│   └── errors.ts                # Custom error types
└── examples/                    # Usage examples

test/                            # Jest test suite
└── unit/
    ├── account/
    ├── diaries/
    ├── quest/
    ├── slayer/
    ├── model/
    ├── tools/
    └── utils/

dist/                            # Compiled output (generated by build)
```

## Contributing

We welcome contributions! We use [Conventional Commits](https://www.conventionalcommits.org/).

### Getting Started

1. Fork and clone the repository
2. Create a branch (`feat/amazing-feature`)
3. Make your changes
4. Run tests (`npm test && npm run lint`)
5. Commit with conventional format:

   ```bash
   feat: add quest requirement validation
   fix: correct slayer task weights
   docs: update API documentation
   ```

6. Push and open a Pull Request

### Guidelines

- Add tests for new features
- Update documentation for changes
- Follow existing code style
- Keep changes focused

## Support

Need help or want to contribute?

- [Report Issues](https://github.com/jamescer/osrs-tools/issues)
- [Request Features](https://github.com/jamescer/osrs-tools/issues)
- [Join Discussions](https://github.com/jamescer/osrs-tools/discussions)

## License

[MIT](./LICENSE) © James Cerniglia

## Credits

- **Author**: [James Cerniglia](mailto:jamesmcerniglia@gmail.com)
- **Contributors**: [View all contributors](https://github.com/jamescer/osrs-tools/graphs/contributors)
- **Data Source**: [Old School RuneScape Wiki](https://oldschool.runescape.wiki/)
