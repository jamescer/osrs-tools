Old School RuneScape Quest Tool

[![NPM Version][npm-image]][npm-url] [![Downloads][downloads-image]][downloads-url] [![GitHub Issues][issues-img]][new-issue]
[![types](https://img.shields.io/npm/types/osrs-tools.svg?style=flat-square)](https://github.com/jamescer/osrs-tools/blob/master/src/types.ts)

A Node.js package to provide data for all current Old School RuneScape quests. The tool aims to help junior software developers build projects they are passionate about. It's a work in progress, and issues can be reported to [jamesmcerniglia@gmail.com](mailto:jamesmcerniglia@gmail.com) or under the [issues tab on GitHub](https://github.com/jamescer/osrs-tools/issues).

## Installation

```bash
npm install osrs-tools --save
```

### Usage

```javascript
import { QuestTool, questArray, questObject } from 'osrs-quest-tool';

const tool = new QuestTool();
const questArrayData = questArray();
const questObjectData = questObject();

console.log(questObjectData);
console.log(questArrayData);
```

### API

| Method            | Description                                                      | Type              |
| ----------------- | ---------------------------------------------------------------- | ----------------- |
| `new QuestTool()` | Constructor for the `QuestTool` class.                           | Class Constructor |
| `questObject()`   | Function that returns an object of quest array keys.             | Function          |
| `questArray()`    | Function that returns an array of alphabetically ordered quests. | Function          |

### Core Concept

The core concept of this tool is to provide an easy-to-use module and API for accessing Old School RuneScape quest data.

### To-Do

- Implement a recursive function for determining quest completion
- Implement a quest completion array
- Implement `questArray` and `questObject` objects instead of functions
- Recipe for Disaster is a work in progress!

# Credits

[npm-image]: https://img.shields.io/npm/v/osrs-tools.svg
[npm-url]: https://www.npmjs.com/package/osrs-tools
[downloads-image]: https://img.shields.io/npm/dm/osrs-tools.svg
[downloads-url]: https://npmcharts.com/compare/osrs-tools?minimal=true
[issues-img]: https://img.shields.io/github/issues/jamescer/osrs-tools.svg
[new-issue]: https://github.com/jamescer/osrs-tools/issues/new/choose
