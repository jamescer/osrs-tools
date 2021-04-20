## Old School Runescape Quest Tool

A [Node Package](https://www.npmjs.com/package/osrs-quest-tool) to provide data for all current old school runescape quests. Creating tools to help junior software developers build things they are passionate about. Work in progress and issues should be reported to cerniglj1@hawkmail.newpaltz.edu or jamesmcerniglia@gmail.com or reported under the [issues tab on gituhb](https://github.com/cerniglj1/osrs-quest-tool/issues).

## Installation

```js
npm i osrs-quest-tool
```

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
```

---

## Notes

Recipe for disaster is a work in progress!

## TODO

- Implement recursive function for determining quest completion
- Implement quest completion array
- Implement questArray and questObject objects instead of functions
