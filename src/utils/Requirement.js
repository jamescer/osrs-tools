/**
 * Quest class
 * Author: James Cerniglia
 */
const questData = '../questData.js'
const { QuestTool } = require('./QuestTool.js')

class Requirement {

    constructor(requirementObject) {
        this.requirementObject = requirementObject ? requirementObject : null;

    }

    /**
     * 
     * @returns {String} string description of class
     */
    toString() {
        return this.requirementObject;
    }
}

class SkillRequirement extends Requirement {

    constructor(skillObject) {
        this.skillObject = skillObject ? skillObject : null;
        this.boostable = skillObject.boostable ? skillObject.boostable : null;
    }

    /**
     * 
     * @returns {String} string description of class
     */
    toString() {
        return this.requirementObject;
    }
}
class QuestRequirement extends Requirement {

    constructor(questName) {
        this.questName = questName ? questName : null;
        this.quest = new QuestTool().getQuestByName(questName);
    }

    /**
     * 
     * @returns {String} string description of class
     */
    toString() {
        return this.requirementObject;
    }

    /**
     * Gets Quest Object
     * @returns {Quest} Quest boject tied to this requirement
     */
    getQuest() {
        return this.quest;
    }
}

function test() {
    var reqs = {

        "quests": [
            "Big Chompy Bird Hunting",
            "Jungle Potion"
        ],
        "skills": [{
                "skill": "smithing",
                "level": 4,
                "boostable": false
            },
            {
                "skill": "herblore",
                "level": 8,
                "boostable": false
            },
            {
                "skill": "ranged",
                "level": 30,
                "boostable": false
            },
            {
                "skill": "fletching",
                "level": 30,
                "boostable": false
            },
            {
                "skill": "strength",
                "level": 10,
                "boostable": false
            },
            {
                "skill": "prayer",
                "level": 43,
                "boostable": false
            }
        ]
    };

    var reqArr = [];
    if (reqs.quests) {
        for (var u = 0; u < reqs.quests.length; u++) {
            reqArr.push(new QuestRequirement(reqs.quests[u]))
        }
    }
    if (reqs.skills) {
        console.log(2);
        for (var z = 0; z < reqs.skills.length; z++) {
            console.log(reqs.skills[z]);
            reqArr.push(new SkillRequirement(reqs.skills[z]))
        }
    }
    console.log(reqArr)
}
test()

module.exports = exports = { Requirement, test };