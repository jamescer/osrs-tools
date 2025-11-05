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

- [Features](#features)
- [Installation](#installation)
- [Examples](#examples)
- [API Reference](#api-reference)
- [Development](#development)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

## Features

✨ **Quest System**

- Complete quest database with requirements and rewards
- Quest dependency tracking and validation
- Experience and item reward calculations
- Quest point tracking
- Support for miniquests

🎯 **Skill & Level System**

- Skill level tracking and validation
- Support for boostable requirements
- Combat level calculations
- Quest point requirements

🗡️ **Items & Equipment**

- Comprehensive item database
- Equipment statistics
- Trading and value information
- Quest item tracking

👹 **Slayer System**

- Full slayer master task lists
- Task weights and assignment logic
- Slayer requirement validation
- Reward shop data

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

### Quest System

```typescript
import { QuestTool, Quest } from 'osrs-tools';

// Get quest information
const dragonSlayer = QuestTool.getQuestByName('Dragon Slayer');
console.log(dragonSlayer.requirements);

// Check quest completion requirements
const questTool = new QuestTool();
questTool.setOsrsAccount(playerAccount);
const canComplete = questTool.canCompleteQuest(dragonSlayer);
```

### Slayer System

```typescript
import { Duradel } from 'osrs-tools';

// Get master's task list
const tasks = Duradel.tasks;

// Get random assignment
const task = Duradel.getRandomTask();
console.log(task.name); // e.g., "Abyssal demons"
console.log(task.requirements); // Shows requirements
```

### Account Management

```typescript
import { OsrsAccount } from 'osrs-tools';

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

| Command      | Description             |
| ------------ | ----------------------- |
| `build`      | Build the project       |
| `test`       | Run tests               |
| `test:watch` | Run tests in watch mode |
| `lint`       | Lint the code           |
| `format`     | Format the code         |
| `docs`       | Generate documentation  |

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
