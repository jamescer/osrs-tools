const {
  Requirement,
  QuestRequirement,
  SkillRequirement
} = require('./Requirement.js');

/**
 * Quest class
 * Author: James Cerniglia
 */
class Quest {
  //miniquest Bool, shortName Str, name Str, url Str, members Bool, difficulty  Str, questLength Str, requirements Obj, rewards Obj, series Str, subquests Arr
  constructor(miniquest, shortName, name, url, members, difficulty, questLength, requirements, rewards, series, subquests) {
    this.name = name;
    this.miniquest = miniquest;
    this.shortName = shortName;
    this.url = url;
    this.members = members;
    this.difficulty = difficulty;
    this.questLength = questLength;
    this.series = series;
    this.subquests = subquests;
    this.rewards = rewards;
    this.requirements = requirements;
  }

  /**
   * Stringify quest
   * @returns {String} string description of class
   */
  toString() {
    return this.name;
  }
}

module.exports = {
  Quest
};