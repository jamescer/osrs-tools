## Old School Runescape Quest Tool

A collection of old school runescape data in order to help developers create something special.

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

### Example

```js
import { QuestTool, questArray, questObject } from "osrs-quest-tool";
var tool = new QuestTool();
this.questArray = questArray();
this.questData = questObject();
console.log(this.questData);
console.log(this.questArray);
```

### Result

```js
{
    "A Soul's Bane": {
        miniquest: false,
        name: "A Soul's Bane",
        shortName: 'aSoulsBane',
        url: 'https://oldschool.runescape.wiki/w/A_Soul%27s_Bane',
        members: true,
        difficulty: 'Novice',
        subquests: [],
        questLength: 'Medium',
        requirements: { quests: [], skills: [] },
        rewards: { exp: [ [Object], [Object] ], questPoints: 1 },
        series: null
        }, ...
```

---

### Example 2

```js
import q from "osrs-quest-tool";
console.log(q.questArray());
```

### Result

```js
[{
  miniquest: false,
  name: "A Soul's Bane",
  shortName: 'aSoulsBane',
  url: 'https://oldschool.runescape.wiki/w/A_Soul%27s_Bane',
  members: true,
  difficulty: 'Novice',
  subquests: [],
  questLength: 'Medium',
  requirements: { quests: [], skills: [] },
  rewards: { exp: [ [Object], [Object] ], questPoints: 1 },
  series: null
}, ...
```

---

### Example

```js
import questTool from "osrs-quest-tool";
console.log(
  questTool.canCompleteQuest(questTool.questObject()["Regicide"], testAccount)
);
```

### Result

```js
true;
```

---

## Notes

Recipe for disaster is a work in progress!

## TODO

Implement quest completion array
implement questArray and questObject objects instead of functions
