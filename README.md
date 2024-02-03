## Old School Runescape Quest Tool

A [Node Package](https://www.npmjs.com/package/osrs-tools) to provide data for all current old school runescape quests. Creating tools to help junior software developers build things they are passionate about. Work in progress and issues should be reported to jamesmcerniglia@gmail.com or reported under the [issues tab on gituhb](https://github.com/jamescer/osrs-tools/issues).

### Installation

```bash
npm install osrs-tools --save
```

or simpler

````bash
npm install osrs-tools

| Syntax            | Description                                                      | Type              |
| ----------------- | ---------------------------------------------------------------- | ----------------- |
| `new QuestTool()` | constructor for QuestTool class.                                 | Class Constructor |
| `questObject()`   | function that returns an object of quest array keys.             | Function ()       |
| `questArray()`    | function that returns an array of alphabetically ordered quests. | Function ()        |
| `questObject`     | an object of quest array keys.                                   | Object { }        |
| `questArray`      | an array of alphabetically ordered quests.                       | Array [ ]         |

---

### Example Javascript

```js
import { QuestTool, questArray, questObject } from "osrs-quest-tool";
var tool = new QuestTool();
this.questArray = questArray();
this.questData = questObject();
console.log(this.questData);
console.log(this.questArray);
````

---

## Core concept

[Osrs Tools][osrs-tools] 

## Notes

Recipe for disaster is a work in progress!

## TODO

- Implement recursive function for determining quest completion
- Implement quest completion array
- Implement questArray and questObject objects instead of functions

[downloads-image]: https://img.shields.io/npm/dm/systeminformation.svg?style=flat-square
[downloads-url]: https://www.npmjs.com/package/osrs-tools
[nodejs-url]: https://nodejs.org/en/
[docker-url]: https://www.docker.com/
[new-issue]: https://github.com/jamescer/osrs-tools/issues/new/choose
[issues-img]: https://img.shields.io/github/issues/jamescer/osrs-tools.svg?style=flat-square
