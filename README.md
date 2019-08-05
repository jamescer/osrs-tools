# osrs-quest-api
An api using json data to see if your account is able to complete certain quests. Uses the osrs-api package as well.
![npm](https://img.shields.io/npm/v/osrs-quest-api.svg)

## Installation 
```
$ npm install --save osrs-quest-api
```

## Usage

### Get individual quest requirements
#### `has_levels_for_quest(quest_name)`
Used to get individual quest requirements


##### Example

```python
import quest_checker as qc
qc.ACCOUNT = 'not poop'
qc.has_levels_for_quest('Regicide')
```

##### Output

<span style="color:blue">Regicide</span>

#### Get all quests that are can be done at the current levels of the account
#### `get_doable_quests()`

##### Example

```python
import quest_checker as qc
qc.ACCOUNT = 'not poop'
qc.get_doable_quests()
```