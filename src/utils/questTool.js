// import * as questData from './data/questData.js';
// import * as questDataArray from './data/questDataArray.js';
// import * as subQuestArray from './data/subQuestArray.js';
// import { OsrsAccount } from './osrsAcc.js';


// import * as subQuestArray from 'osrs-quest-tool/src/data/subQuestArray';
const questData = require('../data/questData.js')
const questDataArray = require('../data/questDataArray.js')
const subQuestArray = require('../data/subQuestArray.js')
const OsrsAccount = require('./osrsAcc.js')


class QuestTool {

    constructor() {
        this.questObject = questData;
        this.questArray = questDataArray;
        this.subQuestArray = subQuestArray;
    }


    /**
     * to string func
     * @todo
     * */
    toString() {
        return 'QuestTool :) WIP';
    }

    /**
     * Get the data for a quest 
     * @param  {String} questName The name of the quest
     * @return {Object} The data for the input quest in a JSON object.
     * */
    getQuest(questName) {
        if (questName && questName != null && questName != undefined && typeof questName === 'string') {
            if (this.questObject[questName]) {
                return this.questObject[questName];
            } else {
                /**
                 * @todo Implement AI to predict mispelling of quests
                 */
                return this.questObject[questName];
            }
        }
    }

    /**
     * Get the data for a quest 
     * @param  {String} questName The name of the quest
     * @return {Object} The data for the input quest in a JSON object.
     * */
    getSubQuest(subQuestName) {
        if (subQuestName && subQuestName != null && subQuestName != undefined && typeof subQuestName === 'string') {
            var q = this.subQuestArray.filter(x => x.name == subQuestName)[0]
            if (q) {
                return q;
            } else {
                /**
                 * @todo Implement AI to predict mispelling of quests
                 */
                return null;
            }
        }
    }

    /**
     * List of highest boostable levels with skills including spicy stew etc
     * @param  {String} skillName The first number
     * @return {Number} The highest boost possible for that skill.
     * */
    highestBoost(skillName) {
        /**
         * 
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

    /**
     * Add two numbers together
     * @todo Need to implement Recipe for disaster functionality
     * @param  {String} quest The either string or quest object of the quest to be determined completeable or not.
     * @return {Boolean}  If the account currently tied to the tool can complete the quest.
     * */
    canCompleteQuest(quest) {
        if (quest == undefined || quest == null) {
            return true;
        }

        if (typeof quest == 'string') {

            if (quest == 'Pirate Pete subquest of Recipe for Disaster') {
                quest = this.getQuest(quest);
            } else { quest = this.getQuest(quest); }
            if (quest == undefined || quest == null) {
                return true;
            }
        } else if (typeof quest == "object") {
            /** we want object to iterate through requirements */

        }

        if (quest.name === "Recipe for Disaster") {
            // @todo 
            // Pirate Pete Subquest of Recipe for Disaster
            return true;
        } else if (quest.name === 'Pirate Pete subquest of Recipe for Disaster') {
            // @todo
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
                        if (this.osrsAccount.main.skills[cur.skill] + highestBoost(cur.skill) < cur.level) {
                            return false;
                        }
                    } else {
                        if (this.osrsAccount.main.skills[cur.skill] < cur.level) {
                            return false;
                        }
                    }
                }
                // If the requirement is quest points, check to see if the account has the quest points to complete it
                if (cur.skill === "quest") {
                    if (this.osrsAccount.main.questPoints < cur.level) {
                        return false;
                    }

                    // if the requirement is combat level to start the quest, check to see if the account's combat level is higher than or equal to the requirement
                } else if (cur.skill === "combat") {
                    if (this.osrsAccount.main.combatLevel < cur.level) {
                        return false;
                    }

                    // If this is ANY skill agility, runecraft, woodcutting, slayer, attack, defence, hitpoints, mining smithing, herblore, fletching, ranged, magic
                } else {

                    // if the requirement is boostable 
                    if (cur.boostable) {
                        // check if max stew can reach
                        if (this.osrsAccount.main.skills[cur.skill] + highestBoost(cur.skill) < cur.level) {
                            return false;
                        }

                        // if not boostable, check to see if the skill is higher than or equal to
                    } else {
                        if (this.osrsAccount.main.skills[cur.skill] < cur.level) {
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
                if (canCompleteQuest(this.questObject[quest.requirements.quests[y]]) != true) {
                    return false;
                }
            }
        }

        //iterate through any subquests and see if we can complete 
        //this is for future work with Recipe for Disaster
        if (quest.subquests && quest.subquests.length >= 1) {
            for (var y in quest.subquests) {
                // If any of the quests required are not completeable: return false
                if (this.canCompleteQuest(this.questObject[quest.requirements.subquests[y]]) != true) {
                    return false;
                }
            }
        }

        // If the account can complete all quests and skills are higher than or boostable
        return true;

    }

    /**
     * Return an array of quests that can be completed with the associated account
     * @return {Array}      The total of the two numbers
     */
    completableQuests() {
        var completed = [];
        for (var i in this.questArray) {
            if (this.canCompleteQuest(this.questObject[this.questArray[i].name])) {
                completed.push(this.questArray[i].name)
            }
        }
        arr.append(this)
        completableQuests(arr)
    }

    /**
     * Set the account to be used in this quest tool
     * @param  {Object} skillName The osrs Account to be associated with this class object.
     * */
    setOsrsAccount(acc1) {
        if (acc1) { this.osrsAccount = new OsrsAccount(acc1); return true; } else {
            return false;
        }
    }

    /**
     * Set the account to be used in this quest tool
     * @param  {Object} skillName The osrs Account to be associated with this class object.
     * */
    setAccount(acc1) {
        if (acc1) { this.osrsAccount = new OsrsAccount(acc1); }
    }

    /**
     * Add two numbers together
     * @param  {Number} num1 The first number
     * @param  {Number} num2 The second number
     * @return {Number}      The total of the two numbers
     */
    getOsrsAccount() {
        return this.osrsAccount;
    }

    getQuestObject() {
        return this.questObject;
    }


    getSubQuestArray() {
        return this.subQuestArray;
    }


    getQuestArray() {
        return this.questArray;
    }

    /**
     * Set the account to be used in this quest tool
     * @return  {OsrsAccount} osrsAccount The osrs Account to be associated with this class object.
     * */
    getOsrsAccount() {
        return this.osrsAccount;
    }

}


module.exports = { QuestTool };
// exports.QuestTool = QuestTool;