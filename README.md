## Old School Runescape quest tool

A collection of old school runescape data in order to help developers create something special.

## Installation

```js
npm i osrs-quest-tool
```


| Syntax | Description | Type |
| --- | ----------- | ----------- |
| ```q.questObject()``` | returns an object of quest array keys. | Object { } |
| ```q.questArray()``` | returns an array of alphabetically ordered quests. | Array [ ] |
| ```q.canCompleteQuests(questObject,account)``` | returns an array of alphabetically ordered quests. | Boolean |
---
### Example

```js
import q from "osrs-quest-tool";
console.log(q.questObject());
```

### Result

```js
{
    "A Soul's Bane": {
        "Miniquest": false,
        "Name": "A Soul's Bane",
        "shortName": "aSoulsBane",
        "url": "https://oldschool.runescape.wiki/w/A_Soul%27s_Bane",
        "members": true,
        "Difficulty": "Novice",
        "Length": "Medium",
        "requirements": {
            "quests": [],
            "levels": []
        },
        "Rewards": {
            "Experience": [{
                "skill": "defence",
                "amount": 500
            }, {
                "skill": "hitpoints",
                "amount": 500
            }],
            "QuestPoints": 1
        },
        "Series": null
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
        "Miniquest": false,
        "Name": "A Soul's Bane",
        "shortName": "aSoulsBane",
        "url": "https://oldschool.runescape.wiki/w/A_Soul%27s_Bane",
        "members": true,
        "Difficulty": "Novice",
        "Length": "Medium",
        "requirements": {
            "quests": [],
            "levels": []
        },
        "Rewards": {
            "Experience": [{
                "skill": "defence",
                "amount": 500
            }, {
                "skill": "hitpoints",
                "amount": 500
            }],
            "QuestPoints": 1
        },
        "Series": null
    }, ...
```

---
### Example

```js
import questTool from "osrs-quest-tool";
console.log(questTool.canCompleteQuest(questTool.questObject()['Regicide'],testAccount));
```

### Result

```js
true
```
---

## Notes

Recipe for disaster is a work in progress