# Old School RuneScape Quest Tool

[![NPM Version][npm-image]][npm-url] [![Downloads][downloads-image]][downloads-url] [![GitHub Issues][issues-img]][new-issue]  
[![types](https://img.shields.io/npm/types/osrs-tools.svg?style=flat-square)](https://github.com/jamescer/osrs-tools/blob/master/src/types.ts)

The **Old School RuneScape Quest Tool** is a Node.js package designed to provide comprehensive data for all current Old School RuneScape (OSRS) quests, slayer tasks, and related game mechanics. This tool is ideal for developers looking to integrate OSRS data into their projects, whether for personal use, game guides, or community tools.

## Features

- Access detailed quest data, including requirements, rewards, and steps.
- Retrieve slayer task information, including task weights, requirements, and locations.
- Explore slayer master data, including assigned tasks, combat level requirements, and rewards.
- Built-in support for tracking quest and slayer progress.
- Easy-to-use API for developers of all skill levels.

## Overview

This package provides a comprehensive, programmatic interface to Old School RuneScape (OSRS) quest, slayer, and account data. It is designed for developers, tool creators, and enthusiasts who want to:

- Access and analyze detailed quest data, including requirements, rewards, and quest steps.
- Retrieve and filter slayer master tasks, including requirements, locations, and weights.
- Simulate or build tools for quest progression, slayer assignment, and account planning.
- Integrate OSRS data into bots, web apps, Discord bots, or personal utilities.
- Track quest and slayer progress, or build custom checklists and planners.

## What You Can Do

- **Quest Data**: Use the `QuestTool` class and related functions to get all quest data as objects or arrays. Filter quests by requirements, rewards, or completion status. Build quest guides, checklists, or progress trackers.
- **Slayer Masters & Tasks**: Import any Slayer Master (e.g., `Turael`, `Duradel`, `Krystilia`) to access their full list of tasks, requirements, and locations. Randomly assign tasks, filter by requirements, or analyze task weights for planning.
- **Account Modeling**: Use the `OsrsAccount` and `Skill` models to represent and manipulate player accounts, including skill levels and quest completions. Simulate account progression or validate requirements for quests and tasks.
- **Slayer Rewards**: Access lists of unlockable Slayer rewards and buyable items, including costs and descriptions, for use in planning or calculators.
- **Data Integration**: All data is available as TypeScript/JavaScript objects, making it easy to integrate into web apps, bots, or scripts. The structure is ideal for both backend and frontend use.
- **Extendable**: The modular design allows you to add new quests, tasks, or masters, or to extend models for custom use cases.

## Example Use Cases

- **Quest Progress Tracker**: Build a web or mobile app that tracks quest completion, shows requirements, and suggests next quests based on your account.
- **Slayer Task Generator**: Create a Discord bot or web tool that assigns random slayer tasks based on your current level and unlocked masters.
- **Account Planner**: Simulate an account's progression, checking which quests or tasks are available at each stage.
- **Data Analysis**: Analyze quest or slayer data for guides, statistics, or optimization (e.g., fastest quest cape route, most efficient slayer path).

## Data Structure Highlights

- **Quests**: Each quest is represented as a class with requirements, rewards, and steps. Data is available in both object and array formats for flexibility.
- **Slayer Masters**: Each master is a class instance with a list of `Task` objects, each containing requirements, weights, and locations.
- **Tasks**: Tasks include all relevant requirements (combat, slayer, quest), possible monsters, and location data.
- **Account Models**: The `OsrsAccount` and `Skill` classes allow you to represent and manipulate player data programmatically.

## Installation

Install the package via npm:

```bash
npm install osrs-tools --save
```

## Usage

Here’s how to use the tool in your project:

### Importing the Module

```javascript
import { QuestTool, questArray, questObject } from 'osrs-tools';
```

### Working with Quests

```javascript
// Instantiate the QuestTool class
const tool = new QuestTool();

// Get quest data as an array
const questArrayData = questArray();

// Get quest data as an object
const questObjectData = questObject();

// Output the quest data
console.log(questArrayData);
console.log(questObjectData);
```

### Working with Slayer Masters and Tasks

```javascript
import { Turael, Duradel } from 'osrs-tools';

// Access Turael's tasks
console.log(Turael.getTasks());

// Get a random task from Duradel
const randomTask = Duradel.getRandomTask();
console.log(randomTask);
```

### Slayer Rewards and Unlocks

```javascript
import { SlayerUnlocks, SlayerBuys } from 'osrs-tools';

// List all available Slayer unlocks
console.log(SlayerUnlocks);

// List all items available for purchase with Slayer points
console.log(SlayerBuys);
```

## API Reference

### Quest API

| Method            | Description                                                             | Type              |
| ----------------- | ----------------------------------------------------------------------- | ----------------- |
| `new QuestTool()` | Constructor for the `QuestTool` class.                                  | Class Constructor |
| `questObject()`   | Function that returns an object with quest data (keys are quest names). | Function          |
| `questArray()`    | Function that returns an array of quests, ordered alphabetically.       | Function          |

### Slayer API

| Class/Method         | Description                                                                 |
| -------------------- | ------------------------------------------------------------------------- |
| `SlayerMaster`       | Represents a Slayer Master, including tasks, location, and requirements. |
| `getTasks()`         | Returns a list of tasks assigned by the Slayer Master.                   |
| `getRandomTask()`    | Returns a random task based on task weights.                             |
| `SlayerUnlocks`      | Predefined list of Slayer unlocks with costs and descriptions.           |
| `SlayerBuys`         | Predefined list of items available for purchase with Slayer points.      |

## To-Do

- Implement a recursive function for determining quest completion.
- Develop a quest completion tracking array.
- Refactor `questArray()` and `questObject()` to return objects instead of functions.
- Continue work on the **Recipe for Disaster** quest.
- Fix and validate all Slayer data.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/jamescer/osrs-tools).

## Credits

- **Author**: [James Cerniglia](mailto:jamesmcerniglia@gmail.com)
- **Repository**: [GitHub - osrs-tools](https://github.com/jamescer/osrs-tools)

[npm-image]: https://img.shields.io/npm/v/osrs-tools.svg
[npm-url]: https://www.npmjs.com/package/osrs-tools
[downloads-image]: https://img.shields.io/npm/dm/osrs-tools.svg
[downloads-url]: https://npmcharts.com/compare/osrs-tools?minimal=true
[issues-img]: https://img.shields.io/github/issues/jamescer/osrs-tools.svg
[new-issue]: https://github.com/jamescer/osrs-tools/issues/new/choose
