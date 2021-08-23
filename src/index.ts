// import { QuestTool } from './questTool.js';const { QuestTool } = require('./utils/QuestTool.js')
// const { OsrsAccount } = require('./utils/OsrsAccount.js');

import { OsrsAccount } from './utils/OsrsAccount';
import { QuestTool } from './utils/QuestTool';
import { QuestData } from './data/quest/questData';
import { QuestArray } from './data/quest/questDataArray';
import { SubQuestArray } from './data/quest/subQuestArray';

/**
 * Returns the highest boost for the specified skillName
 * @deprecated
 */
function highestBoost(skillName) {
  /**
   * List of highest boostable levels with skills including spicy stew etc
   */
  switch (skillName) {
    case 'construction':
      // spicy stew + crystal saw
      return 8;
    case 'strength':
      //spicy stew 5
      // Drunk dragon 1-7
      // Premade dr'dragon	1-7
      return 7;
    case 'thieving':
    case 'woodcutting':
    case 'hunter': // spicy stew
    case 'magic': // 	Imbued heart 10
    //spicy stew 5
    case 'hitpoints':
    //	Guthix rest	5
    // Anglerfish
    //Abidor Crank	15
    // Amulet of the damned	10
    case 'mining': // spicy stew
    case 'prayer': // spicy stew
    case 'ranged': // spicy stew
    case 'runecraft': //spicy stew 5
    case 'slayer': //spicy stew 5
    case 'smithing': //spicy stew 5
    case 'cooking': // spicy stew
    case 'crafting': // spicy stew
    case 'defence': //spicy stew 5
    case 'farming': // spicy stew
    case 'firemaking': // spicy stew
    case 'fishing': // spicy stew
    case 'fletching': // spicy stew
    case 'herblore': // spicy stew
    case 'agility':
    // spicy stew
    case 'attack':
      //spicy stew
      return 5;
    default:
      break;
  }
}

var osrsAccount;

/**
 * Assign a OSRS account to this package.
 * @deprecated
 */
function setOsrsAccount(acc) {
  osrsAccount = acc;
}

/**
 * Assign a OSRS account to this package.
 * @deprecated
 */
function getOsrsAccount() {
  return osrsAccount;
}

/**
 * Returns a json object of all old school runescape quests.
 * @deprecated
 */
function getQuestObject() {
  return QuestData;
}

/**
 * Returns an array object of all old school runescape quests as json objects.
 * @deprecated
 */
function getQuestArray() {
  return QuestArray;
}

/**
 * Returns an array object of all subquests for all old school runescape quests as json objects.
 * @deprecated
 */
function subQuestArray() {
  return SubQuestArray;
}

function hello() {
  console.log('if you need help use the .help() method');
  console.log('This is a message from the demo package');
}

function contact() {
  console.log(
    'If you need to contact me feel free to reach out to me at cerniglj1@hawkmail.newpaltz.edu or jamesmcerniglia@gmail.com'
  );
}

function help() {
  console.log(
    'import q from "osrs-quest-tool";\n console.log(q.questObject());\n console.log(q.questArray());'
  );
}

function meetQuestRequirements(quest, account) {
  if (quest === 'Recipe for Disaster') {
    // TODO
    // Pirate Pete Subquest of Recipe for Disaster
    return true;
  } else if (quest === 'Pirate Pete subquest of Recipe for Disaster') {
    // TODO
    // Pirate Pete Subquest of Recipe for Disaster
    return true;
  }
  //check to see if the account can fulfill all skill requirements
  if (quest.requirements.levels) {
    for (var x in quest.requirements.levels) {
      var cur = quest.requirements.levels[x];
      /**
       *  cur.level
       *  cur.skill
       *  cur.boostable
       *  cur.ironman
       *  types:
       *  "quest", "combat", "agility"...
       *  */

      //  If the requirement is mandatory for ironmen
      if (cur.ironman && cur.ironman == true) {
        if (cur.boostable) {
          // Can boost with spicy stew
          if (
            account.main.skills[cur.skill] + highestBoost(cur.skill) <
            cur.level
          ) {
            return false;
          }
        } else {
          if (account.main.skills[cur.skill] < cur.level) {
            return false;
          }
        }
      }
      // If the requirement is quest points, check to see if the account has the quest points to complete it
      if (cur.skill === 'quest') {
        if (account.main.questPoints < cur.level) {
          return false;
        }

        // if the requirement is combat level to start the quest, check to see if the account's combat level is higher than or equal to the requirement
      } else if (cur.skill === 'combat') {
        if (account.main.combatLevel < cur.level) {
          return false;
        }

        // If this is ANY skill agility, runecraft, woodcutting, slayer, attack, defence, hitpoints, mining smithing, herblore, fletching, ranged, magic
      } else {
        // if the requirement is boostable
        if (cur.boostable) {
          // check if max stew can reach
          if (
            account.main.skills[cur.skill] + highestBoost(cur.skill) <
            cur.level
          ) {
            return false;
          }

          // if not boostable, check to see if the skill is higher than or equal to
        } else {
          if (account.main.skills[cur.skill] < cur.level) {
            return false;
          }
        }
      }
    }
  }

  // Check for all quest requirements
  // recursive method called
  if (quest.requirements.quests) {
    for (var y in quest.requirements.quests) {
      // If any of the quests required are not completeable: return false
      if (
        meetQuestRequirements(this.questObject[quest.requirements.quests[y]]) !=
        true
      ) {
        return false;
      }
    }
  }

  // If the account can complete all quests and skills are higher than or boostable
  return true;
}

/**
 *
 * @param {*} quest - The quest object from this modules questObject, should be a Json object.
 * @param {*} account - The account that this quest is being compared to. Plans to remove this in the future?
 * @deprecated - Should use the QuestTool class for this;
 * Recursive method that iterates through a quests requirements that determines the quest is completable with the passed account
 * Possible revamp to remove account param to increase runtime?
 *
 */
function canCompleteQuest(quest, account) {
  if (quest.name === 'Recipe for Disaster') {
    // TODO
    // Pirate Pete Subquest of Recipe for Disaster
    return true;
  } else if (quest.name === 'Pirate Pete subquest of Recipe for Disaster') {
    // TODO
    // Pirate Pete Subquest of Recipe for Disaster
    return true;
  }
  //check to see if the account can fulfill all skill requirements
  if (quest.requirements.levels) {
    for (var x in quest.requirements.levels) {
      var cur = quest.requirements.levels[x];
      /**
       *  cur.level
       *  cur.skill
       *  cur.boostable
       *  cur.ironman
       *  types: "quest", "combat", "agility"...
       *  */

      //  If the requirement is mandatory for ironmen
      if (cur.ironman && cur.ironman == true) {
        if (cur.boostable) {
          // Can boost with highest boost
          if (
            account.main.skills[cur.skill] + highestBoost(cur.skill) <
            cur.level
          ) {
            return false;
          }
        } else {
          if (account.main.skills[cur.skill] < cur.level) {
            return false;
          }
        }
      }
      // If the requirement is quest points, check to see if the account has the quest points to complete it
      if (cur.skill === 'quest') {
        if (account.main.questPoints < cur.level) {
          return false;
        }

        // if the requirement is combat level to start the quest, check to see if the account's combat level is higher than or equal to the requirement
      } else if (cur.skill === 'combat') {
        if (account.main.combatLevel < cur.level) {
          return false;
        }

        // If this is ANY skill agility, runecraft, woodcutting, slayer, attack, defence, hitpoints, mining smithing, herblore, fletching, ranged, magic
      } else {
        // if the requirement is boostable
        if (cur.boostable) {
          // check if max stew can reach
          if (
            account.main.skills[cur.skill] + highestBoost(cur.skill) <
            cur.level
          ) {
            return false;
          }

          // if not boostable, check to see if the skill is higher than or equal to
        } else {
          if (account.main.skills[cur.skill] < cur.level) {
            return false;
          }
        }
      }
    }
  }

  // Check for all quest requirements
  // recursive method called
  if (quest.requirements.quests && quest.requirements.quests >= 1) {
    for (var y in quest.requirements.quests) {
      // If any of the quests required are not completeable: return false
      if (
        canCompleteQuest(this.questObject[quest.requirements.quests[y]]) != true
      ) {
        return false;
      }
    }
  }

  //iterate through any subquests and see if we can complete
  //this is for future work with Recipe for Disaster
  if (quest.subquests && quest.subquests.length >= 1) {
    for (var y in quest.subquests) {
      // If any of the quests required are not completeable: return false
      if (
        canCompleteQuest(this.questObject[quest.requirements.subquests[y]]) !=
        true
      ) {
        return false;
      }
    }
  }

  // If the account can complete all quests and skills are higher than or boostable
  return true;
}

/**
 *
 * @param quest
 * @param account
 * @deprecated - Should use the QuestTool class for this;
 * @returns
 */
function meetsRequirement(quest, account) {
  if (quest === 'Recipe for Disaster') {
    // TODO
    // Pirate Pete Subquest of Recipe for Disaster
    return true;
  } else if (quest === 'Pirate Pete subquest of Recipe for Disaster') {
    // TODO
    // Pirate Pete Subquest of Recipe for Disaster
    return true;
  }
  //check to see if the account can fulfill all skill requirements
  if (quest.requirements.levels) {
    for (var x in quest.requirements.levels) {
      var cur = quest.requirements.levels[x];
      /**
       *  cur.level
       *  cur.skill
       *  cur.boostable
       *  cur.ironman
       *  types:
       *  "quest", "combat", "agility"...
       *  */

      //  If the requirement is mandatory for ironmen
      if (cur.ironman && cur.ironman == true) {
        if (cur.boostable) {
          // Can boost with spicy stew
          if (
            account.main.skills[cur.skill] + highestBoost(cur.skill) <
            cur.level
          ) {
            return false;
          }
        } else {
          if (account.main.skills[cur.skill] < cur.level) {
            return false;
          }
        }
      }
      // If the requirement is quest points, check to see if the account has the quest points to complete it
      if (cur.skill === 'quest') {
        if (account.main.questPoints < cur.level) {
          return false;
        }

        // if the requirement is combat level to start the quest, check to see if the account's combat level is higher than or equal to the requirement
      } else if (cur.skill === 'combat') {
        if (account.main.combatLevel < cur.level) {
          return false;
        }

        // If this is ANY skill agility, runecraft, woodcutting, slayer, attack, defence, hitpoints, mining smithing, herblore, fletching, ranged, magic
      } else {
        // if the requirement is boostable
        if (cur.boostable) {
          // check if max stew can reach
          if (
            account.main.skills[cur.skill] + highestBoost(cur.skill) <
            cur.level
          ) {
            return false;
          }

          // if not boostable, check to see if the skill is higher than or equal to
        } else {
          if (account.main.skills[cur.skill] < cur.level) {
            return false;
          }
        }
      }
    }
  }

  // Check for all quest requirements
  // recursive method called
  if (quest.requirements.quests) {
    for (var y in quest.requirements.quests) {
      // If any of the quests required are not completeable: return false
      if (
        meetQuestRequirements(this.questObject[quest.requirements.quests[y]]) !=
        true
      ) {
        return false;
      }
    }
  }

  // If the account can complete all quests and skills are higher than or boostable
  return true;
}

export = {
  QuestTool,
  OsrsAccount,
  QuestArray,
  QuestData,
  hello,
  setOsrsAccount,
  getOsrsAccount,
  getQuestObject,
  getQuestArray,
  contact,
  help,
  meetsRequirement,
  canCompleteQuest,
  subQuestArray,
};
// export default
