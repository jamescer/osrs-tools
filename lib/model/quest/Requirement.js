/**
 * Quest class
 * Author: James Cerniglia
 */
// const questData = '../questData.js'
// const { QuestTool } = require('./QuestTool.js')

class Requirements {

    constructor(questPoints, questRequirements, skillRequirements) {
        this.questPoints = questPoints;
        this.questRequirements = questRequirements.array.forEach(element => {
            new QuestRequirement(element);
        });
        this.skillRequirements = skillRequirements.array.forEach(element => {
            new SkillRequirement(element.skillName, element.level, element.boostable);
        });
    }

}

class SkillRequirement {

    constructor(skillName, level, boostable) {
        this.skillName = skillName;
        this.level = level;
        this.boostable = boostable;
    }

    /**
     * 
     * @returns {String} string description of class
     */
     getSkillName() {
        return this.skillName;
    }

    getLevel() {
        return this.level;
    }

    getBoostable() {
        return this.boostable;
    }

    toString() {
        return this;
    }
}


class QuestRequirement {

    constructor(questName) {
        this.questName = questName;
    }

    /**
     * 
     * @returns {String} string description of class
     */
    toString() {
        return this.requirementObject;
    }

    getQuestName() {
        return this.questName;
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

module.exports = exports = { SkillRequirement, QuestRequirement };