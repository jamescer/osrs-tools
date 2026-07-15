# OSRS Tools

[![NPM Version](https://img.shields.io/npm/v/osrs-tools.svg?style=flat-square)](https://www.npmjs.com/package/osrs-tools)
[![Downloads](https://img.shields.io/npm/dm/osrs-tools.svg?style=flat-square)](https://www.npmjs.com/package/osrs-tools)
[![CI](https://img.shields.io/github/actions/workflow/status/jamescer/osrs-tools/ci.yml?branch=master&style=flat-square&label=CI)](https://github.com/jamescer/osrs-tools/actions/workflows/ci.yml)
[![Test Coverage](https://img.shields.io/codecov/c/github/jamescer/osrs-tools.svg?style=flat-square)](https://codecov.io/gh/jamescer/osrs-tools)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](./license)

A fully-typed TypeScript library of Old School RuneScape game data and logic — quests, accounts, diaries, combat achievements, slayer, clues, items, and more.

Zero runtime dependencies, dual CJS/ESM output, tree-shakeable, Node ≥ 18.

## Install

```bash
npm install osrs-tools
```

## Quick Start

```typescript
import { QuestTool, OsrsAccount } from "osrs-tools";

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

console.log(questTool.canCompleteQuest(dragonSlayer));
```

Import from the root package or from a subpath to keep bundles small:

```typescript
import { Duradel, getMasterByName } from "osrs-tools/slayer";
import { DiaryTool, getDiaryByName } from "osrs-tools/diary";
import { CombatAchievementTool } from "osrs-tools/combat-achievements";
```

## What's included

| Module | Subpath | Highlights |
| --- | --- | --- |
| Quests | `osrs-tools/quest` | `QuestTool`, 189+ quests, requirement classes (level, quest, item, combat, location…) |
| Accounts | `osrs-tools/account` | `OsrsAccount` (hiscores-compatible), `Skill` enum, skill metadata |
| Diaries | `osrs-tools/diary` | 10 regional achievement diaries, `DiaryTool` for progress checks |
| Combat Achievements | `osrs-tools/combat-achievements` | All 637 tasks across six tiers, `CombatAchievementTool` |
| Slayer | `osrs-tools/slayer` | 9 masters, tasks, points, unlocks/extends/buys |
| Experience | `osrs-tools/tools` | XP ⇄ level conversion, full XP table |
| Validation | `osrs-tools/utils` | Skill/level validation, `ValidationError` |
| Clues, items, guilds, leagues | root `osrs-tools` import | `ClueScrollHelper`, `Item`, `HunterGuild`, league data |

For the full API surface and source layout, see [summary.md](./summary.md).

## Development

```bash
git clone https://github.com/jamescer/osrs-tools.git
cd osrs-tools
npm install
npm run build
npm test
```

| Command | Description |
| --- | --- |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm test` | Run the test suite |
| `npm run lint` | Lint and auto-fix with ESLint |
| `npm run format` | Format with Prettier |
| `npm run changeset` | Record a change for the next release |

See [dev_setup.md](./dev_setup.md) for the full setup and release workflow.

## Contributing

Contributions are welcome. We use [Conventional Commits](https://www.conventionalcommits.org/) and [changesets](https://github.com/changesets/changesets) for releases.

1. Fork and clone the repo, create a branch
2. Make your change and add tests
3. `npm test && npm run lint`
4. `npm run changeset` to record a changelog entry
5. Open a pull request

Please also review our [Code of Conduct](./code-of-conduct.md) and [Security Policy](./SECURITY.md).

## License

[MIT](./license) © [James Cerniglia](mailto:jamesmcerniglia@gmail.com)

Data sourced from the [Old School RuneScape Wiki](https://oldschool.runescape.wiki/).
