# OSRS Tools

[![NPM Version](https://img.shields.io/npm/v/osrs-tools.svg?style=for-the-badge)](https://www.npmjs.com/package/osrs-tools)
[![Downloads](https://img.shields.io/npm/dm/osrs-tools.svg?style=for-the-badge)](https://www.npmjs.com/package/osrs-tools)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg?style=for-the-badge)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Node Version](https://img.shields.io/node/v/osrs-tools.svg?style=for-the-badge)](https://nodejs.org)
[![Test Coverage](https://img.shields.io/codecov/c/github/jamescer/osrs-tools.svg?style=for-the-badge)](https://codecov.io/gh/jamescer/osrs-tools)

> A comprehensive TypeScript library for Old School RuneScape (OSRS) data, tools, and game modeling.

**Type-safe** &nbsp; **Well-tested** &nbsp; **Game-aware** &nbsp; **Actively maintained**

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Development](#development)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

## Overview

`osrs-tools` gives OSRS developers a fully-typed model of the game, covering:

- full quest and requirement system with 189+ quests and miniquests
- account data modeling for skills, bosses, clues, and progression
- achievement diary lookups for all 10 regions
- clue scroll reward simulation with wiki-accurate odds
- item data model with combat stats and clue/quest item registries
- slayer masters, tasks, reward unlocks/extends/buys, and point tables
- hunter guild, rumours, and master progression
- skill metadata, experience tables, and combat helpers
- league support (Demonic Pacts, Raging Echoes)
- custom `ValidationError` for consistent error handling

This library is built for analytics, web apps, and toolchains that need OSRS game logic and data. 
## Installation

### Prerequisites

- Node.js 18.x or higher
- TypeScript 5.x

### Install

```bash
npm install osrs-tools
```

## Features

- Quest system with all OSRS quests and recursive requirement checking
- `OsrsAccount` skill, score, and combat level lookups
- Achievement diaries with full task and requirement breakdowns
- Clue scroll casket simulation with tier-specific tables and mimic handling
- Item model with combat stats, alch values, and quest/clue item flags
- Slayer masters (Turael through Krystilia), task weights, point tables, reward utilities
- Hunter guild rumours, masters, and locations
- League modules for Demonic Pacts and Raging Echoes
- Skill metadata helpers (24 skills including Sailing) and experience tables
- Requirement classes covering levels, quests, items, combat, location, and more
- `ValidationError` for uniform error handling across the library

## Usage

### Core Import

```typescript
import {
  QuestTool,
  OsrsAccount,
  ClueScrollHelper,
  Item,
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
const dragonSlayer = QuestTool.getQuestByName("Dragon Slayer I");
const canComplete = questTool.canCompleteQuest(dragonSlayer);

console.log("Requirements:", dragonSlayer?.requirements);
console.log("Can complete?", canComplete);
```

### Subpath Imports

```typescript
import { QuestTool, DragonSlayerI } from "osrs-tools/quest";
import { Duradel, getMasterByName } from "osrs-tools/slayer";
import { OsrsAccount, Skill } from "osrs-tools/account";
import diaries, { getDiaryByName, getAllDiaries } from "osrs-tools/diary";
import { getExperienceForLevel, getLevelForExperience } from "osrs-tools/tools";
import { validateSkillLevel, getSkillsByCategory } from "osrs-tools/utils";
```

## API Reference

### Quest System (`osrs-tools/quest`)

- `QuestTool` — account-based quest completion checks and quest registry
- `QuestTool.getQuestByName(name)` — look up a quest by name
- `QuestList`, `MiniQuestList` — full quest and miniquest registries
- `QuestDifficulty`, `QuestLength`, `QuestStatus` — enums for quest metadata
- 189+ individual quest classes (e.g., `DragonSlayerI`, `AKingdomDivided`)
- Requirement classes:
  - `LevelRequirement` — skill level with optional boost support
  - `SlayerLevelRequirement` — slayer-specific level checks
  - `CombatLevelRequirement` — combat level gate
  - `QuestRequirement` — quest completion dependency
  - `ItemRequirement` — item with quantity, consumption, alternatives, and bankable flags
  - `LocationRequirement` — geographic access requirement
  - `QuestPointRequirement` — quest point gate
  - `SlayerUnlockRequirement` — slayer unlock dependency

### Account Modeling (`osrs-tools/account`)

- `OsrsAccount.fromJson(json)` — parse an account from hiscores-style JSON
- Skill access via `Skill` enum (24 skills: Attack, Defence, Strength, Hitpoints, Ranged, Prayer, Magic, Woodcutting, Fishing, Firemaking, Crafting, Smithing, Mining, Herblore, Agility, Thieving, Slayer, Farming, Runecraft, Hunter, Construction, Cooking, Fletching, Sailing)
- `SKILL_METADATA` — per-skill metadata including category, maxLevel, and isBoostable

### Achievement Diaries (`osrs-tools/diary`)

- `diaries` default export — all diaries
- `getDiaryByName(name)` — look up a diary by region name
- `getAllDiaries()` — array of all 10 regional diaries
- Regions: Ardougne, Desert, Fremennik, Kandarin, Karamja, Kourend & Kebos, Lumbridge & Draynor, Morytania, Varrock, Wilderness
- Each diary includes Easy/Medium/Hard/Elite tasks with full requirement breakdowns

### Clue Scroll Simulation

Available from the main `osrs-tools` import:

```typescript
import { ClueScrollHelper } from "osrs-tools";

const result = ClueScrollHelper.openCasket("hard");
console.log(result.items, result.mimicTriggered);
```

- `ClueScrollHelper.openCasket(tier)` — simulate a casket opening with wiki-accurate odds
- Tiers: `beginner`, `easy`, `medium`, `hard`, `elite`, `master`
- `CasketReward` interface: `{ items, count, masterClue, mimicTriggered, mimicGuaranteed, mimicBonusItem }`

### Items

Available from the main `osrs-tools` import:

- `Item` — item data model with combat stats (attack/defence stab/slash/crush/magic/ranged, melee/ranged/magic bonuses, prayer), alch values, weight, tradeable/equipable/stackable flags
- `ClueRewards` — item registries for clue scroll reward tables
- `QuestItems` — item registry for quest-related items

### Slayer System (`osrs-tools/slayer`)

#### Masters

| Class | `getMasterByName` key |
| --- | --- |
| `Turael` | `"Turael"` |
| `Spria` | `"Spria"` |
| `Mazchna` | `"Mazchna"` |
| `Vannaka` | `"Vannaka"` |
| `Chaeldar` | `"Chaeldar"` |
| `KonarQuoMaten` | `"Konar quo Maten"` |
| `Nieve` | `"Nieve"` |
| `Duradel` | `"Duradel"` |
| `Krystilia` | `"Krystilia"` |

#### Registry Utilities

- `getMasterByName(name)` — look up a master by name
- `getAllMasters()` — all slayer masters
- `getMastersByMinimumLevel(level)` — masters accessible at a given combat level
- `getMastersByProgression()` — masters ordered by progression
- `getRandomMasterForLevel(level)` — random master appropriate for a level

#### Rewards

- `SlayerUnlock`, `SlayerExtend`, `SlayerBuy` — reward classes
- `SLAYER_UNLOCKS`, `SLAYER_EXTENDS`, `SLAYER_BUYS` — full data sets
- `getUnlockByName`, `getUnlocksByCostRange`, `calculateUnlocksCost`
- `getExtendByName`, `getExtendsForTask`
- `getBuyByItem`, `getBuysByCostRange`, `getBuysByRequirement`, `calculateBuysCost`

#### Data & Constants

- `POINTS_TABLE` — point rewards per master and streak
- `SLAYER_EXP_RATES`, `STANDARD_TASK_WEIGHTS`, `TASK_QUANTITY_PRESETS`, `EXTENDED_QUANTITY_PRESETS`
- `SlayerLocation`, `SlayerBoss`, `MonsterType` enums

### Experience Tools (`osrs-tools/tools`)

- `getExperienceForLevel(level: number): number` — XP required to reach a level
- `getLevelForExperience(xp: number): number` — level at a given XP total
- `LEVEL_TO_EXPERIENCE: Record<number, number>` — full XP table (levels 1–99)

### Guilds

Available from the main `osrs-tools` import:

#### Hunter Guild

- `HunterGuild` — guild class
- `HunterGuildMaster` — master NPC with progression data
- `HunterGuildMasterName` — enum of master names
- `HunterRumour` — rumour entry with location and loot
- `Rumours` — full rumour registry
- `RumourLocation` — location data for rumours

### Leagues

Available from the main `osrs-tools` import:

- `League` interface — relics, reward tiers, and relic tiers
- `Relic` — selectable relic with passive bonuses
- `RelicTier` — tier with XP/drop multipliers
- `RewardTier` — milestone reward unlock
- `DemonicPactsLeagueAreas` — area data for Demonic Pacts
- `RagingEchoesLeague` — region and relic data for Raging Echoes
- `LeagueRegion`, `NotableDrop`, `GenericLeagueRegion` enums

### Validation & Skill Utilities (`osrs-tools/utils`)

- `validateSkillLevel(level: number, skillName: string): void` — throws `ValidationError` for invalid levels
- `validateQuestPoints(points: number): void` — throws `ValidationError` for invalid point totals
- `getSkillMetadata(skill: Skill | string): SkillMetadata | undefined`
- `isValidSkill(skillName: string): boolean`
- `isValidLevel(skill: Skill | string, level: number): boolean`
- `getSkillsByCategory(category: "combat" | "gathering" | "production" | "support"): Skill[]`

### Error Handling

- `ValidationError` — extends `Error` with `fieldName: string`, `value: unknown`, and optional `context: Record<string, unknown>`

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

| Command                 | Description                           |
| ----------------------- | ------------------------------------- |
| `build`                 | Compile TypeScript to `dist/`         |
| `build:npm`             | Build with publish tsconfig           |
| `clean`                 | Remove `dist/` output directory       |
| `dev`                   | Watch mode compilation                |
| `test`                  | Run test suite                        |
| `test:watch`            | Run tests in watch mode               |
| `test:coverage`         | Generate coverage report              |
| `coverage`              | Run coverage and upload to Codecov    |
| `format`                | Format source and tests with Prettier |
| `lint`                  | Lint and auto-fix with ESLint         |
| `publish-test`          | Dry-run `npm publish`                 |

### Project Structure

```text
src/
├── index.ts                          # Main entry point
└── runescape/
    ├── errors.ts                     # ValidationError
    ├── model/
    │   ├── Requirement.ts            # All requirement classes and RequirementType enum
    │   ├── account/                  # OsrsAccount, Skill enum, SKILL_METADATA
    │   │   └── skills/unlocks/       # AttackUnlocks, SkillUnlock
    │   ├── clue/                     # ClueScrollHelper, ClueScrollRewards
    │   ├── diaries/                  # 10 regional diary modules
    │   ├── guilds/
    │   │   └── hunter/               # HunterGuild, HunterGuildMaster, Rumours, RumourLocation
    │   ├── items/                    # Item, ClueRewards, QuestItems
    │   ├── leagues/                  # DemonicPactsLeague, RagingEchoesLeague, League interfaces
    │   ├── quest/
    │   │   ├── QuestTool.ts
    │   │   ├── QuestList.ts
    │   │   ├── MiniQuestList.ts
    │   │   └── all/                  # 189+ individual quest classes
    │   ├── skills/                   # Skill interface, attack and hunter skill modules
    │   └── slayer/
    │       ├── core/                 # SlayerMaster, Task, Assignment
    │       ├── masters/              # 9 master classes + registry
    │       ├── rewards/              # SlayerUnlock, SlayerExtend, SlayerBuy + data
    │       └── tasks/                # Task constants and weights
    ├── tools/
    │   └── experience.ts             # getExperienceForLevel, getLevelForExperience, LEVEL_TO_EXPERIENCE
    └── utils/
        ├── validation.ts             # validateSkillLevel, validateQuestPoints
        └── skillUtils.ts             # getSkillMetadata, isValidSkill, getSkillsByCategory, isValidLevel

test/
└── unit/
    ├── account/
    ├── diaries/
    ├── quest/
    ├── slayer/
    ├── model/
    ├── tools/
    └── utils/

dist/                                 # Compiled output (generated by build)
```

## Contributing

We welcome contributions! We use [Conventional Commits](https://www.conventionalcommits.org/).

### Getting Started

1. Fork and clone the repository
2. Create a branch (`feat/amazing-feature`)
3. Make your changes and add tests
4. Run `npm test && npm run lint`
5. Commit with conventional format:

   ```text
   feat: add quest requirement validation
   fix: correct slayer task weights
   docs: update API documentation
   ```

6. Push and open a Pull Request

### Guidelines

- Add tests for new features
- Update documentation for public API changes
- Follow existing code style
- Keep changes focused

## Support

- [Report Issues](https://github.com/jamescer/osrs-tools/issues)
- [Request Features](https://github.com/jamescer/osrs-tools/issues)
- [Discussions](https://github.com/jamescer/osrs-tools/discussions)

## License

[MIT](./LICENSE) © James Cerniglia

## Credits

- **Author**: [James Cerniglia](mailto:jamesmcerniglia@gmail.com)
- **Contributors**: [View all contributors](https://github.com/jamescer/osrs-tools/graphs/contributors)
- **Data Source**: [Old School RuneScape Wiki](https://oldschool.runescape.wiki/)
