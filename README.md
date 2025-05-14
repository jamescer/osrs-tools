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
