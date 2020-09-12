# OSRS QuestTool

A collection of quest data in order to help developers create something special.

## Installation

```
npm i osrs-quest-tool
```

### Example

```js
import q from "osrs-quest-tool";
console.log(q.json());
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
