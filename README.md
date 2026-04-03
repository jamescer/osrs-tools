

Refer to modern Node Packages. Update the Package.json to ONLY need the modern dependencies, reduce packages as much as possible.





# OSRS Tools

[![NPM Version](https://img.shields.io/npm/v/osrs-tools.svg?style=for-the-badge)](https://www.npmjs.com/package/osrs-tools)
[![Downloads](https://img.shields.io/npm/dm/osrs-tools.svg?style=for-the-badge)](https://www.npmjs.com/package/osrs-tools)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-blue.svg?style=for-the-badge)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Node Version](https://img.shields.io/node/v/osrs-tools.svg?style=for-the-badge)](https://nodejs.org)
[![Test Coverage](https://img.shields.io/codecov/c/github/jamescer/osrs-tools.svg?style=for-the-badge)](https://codecov.io/gh/jamescer/osrs-tools)

> A modern TypeScript library for Old School RuneScape (OSRS) data and utilities. Built for developers creating tools, bots, web applications, and analytics around OSRS content.

📦 **Type-safe** &nbsp; 🚀 **Well-tested** &nbsp; 📚 **Documented** &nbsp; 🔄 **Actively maintained**

## Live Demo

Explore the project interactively on CodeSandbox:

[![Edit on CodeSandbox](https://img.shields.io/badge/CodeSandbox-View-blue?logo=codesandbox&style=for-the-badge)](https://codesandbox.io/p/sandbox/xtgp9k)

---

## Table of Contents

- [Installation](#installation)
- [Examples](#examples)
- [Development](#development)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

## Installation

### Prerequisites

- Node.js 16.x or higher
- TypeScript 4.9+

### Package Installation

```bash
npm install osrs-tools
```

For account-related features (hiscores, stats):

```bash
npm install osrs-json-hiscores
```

## Examples

### Core Imports (Recommended)

The main `osrs-tools` export provides the most frequently used classes:

```typescript
import { 
  QuestTool, 
  OsrsAccount, 
  ClueScrollHelper,
  Item 
} from 'osrs-tools';

// Use core API directly
const questTool = new QuestTool();
const account = OsrsAccount.fromJson({ name: 'Player123' });
```

### Subpackage Imports (Tree-Shakeable)

Import from subpackages for more granular control and better tree-shaking:

```typescript
// Quest module - access all quests and quest utilities
import { QuestTool, DragonSlayerI } from 'osrs-tools/quest';

// Slayer module - slayer masters and utilities
import { Duradel, SlayerMaster } from 'osrs-tools/slayer';

// Account & skills
import { OsrsAccount, Skill } from 'osrs-tools/account';

// Achievement diaries
import { Ardougne, DiaryName } from 'osrs-tools/diary';

// Tools & utilities
import { ClueScrollHelper, experience } from 'osrs-tools/tools';
import { cache, validation } from 'osrs-tools/utils';
```

### Quest System

```typescript
// Access a specific quest
import { DragonSlayerI } from 'osrs-tools/quest';

// Or get by name from QuestTool
import { QuestTool } from 'osrs-tools';
const dragonSlayer = QuestTool.getQuestByName('Dragon Slayer');
console.log(dragonSlayer.requirements);

// Check quest completion requirements
const questTool = new QuestTool();
questTool.setOsrsAccount(playerAccount);
const canComplete = questTool.canCompleteQuest(dragonSlayer);
```

### Slayer System

```typescript
import { Duradel } from 'osrs-tools/slayer';

// Get master's task list
const tasks = Duradel.tasks;

// Get random assignment
const task = Duradel.getRandomTask();
console.log(task.name); // e.g., "Abyssal demons"
console.log(task.requirements); // Shows requirements
```

### Account Management

```typescript
import { OsrsAccount } from 'osrs-tools/account';

// Create/load account
const account = OsrsAccount.fromJson({
  name: 'Player123',
  skills: {
    attack: { level: 60 },
    strength: { level: 55 },
    defence: { level: 50 },
  },
});

// Get skill levels
const attackLevel = account.getSkill('attack')?.level;
```

### 3D Item Models

```typescript
import { yellowPartyhatModelPath } from 'osrs-tools';

console.log(yellowPartyhatModelPath);
// "osrs-tools/models/YellowPartyhat.obj"
```

- **Node.js**: resolve the shipped asset with `require.resolve(yellowPartyhatModelPath)` and read it with `fs.readFileSync(...)`.
- **Bundlers**: import the raw asset directly from `osrs-tools/models/YellowPartyhat.obj` or use a `?url` suffix if your bundler supports it.

### Documentation Links

- [Full API Documentation](https://github.com/jamescer/osrs-tools/wiki)
- [Type Definitions](https://github.com/jamescer/osrs-tools/blob/master/src/model/quest/types.ts)
- [Code Examples](https://github.com/jamescer/osrs-tools//examples)

## Development

### Local Setup

```bash
# Clone and setup
git clone https://github.com/jamescer/osrs-tools.git
cd osrs-tools
npm install

# Build and test
npm run build
npm test
```

### Available Scripts

| Command         | Description                    |
| --------------- | ------------------------------ |
| `build`         | Compile TypeScript to dist/    |
| `dev`           | Watch mode compilation         |
| `test`          | Run test suite                 |
| `test:watch`    | Run tests in watch mode        |
| `test:coverage` | Generate coverage report       |
| `lint`          | Lint and fix code              |
| `format`        | Format code with Prettier      |

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
│   ├── utils/                   # Helper utilities (cache, validation, etc.)
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
