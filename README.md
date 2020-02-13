# OSRS QuestTool  [![Build Status](https://travis-ci.org/cerniglj1/osrs-quest-tool.svg?branch=master)](https://travis-ci.org/cerniglj1/osrs-quest-tool) [![Coverage Status](https://coveralls.io/repos/github/cerniglj1/osrs-quest-api/badge.svg?branch=master)](https://coveralls.io/github/cerniglj1/osrs-quest-api?branch=master) [![Maintainability](https://api.codeclimate.com/v1/badges/e005f38d1e559ad49546/maintainability)](https://codeclimate.com/github/cerniglj1/osrs-quest-tool/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/e005f38d1e559ad49546/test_coverage)](https://codeclimate.com/github/cerniglj1/osrs-quest-tool/test_coverage)

A collection of quest data in order to help developers create something special. Also includes a Python class QuestTool in order for pip installers to access and use this repository.

## Installation 
```
pip install osrsquesttool
```

### Example
```python
from QuestTool import QuestTool
qt = QuestTool('jimbo jango', 300)
#QuestTool('ACCOUNT_NAME', QUEST_POINT_AMOUNT)
qt.meetsRequirements('Regicide')
qt.getRequirements('One Small Favour')
doable = qt.getDoableQuests()
```

### Methods
#### `x = qt.meetsRequirements('Regicide')`
> Used to see if the character associated with the Quest Tool is able to complete the quest input. Returns a boolean
```python
print(x)
True
```

#### `x = qt.getRequirements('One Small Favour')`
> Used to get individual quest requirements. Returns a dictionary object
```python
{
    "skills": {
        "agility": 36,
        "crafting": 25,
        "herblore": 18,
        "smithing": 30
    },
    "quests": {
        "Rune Mysteries": {
            "skills": {},
            "quests": {}
        },
        "Shilo Village": {
            "skills": {
                "crafting": 20,
                "agility": 32,
                "smithing": 4
            },
            "quests": {}
        }
    }
}
```

#### `z = qt.getDoableQuests()`
> Used to get all quests that can be done with the associated account (includes boosts). Returns a dictionary object
```python
{
    "A Soul's Bane": True,
    "A Tail of Two Cats" True,
    "Animal Magnetism" True,
    "Big Chompy Bird Hunting" True,
    "Biohazard" True,
    "Black Knights' Fortress": True,
    "Bone Voyage" True,
    "Client of Kourend" True,
    "Clock Tower" True,
    "Contact!" True,
    .
    .
    .
    "Waterfall Quest" True,
    "What Lies Below" True,
    "Witch's House": True,
    "Witch's Potion": True
}


# TODO
- Must restructure Recipe for Disaster subsection and find proper structure for the subquests it involves
- Must add new quests like Song of the Elves, Fremnick Exiles (cannot find old api I snagged data from) to the api


