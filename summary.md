# osrs-tools — Project Summary

## Overview

**osrs-tools** is a published TypeScript npm library (`v2.9.2`, MIT) that provides data models, utilities, and tools for Old School RuneScape (OSRS) players and developers. It is a pure data/logic library with no runtime dependencies (only `tslib`). Targets Node ≥ 18, compiled to CommonJS/ESM dual output via TypeScript.

- **npm name:** `osrs-tools`
- **GitHub:** `https://github.com/jamescer/osrs-tools`
- **Entry:** `dist/index.js` / `dist/index.d.ts`

---

## Package Exports (subpath imports)

| Import path | Contents |
|---|---|
| `osrs-tools` | Core re-exports: QuestTool, OsrsAccount, Diaries, CombatAchievementTool, ClueScrollHelper, Items, Leagues, Slayer, Guilds, Skills, Requirement types |
| `osrs-tools/account` | `OsrsAccount`, `Skill` enum |
| `osrs-tools/quest` | All quest classes + `QuestTool`, `Quest`, `Requirements` |
| `osrs-tools/slayer` | All slayer master classes, `SlayerMaster`, `Task`, `Assignment`, rewards, unlocks |
| `osrs-tools/diary` | All achievement diary data (region-based) + `DiaryTool` |
| `osrs-tools/combat-achievements` | All 637 Combat Achievement tasks + `CombatAchievementTool`, reward tiers |
| `osrs-tools/tools` | XP/experience utilities |
| `osrs-tools/utils` | Helper utilities |

---

## Source Structure (`src/`)

```
src/
├── index.ts                          # Main barrel export
├── errors.ts                         # Error types (ValidationError, etc.)
├── examples/
│   ├── ClueScrollExample.ts
│   └── ExampleQuest.ts
└── runescape/
    ├── model/
    │   ├── Requirement.ts            # LevelRequirement, QuestRequirement, RequirementType enum
    │   ├── account/
    │   │   ├── OsrsAccount.ts        # Core account class (see below)
    │   │   ├── Skill.ts              # Skill enum (all 24 OSRS skills)
    │   │   └── skills/unlocks/
    │   │       └── AttackUnlocks.ts
    │   ├── clue/
    │   │   ├── ClueScrollHelper.ts   # Clue scroll utilities
    │   │   └── ClueScrollRewards.ts  # Item reward tables by tier
    │   ├── diaries/                  # Achievement diary data
    │   │   ├── index.ts
    │   │   ├── Diary.ts              # Diary/DiaryLevel/DiaryTask interfaces + getDiaryByName/getAllDiaries
    │   │   ├── DiaryTool.ts           # DiaryTool (see below)
    │   │   └── <region>/<Region>.ts   # ardougne, desert, fremennik, kandarin, karamja,
    │   │                             # kourend-kebos, lumbridge-draynor, morytania,
    │   │                             # varrock, wilderness (each with Easy/Medium/Hard/Elite)
    │   ├── combat-achievements/       # Combat Achievements data + tool
    │   │   ├── index.ts
    │   │   ├── CombatAchievement.ts   # CombatAchievementTier enum, Task/RewardTier interfaces
    │   │   ├── CombatAchievementTool.ts # CombatAchievementTool (see below)
    │   │   ├── RewardTiers.ts         # 6 reward tiers with point thresholds + reward text
    │   │   └── tasks/                 # Easy/Medium/Hard/Elite/Master/Grandmaster.ts
    │   │                             # (all 637 tasks, authored from the OSRS Wiki) + index.ts aggregator
    │   ├── guilds/
    │   │   └── hunter/               # Hunter Guild data + HunterGuildMaster, HunterRumour
    │   ├── items/
    │   │   ├── Item.ts               # Item model
    │   │   ├── ClueRewards.ts        # Clue-specific reward items
    │   │   └── QuestItems.ts         # Quest item references
    │   ├── leagues/
    │   │   ├── DemonicPactsLeague/   # League area data
    │   │   ├── RagingEchoesLeague/   # League data
    │   │   ├── model.ts
    │   │   └── general/              # General league utilities
    │   ├── npc/                      # NPC drop system models
    │   ├── quest/
    │   │   ├── Quest.ts              # Quest interface/class
    │   │   ├── QuestTool.ts          # Quest utility (see below)
    │   │   ├── Requirements.ts       # Quest requirement helpers
    │   │   ├── QuestList.ts          # Canonical list of all quest names
    │   │   ├── MiniQuestList.ts      # Mini-quest list
    │   │   └── all/                  # ~150+ individual quest files (one per quest)
    │   ├── skills/
    │   │   ├── attack/               # Attack skill unlock data
    │   │   └── hunter/               # Hunter skill data
    │   └── slayer/
    │       ├── core/                 # SlayerMaster base class, Task, Assignment, SlayerLocation,
    │       │                         # SlayerBoss, POINTS_TABLE, TASK_DEFAULTS
    │       ├── masters/              # Turael, Spria, Mazchna, Vannaka, Chaeldar,
    │       │                         # KonarQuoMaten, Nieve, Duradel, Krystilia
    │       │                         # + getMasterByName, getAllMasters, etc.
    │       ├── rewards/              # SlayerUnlock, SlayerExtend, SlayerBuy + lookup utils
    │       └── tasks/                # SLAYER_EXP_RATES, task weights, MonsterType enum,
    │                                 # TASK_QUANTITY_PRESETS
    └── tools/
        └── experience.ts             # XP calculation utilities
```

---

## Key Classes & APIs

### `OsrsAccount` (`src/runescape/model/account/OsrsAccount.ts`)
The core account model. Holds player data compatible with `osrs-json-hiscores` format.
- **Static factory:** `OsrsAccount.fromJson(json: OsrsAccountJson)` — maps hiscores JSON
- **Computed getters:** `combatLevel` (formula from OSRS wiki), `totalLevel`, `totalXp`
- **Methods:** `getSkill(skill)`, `getBossScore(name)`, `getClueScore(type)`, `toJson()`
- Tracks: skills, questPoints, bosses, clues, bountyHunter, mini-game scores (LMS, PvP Arena, etc.), league/deadman points
- Uses private fields (`#field`) for encapsulation

### `QuestTool` (`src/runescape/model/quest/QuestTool.ts`)
- `QuestTool.getQuestByName(name)` — looks up any quest by name with fuzzy matching (Levenshtein distance ≤ 4)
- `QuestTool.getAllQuests()` / `getAllMiniQuests()`
- `instance.canCompleteQuest(quest)` — checks skill level requirements (with boost support) and recursive quest prerequisites against the bound `OsrsAccount`
- `QuestTool.getMaxSkillBoost(skillName)` — returns max possible temporary boost per skill
- Quest registry is lazily built from all `all/*.ts` quest files on first call

### `Requirement` types (`src/runescape/model/Requirement.ts`)
- `RequirementType` enum: `Level`, `Quest`
- `LevelRequirement` — `{ skillName, level, boostable? }`
- `QuestRequirement` — `{ questName }`

### Slayer System
- Each master class (e.g., `Duradel`) extends `SlayerMaster` and defines task lists with weights/quantities
- `Assignment` represents an active assignment for an account
- `SlayerUnlock` / `SlayerExtend` / `SlayerBuy` — point-shop items with lookup helpers
- Helper functions: `getMasterByName`, `getMastersByMinimumLevel`, `getMastersByProgression`

### Achievement Diaries (`src/runescape/model/diaries/`)
- One file per region (in its own subfolder), each exporting task lists at Easy / Medium / Hard / Elite tiers
- `getDiaryByName(name)` / `getAllDiaries()` — lookup helpers exported from `Diary.ts`

### `DiaryTool` (`src/runescape/model/diaries/DiaryTool.ts`)
- `canCompleteTask(task)` / `canCompleteLevel(level)` — checks Level/Quest/CombatLevel/QuestPoint requirements against the bound `OsrsAccount` (Item/Location requirements can't be verified from account data and are treated as passing)
- `getCompletableTasks(source)` / `getRemainingTasks(source)` — accepts a full `Diary` or a single `DiaryLevel`
- `getDiaryProgress(diary)` — structured completable/remaining/total breakdown per tier

### Combat Achievements (`src/runescape/model/combat-achievements/`)
- All 637 tasks (Easy 41 / Medium 60 / Hard 85 / Elite 162 / Master 168 / Grandmaster 121), authored directly from the OSRS Wiki's live task table (id, name, monster, type, tier, points, description)
- `COMBAT_ACHIEVEMENT_REWARD_TIERS` — the 6 real cumulative point thresholds (41/161/416/1064/1904/2630) and their reward text
- `getCombatAchievementByName(name)` / `getCombatAchievementsByTier(tier)` / `getCombatAchievementsByMonster(monster)`

### `CombatAchievementTool` (`src/runescape/model/combat-achievements/CombatAchievementTool.ts`)
- `hasEngagedMonster(task)` — rough accessibility signal only: checks the bound `OsrsAccount`'s boss kill count for the task's monster (normalizing e.g. "The Royal Titans" → `royalTitans` to match `osrs-json-hiscores`' camelCase boss keys). Actual task completion isn't exposed via hiscores and can't be verified; ordinary slayer monsters (not hiscore-tracked bosses) always return `false`
- `getAccessibleTasks(tasks)` / `getInaccessibleTasks(tasks)` — filters by `hasEngagedMonster`
- `calculatePoints(completedTaskNames)` — sums points for a caller-supplied list of completed task names (case-insensitive)
- `getUnlockedRewardTiers(points)` / `getNextRewardTier(points)` — reward tier lookups by point total
- `getProgress(completedTaskNames)` — full per-tier completed/remaining/points breakdown plus unlocked/next reward tiers

---

## Build & Tooling

| Command | Purpose |
|---|---|
| `npm run build` | TypeScript compile (dev, includes tests) |
| `npm run build:npm` | Production build to `dist/` |
| `npm test` | Run Jest test suite |
| `npm run test:coverage` | Jest with coverage |
| `npm run lint` | ESLint with auto-fix |
| `npm run format` | Prettier format |
| `npm run publish-test` | Dry-run publish |

- **TypeScript 5.9**, strict mode, compiled to `dist/`
- **Jest + ts-jest** for testing; test files in `test/unit/`
- **ESLint** with `@typescript-eslint`, `sort-keys-fix`, `simple-import-sort`, `prettier` integration
- Published files: `dist/` and `public/` (icons)

---

## Test Coverage

Tests live in `test/unit/` mirroring the source structure:
- `account/OsrsAccount.test.ts`
- `quest/` — QuestTool integration, getQuestByName, Quest validation, file validation
- `slayer/` — All 9 masters + Assignment, Task, SlayerUnlock models
- `diaries/DiaryTool.test.ts` — requirement checks, completable/remaining tasks, per-tier progress
- `combat-achievements/CombatAchievementTool.test.ts` — hasEngagedMonster (incl. boss-key normalization), accessible/inaccessible tasks, calculatePoints, reward tier unlocks, getProgress
- `clue/` — ClueScrollHelper and rewards
- `guilds/hunter/` — HunterGuild, HunterGuildMaster, HunterRumour
- `npc/` — Drop systems
- `tools/experience.test.ts`
- `test/resources/A_Squeezer_Main_Data.ts` — Real account fixture used in integration tests

---

## Patterns & Conventions

- Each individual quest is its own file in `src/runescape/model/quest/all/` exporting a single default object
- Diary regions follow the same pattern: each region in its own subdirectory
- Slayer masters each have their own file with task definitions inline
- `index.ts` barrel files at each module boundary aggregate and re-export
- TypeScript private class fields (`#`) used on `OsrsAccount` for encapsulation
- Compatible with `osrs-json-hiscores` npm package for fetching live account data
