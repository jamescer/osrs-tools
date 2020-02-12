# OSRS QuestTool  [![Build Status](https://travis-ci.org/cerniglj1/osrs-quest-tool.svg?branch=master)](https://travis-ci.org/cerniglj1/osrs-quest-tool) [![Coverage Status](https://coveralls.io/repos/github/cerniglj1/osrs-quest-api/badge.svg?branch=master)](https://coveralls.io/github/cerniglj1/osrs-quest-api?branch=master) [![Maintainability](https://api.codeclimate.com/v1/badges/e005f38d1e559ad49546/maintainability)](https://codeclimate.com/github/cerniglj1/osrs-quest-tool/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/e005f38d1e559ad49546/test_coverage)](https://codeclimate.com/github/cerniglj1/osrs-quest-tool/test_coverage)

An api using json data to see if your account is able to complete certain quests. Uses the osrs-api package as well.

## Installation 
```
pip install QuestTool
```

### Example
```python
from QuestTool import QuestTool
qc = QuestTool('jimbo jango', 300)
#QuestTool('ACCOUNT_NAME', QUEST_POINT_AMOUNT)
qc.meetsRequirements('Regicide')
qc.getRequirements('One Small Favour')
doable = qc.getDoableQuests()
```

### Get the requirements of a quest.
#### `z = meets_requirements(quest_name)`
> Used to get individual quest requirements. Returns a dictionary object

### Obtain a dictionary of all the quests you are capable of doing with the levels.
#### `x = get_doable_quests()`
> Used to get individual quest requirements. Returns a dictionary object


# TODO
- Must add new quests like Song of the Elves to the api


