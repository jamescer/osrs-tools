# osrs-quest-tool  [![Build Status](https://travis-ci.org/cerniglj1/osrs-quest-tool.svg?branch=master)](https://travis-ci.org/cerniglj1/osrs-quest-tool) [![Coverage Status](https://coveralls.io/repos/github/cerniglj1/osrs-quest-api/badge.svg?branch=master)](https://coveralls.io/github/cerniglj1/osrs-quest-api?branch=master) [![Maintainability](https://api.codeclimate.com/v1/badges/e005f38d1e559ad49546/maintainability)](https://codeclimate.com/github/cerniglj1/osrs-quest-tool/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/e005f38d1e559ad49546/test_coverage)](https://codeclimate.com/github/cerniglj1/osrs-quest-tool/test_coverage)

An api using json data to see if your account is able to complete certain quests. Uses the osrs-api package as well.

## Installation 
```
pip install osrs-quest-tool
```

### Example
```python
from quest_checker import QuestChecker
qc = QuestChecker('jimbo jango', 300)
#QuestChecker('ACCOUNT_NAME', QUEST_POINT_AMOUNT)
qc.meets_requirements('Regicide')
qc.get_requirements('One Small Favour')
doable = qc.get_doable_quests()
```

### Get the requirements of a quest.
#### `z = meets_requirements(quest_name)`
> Used to get individual quest requirements. Returns a dictionary object

### Obtain a dictionary of all the quests you are capable of doing with the levels.
#### `x = get_doable_quests()`
> Used to get individual quest requirements. Returns a dictionary object


# TODO
- Must add new quests like Song of the Elves to the api


