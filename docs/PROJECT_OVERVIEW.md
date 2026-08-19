# osrs-tools — Project Overview


# WIP


## What this is

**osrs-tools** is a published TypeScript npm library (`osrs-tools`, currently `v2.13.0`, MIT-licensed) that provides
data models, utilities, and tools for Old School RuneScape (OSRS) players and developers. It is a pure data/logic
library — zero runtime dependencies (only `tslib` for TS helper functions) — targeting Node ≥ 18, compiled to dual
CommonJS/ESM output via TypeScript, and tree-shakeable through subpath exports.

- **npm name:** `osrs-tools`
- **GitHub:** `https://github.com/jamescer/osrs-tools`
- **Entry point:** `dist/index.js` / `dist/index.d.ts` (built from `src/index.ts`)
- **Data sourced from:** the [Old School RuneScape Wiki](https://oldschool.runescape.wiki/)

This document is the extended reference for the codebase — module layout, key classes, and how the pieces fit
together. For contribution workflow see [DEVELOPMENT.md](./DEVELOPMENT.md); for established design patterns and
conventions see [CONVENTIONS.md](./CONVENTIONS.md).

---

## Package exports (subpath imports)

Consumers import from the root package or a subpath to keep bundles small. Each subpath maps to its own compiled
entry point in `dist/`:

| Import path | Contents |
|---|---|
| `osrs-tools` | Core re-exports: `QuestTool`, `OsrsAccount`, Diaries, `CombatAchievementTool`, `ClueScrollHelper`, Items, Leagues, Slayer, Guilds, Skills, eligibility evaluators, `Requirement` types |
| `osrs-tools/account` | `OsrsAccount`, `Skill` enum |
| `osrs-tools/quest` | All quest classes + `QuestTool`, `Quest`, `Requirements` |
| `osrs-tools/slayer` | All slayer master classes, `SlayerMaster`, `Task`, `Assignment`, rewards, unlocks |
| `osrs-tools/diary` | All achievement diary data (region-based) + `DiaryTool` |
| `osrs-tools/combat-achievements` | All 637 Combat Achievement tasks + `CombatAchievementTool`, reward tiers |
| `osrs-tools/eligibility` | `evaluateRequirement` / `evaluateRequirements` — shared requirement-checking logic |
| `osrs-tools/guilds` | Hunter Guild data + `HunterGuildMaster`, `HunterRumour` |
| `osrs-tools/items` | `Item` model, clue/quest item reference tables |
| `osrs-tools/leagues` | League area data (Demonic Pacts, Raging Echoes) |
| `osrs-tools/tools` | XP ⇄ level conversion, full XP table |
| `osrs-tools/utils` | Skill/level validation, `ValidationError` |

These map 1:1 to entries in `package.json`'s `exports` field — when adding a new subpath, register it there and in
`tsconfig.build.json` if a separate build root is needed.

---

## Source structure (`src/`)

```
src/
├── index.ts                          # Main barrel export
├── errors.ts / runescape/errors.ts   # Error types (ValidationError, etc.)
├── examples/
│   ├── ClueScrollExample.ts
│   └── ExampleQuest.ts
└── runescape/
    ├── model/
    │   ├── Requirement.ts             # Requirement type hierarchy (see below)
    │   ├── account/
    │   │   ├── OsrsAccount.ts         # Core account class (see below)
    │   │   ├── Skill.ts               # Skill enum + SKILL_METADATA (all 24 OSRS skills)
    │   │   └── skills/unlocks/
    │   │       └── AttackUnlocks.ts
    │   ├── clue/
    │   │   ├── ClueScrollHelper.ts    # Clue scroll utilities
    │   │   └── ClueScrollRewards.ts   # Item reward tables by tier
    │   ├── diaries/                   # Achievement diary data
    │   │   ├── index.ts
    │   │   ├── Diary.ts               # Diary/DiaryLevel/DiaryTask interfaces + getDiaryByName/getAllDiaries
    │   │   ├── DiaryTool.ts           # DiaryTool (see below)
    │   │   └── <region>/<Region>.ts   # ardougne, desert, fremennik, kandarin, karamja,
    │   │                              # kourend-kebos, lumbridge-draynor, morytania,
    │   │                              # varrock, wilderness (each with Easy/Medium/Hard/Elite)
    │   ├── combat-achievements/       # Combat Achievements data + tool
    │   │   ├── index.ts
    │   │   ├── CombatAchievement.ts   # CombatAchievementTier enum, Task/RewardTier interfaces
    │   │   ├── CombatAchievementTool.ts # CombatAchievementTool (see below)
    │   │   ├── RewardTiers.ts         # 6 reward tiers with point thresholds + reward text
    │   │   └── tasks/                 # Easy/Medium/Hard/Elite/Master/Grandmaster.ts
    │   │                              # (all 637 tasks, authored from the OSRS Wiki) + index.ts aggregator
    │   ├── eligibility/                # Shared requirement-evaluation logic (see below)
    │   │   ├── RequirementEvaluator.ts # evaluateRequirement / evaluateRequirements
    │   │   └── index.ts
    │   ├── guilds/
    │   │   └── hunter/                # HunterGuild, HunterGuildMaster, HunterRumour, RumourLocation
    │   ├── items/
    │   │   ├── Item.ts                # Item model
    │   │   ├── ClueRewards.ts         # Clue-specific reward items
    │   │   └── QuestItems.ts          # Quest item references
    │   ├── leagues/
    │   │   ├── DemonicPactsLeague/    # League area data
    │   │   ├── RagingEchoesLeague/    # League area data
    │   │   ├── model.ts               # Shared League/Pact interfaces
    │   │   └── general/               # League.ts, Pact.ts — general league types
    │   ├── npc/                       # NPC drop system models
    │   │   ├── Npc.ts / NpcDrop.ts / NpcProduct.ts
    │   │   ├── ComplexDropSystems.ts  # Multi-table / conditional drop logic
    │   │   └── npcs/                  # Individual NPC data files
    │   ├── quest/
    │   │   ├── Quest.ts               # Quest interface/class
    │   │   ├── QuestTool.ts           # Quest utility (see below)
    │   │   ├── Requirements.ts        # Quest requirement helpers
    │   │   ├── QuestList.ts           # Canonical list of all quest names
    │   │   ├── MiniQuestList.ts       # Mini-quest list
    │   │   └── all/                   # 189 individual quest files (one per quest)
    │   ├── skills/
    │   │   ├── Skill.ts               # (re-exported) skill enum/metadata surface
    │   │   ├── SkillBoosts.ts         # getMaxSkillBoost() — max temporary boost per skill
    │   │   ├── attack/                # Attack skill unlock data
    │   │   └── hunter/                # Hunter skill data
    │   └── slayer/
    │       ├── core/                  # SlayerMaster base class, Task, Assignment, SlayerLocation,
    │       │                          # SlayerBoss, Mortifier, MortimerSlayerMaster, eligibility.ts,
    │       │                          # POINTS_TABLE, TASK_DEFAULTS
    │       ├── masters/                # Turael, Spria, Mazchna, Vannaka, Chaeldar,
    │       │                           # KonarQuoMaten, Nieve, Duradel, Krystilia, Mortimer
    │       │                           # + registry.ts (getMasterByName, getAllMasters, etc.)
    │       ├── rewards/                # SlayerUnlock, SlayerExtend, SlayerBuy + lookup utils
    │       ├── task/                   # Per-master task list files (e.g. DuradelTasks.ts)
    │       └── tasks/                  # SLAYER_EXP_RATES, task weights, MonsterType enum,
    │                                   # TASK_QUANTITY_PRESETS (constants.ts) + index.ts
    ├── resources/                      # Raw/JSON-backed data feeding the model layer (diary, quest,
    │                                   # slayer task JSON, etc.)
    ├── tools/
    │   └── experience.ts               # XP calculation utilities
    └── utils/                          # Shared validation helpers
```

---

## Key classes & APIs

### `OsrsAccount` (`src/runescape/model/account/OsrsAccount.ts`)
The core account model. Holds player data compatible with the `osrs-json-hiscores` format.
- **Static factory:** `OsrsAccount.fromJson(json: OsrsAccountJson)` — maps hiscores JSON
- **Computed getters:** `combatLevel` (OSRS wiki formula), `totalLevel`, `totalXp`
- **Methods:** `getSkill(skill)`, `getBossScore(name)`, `getClueScore(type)`, `toJson()`
- Tracks: skills, questPoints, bosses, clues, bountyHunter, mini-game scores (LMS, PvP Arena, etc.), league/deadman
  points
- Uses private fields (`#field`) for encapsulation

### `Requirement` type hierarchy (`src/runescape/model/Requirement.ts`)
A base `Requirement` interface (`{ description, type }`) with one concrete class per `RequirementType`:

| Type | Class | Notes |
|---|---|---|
| `Level` | `LevelRequirement` | Skill + level; `boostable` auto-inferred from `SKILL_METADATA` unless explicit |
| `CombatLevel` | `CombatLevelRequirement` | |
| `SlayerLevel` | `SlayerLevelRequirement` | |
| `Quest` | `QuestRequirement` | Has `static fromQuestName()` |
| `QuestPoint` | `QuestPointRequirement` | |
| `Item` | `ItemRequirement` | Supports `consumed`, `alternatives`, `noted`, `bankable`, `notes` |
| `Location` | `LocationRequirement` | |
| `SlayerUnlock` | `SlayerUnlockRequirement` | |

Every class exposes a `description` getter used for display. This hierarchy is the shared vocabulary consumed by
quests, diaries, slayer tasks, and the eligibility module below.

### Eligibility module (`src/runescape/model/eligibility/`)
Shared logic for checking a `Requirement[]` list against an `OsrsAccount`, added to de-duplicate eligibility checks
that used to live separately in `QuestTool` and `SlayerMaster`.
- `evaluateRequirement(req, account)` → `RequirementCheck { requirement, label, met, verifiable, detail }`
- `evaluateRequirements(requirements, account)` → `EligibilityResult { eligible, checks, unmet, advisories }`
- Only `Level`, `CombatLevel`, and `SlayerLevel` are directly verifiable from hiscores data (`verifiable: true`).
  `Quest`, `QuestPoint`, `Item`, `Location`, and `SlayerUnlock` requirements can't be confirmed from hiscores alone,
  so they come back as **advisories** (`met: true, verifiable: false`) — callers with extra information (e.g.
  `QuestTool.evaluateEligibility`, which can recursively resolve quest prerequisites) override those specific checks
  afterward rather than trusting the advisory as-is.

### `QuestTool` (`src/runescape/model/quest/QuestTool.ts`)
- `QuestTool.getQuestByName(name)` — looks up any quest by name with fuzzy matching (Levenshtein distance ≤ 4)
- `QuestTool.getAllQuests()` / `getAllMiniQuests()`
- `instance.canCompleteQuest(quest)` — checks skill level requirements (with boost support) and recursive quest
  prerequisites against the bound `OsrsAccount`
- `instance.evaluateEligibility(quest)` — builds on the shared `eligibility` module, resolving quest-completion
  advisories using the account's actual completed-quest data instead of leaving them unverifiable
- `QuestTool.getMaxSkillBoost(skillName)` — returns max possible temporary boost per skill (delegates to
  `skills/SkillBoosts.ts`)
- Quest registry is lazily built from all 189 `all/*.ts` quest files on first call

### Slayer system (`src/runescape/model/slayer/`)
- Each master class (e.g. `Duradel`) extends `SlayerMaster` and defines task lists with weights/quantities, sourced
  from the matching file in `slayer/task/` (e.g. `DuradelTasks.ts`)
- `Assignment` represents an active assignment for an account
- `Mortifier` / `MortimerSlayerMaster` — the Mortimer/Wyrmscraig system (see doc comments in source: marked
  unreleased/WIP, values subject to change)
- `slayer/core/eligibility.ts` — `meetsRequirements(requirements, context)` checks a `SlayerAssignmentContext`
  (slayer level, combat level, skill levels, completed quests, unlocked rewards) against a task's requirement list;
  only requirement types that can gate assignment (`SlayerLevel`, `CombatLevel`, `Level`, `Quest`, `SlayerUnlock`) are
  enforced — everything else (e.g. items to bring) always passes
- `SlayerUnlock` / `SlayerExtend` / `SlayerBuy` — point-shop items with lookup helpers
- Helper functions in `masters/registry.ts`: `getMasterByName`, `getMastersByMinimumLevel`, `getMastersByProgression`,
  `getAllMasters`

### Achievement Diaries (`src/runescape/model/diaries/`)
- One file per region (in its own subfolder), each exporting task lists at Easy / Medium / Hard / Elite tiers
- `getDiaryByName(name)` / `getAllDiaries()` — lookup helpers exported from `Diary.ts`

### `DiaryTool` (`src/runescape/model/diaries/DiaryTool.ts`)
- `canCompleteTask(task)` / `canCompleteLevel(level)` — checks Level/Quest/CombatLevel/QuestPoint requirements
  against the bound `OsrsAccount` (Item/Location requirements can't be verified from account data and are treated as
  passing)
- `getCompletableTasks(source)` / `getRemainingTasks(source)` — accepts a full `Diary` or a single `DiaryLevel`
- `getDiaryProgress(diary)` — structured completable/remaining/total breakdown per tier

### Combat Achievements (`src/runescape/model/combat-achievements/`)
- All 637 tasks (Easy 41 / Medium 60 / Hard 85 / Elite 162 / Master 168 / Grandmaster 121), authored directly from
  the OSRS Wiki's live task table (id, name, monster, type, tier, points, description)
- `COMBAT_ACHIEVEMENT_REWARD_TIERS` — the 6 real cumulative point thresholds (41/161/416/1064/1904/2630) and their
  reward text
- `getCombatAchievementByName(name)` / `getCombatAchievementsByTier(tier)` / `getCombatAchievementsByMonster(monster)`

### `CombatAchievementTool` (`src/runescape/model/combat-achievements/CombatAchievementTool.ts`)
- `hasEngagedMonster(task)` — rough accessibility signal only: checks the bound `OsrsAccount`'s boss kill count for
  the task's monster (normalizing e.g. "The Royal Titans" → `royalTitans` to match `osrs-json-hiscores`' camelCase
  boss keys). Actual task completion isn't exposed via hiscores and can't be verified; ordinary slayer monsters (not
  hiscore-tracked bosses) always return `false`
- `getAccessibleTasks(tasks)` / `getInaccessibleTasks(tasks)` — filters by `hasEngagedMonster`
- `calculatePoints(completedTaskNames)` — sums points for a caller-supplied list of completed task names
  (case-insensitive)
- `getUnlockedRewardTiers(points)` / `getNextRewardTier(points)` — reward tier lookups by point total
- `getProgress(completedTaskNames)` — full per-tier completed/remaining/points breakdown plus unlocked/next reward
  tiers

### Skills (`src/runescape/model/skills/`)
- `Skill.ts` — the `Skill` enum and `SKILL_METADATA` (max level, boostability) that `LevelRequirement` reads from
- `SkillBoosts.ts` — `getMaxSkillBoost(skillName)`, deliberately kept independent of the quest module so lightweight
  consumers (e.g. Slayer eligibility) don't need to pull in the entire quest catalog just to check whether a level
  requirement is boostable

### NPC drops (`src/runescape/model/npc/`)
- `Npc`, `NpcDrop`, `NpcProduct` — base models for monster drop tables
- `ComplexDropSystems.ts` — multi-table / conditional drop logic (e.g. tiered or weighted drop systems that a flat
  drop table can't express)
- `npcs/` — individual NPC data files

### Guilds (`src/runescape/model/guilds/hunter/`)
- `HunterGuild`, `HunterGuildMaster`, `HunterGuildMasterName` — Hunter Guild structure and staff
- `HunterRumour`, `RumourLocation`, `Rumours` — Hunter Guild rumour system data

### Leagues (`src/runescape/model/leagues/`)
- `general/League.ts`, `general/Pact.ts` — shared league type definitions
- `DemonicPactsLeague/`, `RagingEchoesLeague/` — per-league area/region data
- `model.ts` — shared league model surface

### Clue scrolls (`src/runescape/model/clue/`)
- `ClueScrollHelper` — clue scroll utilities
- `ClueScrollRewards.ts` — item reward tables by clue tier

---

## Build & tooling

| Command | Purpose |
|---|---|
| `npm run build` | TypeScript compile (dev, includes tests) |
| `npm run build:npm` | Production build to `dist/` |
| `npm test` | Run Jest test suite |
| `npm run test:coverage` | Jest with coverage |
| `npm run lint` | ESLint with auto-fix |
| `npm run format` | Prettier format |
| `npm run changeset` | Record a changelog entry for the next release |
| `npm run publish-test` | Dry-run publish |

- **TypeScript 5.9**, strict mode, compiled to `dist/` (`tsconfig.json` for dev, `tsconfig.build.json` for the
  production/publish build)
- **Jest + ts-jest** for testing; test files in `test/unit/`
- **ESLint** with `@typescript-eslint`, `sort-keys-fix`, `simple-import-sort`, `prettier` integration
- Published files: `dist/` and `public/` (icons) — see `package.json`'s `files` field
- **changesets** manages `CHANGELOG.md` and version bumps — see [DEVELOPMENT.md](./DEVELOPMENT.md)

---

## Test coverage

Tests live in `test/unit/`, mirroring the source structure:
- `account/OsrsAccount.test.ts`
- `quest/` — QuestTool integration, getQuestByName, Quest validation, file validation,
  `QuestTool.evaluateEligibility.test.ts`
- `slayer/` — all masters + Assignment, Task, SlayerUnlock models, weighted random task selection,
  `MortimerSlayerMaster.test.ts`
- `diaries/DiaryTool.test.ts` — requirement checks, completable/remaining tasks, per-tier progress
- `combat-achievements/CombatAchievementTool.test.ts` — hasEngagedMonster (incl. boss-key normalization),
  accessible/inaccessible tasks, calculatePoints, reward tier unlocks, getProgress
- `eligibility/` — shared `RequirementEvaluator` tests
- `requirements/Requirement.test.ts`
- `clue/` — ClueScrollHelper and rewards
- `guilds/hunter/` — HunterGuild, HunterGuildMaster, HunterRumour
- `npc/` — Drop systems
- `tools/experience.test.ts`
- `test/resources/A_Squeezer_Main_Data.ts` — real account fixture used in integration tests

---

## Related docs

- [CONVENTIONS.md](./CONVENTIONS.md) — established design patterns to follow when extending this codebase
- [DEVELOPMENT.md](./DEVELOPMENT.md) — environment setup, build, and release workflow
- [scripts/ITEM_ICONS_README.md](./scripts/ITEM_ICONS_README.md) — item icon maintenance scripts
