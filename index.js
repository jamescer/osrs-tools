var questObject = require('./questData.json');
var questArray = require('./questDataArray.json');
exports.questObject = function () {
    return questObject;
}
exports.questArray = function () {
    return questArray;
}
exports.hello = function () {
    console.log("if you need help use the .help() method");
    console.log("This is a message from the demo package");
}
exports.contact = function () {
    console.log("If you need to contact me feel free to reach out to me at cerniglj1@hawkmail.newpaltz.edu");
}
// exports = (str) => {
//     return `💩${str}💩`;
// }
exports.help = function () {
    console.log("import q from \"osrs-quest-tool\";\n console.log(q.questObject());\n console.log(q.questArray());");
}


exports.meetQuestRequirements = function meetQuestRequirements(quest, account) {
    if (quest === "Pirate Pete subquest of Recipe for Disaster") {
        // TODO fuck this
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
                    if (account.main.skills[cur.skill] + 5 < cur.level) {
                        return false;
                    }
                } else {
                    if (account.main.skills[cur.skill] < cur.level) {
                        return false;
                    }
                }
            }
            // If the requirement is quest points, check to see if the account has the quest points to complete it
            if (cur.skill === "quest") {
                if (account.main.questPoints < cur.level) {
                    return false;
                }

                // if the requirement is combat level to start the quest, check to see if the account's combat level is higher than or equal to the requirement
            } else if (cur.skill === "combat") {
                if (account.main.combatLevel < cur.level) {
                    return false;
                }

                // If this is ANY skill agility, runecraft, woodcutting, slayer, attack, defence, hitpoints, mining smithing, herblore, fletching, ranged, magic
            } else {

                // if the requirement is boostable 
                // TODO Implement skills with or without stews?
                // Hitpoints has no stew boost
                // every skill has a stew boost 9/10/2020
                if (cur.boostable) {
                    // check if max stew can reach
                    if (account.main.skills[cur.skill] + 5 < cur.level) {
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
            var curquest = quest.requirements.quests[y];

            // If any of the quests required are not completeable: return false
            if (this.meetQuestRequirements(this.questObject[curquest]) == false) {
                return false;
            }
        }
    }

    // If the account can complete all quests and skills are higher than or boostable
    return true;
}

exports.meetsRequirement = function (quest, account) {
    if (quest === "Pirate Pete subquest of Recipe for Disaster") {
        // TODO fuck this
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
                    if (account.main.skills[cur.skill] + 5 < cur.level) {
                        return false;
                    }
                } else {
                    if (account.main.skills[cur.skill] < cur.level) {
                        return false;
                    }
                }
            }
            // If the requirement is quest points, check to see if the account has the quest points to complete it
            if (cur.skill === "quest") {
                if (account.main.questPoints < cur.level) {
                    return false;
                }

                // if the requirement is combat level to start the quest, check to see if the account's combat level is higher than or equal to the requirement
            } else if (cur.skill === "combat") {
                if (account.main.combatLevel < cur.level) {
                    return false;
                }

                // If this is ANY skill agility, runecraft, woodcutting, slayer, attack, defence, hitpoints, mining smithing, herblore, fletching, ranged, magic
            } else {

                // if the requirement is boostable 
                // TODO Implement skills with or without stews?
                // Hitpoints has no stew boost
                // every skill has a stew boost 9/10/2020
                if (cur.boostable) {
                    // check if max stew can reach
                    if (account.main.skills[cur.skill] + 5 < cur.level) {
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
            var curquest = quest.requirements.quests[y];

            // If any of the quests required are not completeable: return false
            if (this.meetsRequirement(this.questObject[curquest]) == false) {
                return false;
            }
        }
    }

    // If the account can complete all quests and skills are higher than or boostable
    return true;
}