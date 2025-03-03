# Old School RuneScape Quest Tool

[![NPM Version][npm-image]][npm-url] [![Downloads][downloads-image]][downloads-url] [![GitHub Issues][issues-img]][new-issue]  
[![types](https://img.shields.io/npm/types/osrs-tools.svg?style=flat-square)](https://github.com/jamescer/osrs-tools/blob/master/src/types.ts)

A Node.js package that provides data for all current Old School RuneScape quests. This tool is designed to help junior software developers by offering an easy-to-use solution for quest data, and it's continuously being improved.

Feel free to report any issues to [jamesmcerniglia@gmail.com](mailto:jamesmcerniglia@gmail.com) or use the [GitHub issues page](https://github.com/jamescer/osrs-tools/issues).

## Installation

You can install the package via npm:

```bash
npm install osrs-tools --save
```

## Usage

Here’s how to use the tool in your project:

```javascript
import { QuestTool, questArray, questObject } from 'osrs-quest-tool';

// Instantiate the QuestTool class
const tool = new QuestTool();

// Get quest data as an array and an object
const questArrayData = questArray();
const questObjectData = questObject();

// Output the quest data
console.log(questObjectData);
console.log(questArrayData);
```

## API

The following methods are available in the package:

| Method            | Description                                                      | Type              |
| ----------------- | ---------------------------------------------------------------- | ----------------- |
| `new QuestTool()` | Constructor for the `QuestTool` class.                           | Class Constructor |
| `questObject()`   | Function that returns an object with quest data (keys are quest names). | Function          |
| `questArray()`    | Function that returns an array of quests, ordered alphabetically. | Function          |

### Core Concept

The main objective of this tool is to provide a straightforward API that makes it easy to access Old School RuneScape quest data, enabling developers to integrate quests into their projects efficiently.

## To-Do

- Implement a recursive function for determining quest completion.
- Develop a quest completion tracking array.
- Refactor `questArray()` and `questObject()` to return objects instead of functions.
- Ongoing work on the **Recipe for Disaster** quest.


# Management
- How do we manage the repo? How do obtain new quest data? getQuestData is a python script to get all the data from the wiki

## Credits

- **Author**: [James Cerniglia](mailto:jamesmcerniglia@gmail.com)
- **Repository**: [GitHub - osrs-tools](https://github.com/jamescer/osrs-tools)

[npm-image]: https://img.shields.io/npm/v/osrs-tools.svg
[npm-url]: https://www.npmjs.com/package/osrs-tools
[downloads-image]: https://img.shields.io/npm/dm/osrs-tools.svg
[downloads-url]: https://npmcharts.com/compare/osrs-tools?minimal=true
[issues-img]: https://img.shields.io/github/issues/jamescer/osrs-tools.svg
[new-issue]: https://github.com/jamescer/osrs-tools/issues/new/choose