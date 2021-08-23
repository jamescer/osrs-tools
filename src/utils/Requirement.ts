/**
 * Requiremant class
 * Author: James Cerniglia
 */

import { Quest } from './Quest';
import { QuestTool } from './QuestTool';
// const questData = require('../data/quest/questData.js');
export interface RequirementObject {
  /**
   * requirements: {
   *  quests: [ 'Death to the Dorgeshuun',],
   * skills: [{ skill: 'quest', level: 16, boostable: false }],},
   * */
  quests: Array<String>;
  skills: Array<SkillRequirementObject>;
}

export interface SkillRequirementObject {
  /**{ skill: 'quest', level: 16, boostable: false } */
  skill: String;
  level: Number;
  boostable: Boolean;
}
export class Requirement {
  requirementObject: object;
  constructor(requirementObject: RequirementObject) {
    this.requirementObject = requirementObject ?? null;
  }

  /**
   *
   * @returns {String} string description of class
   */
  toString() {
    return this.requirementObject;
  }
}

export class SkillRequirement {
  skillObject: object;
  boostable: Boolean;
  constructor(skillObject: SkillRequirementObject) {
    this.skillObject = skillObject ?? null;
    this.boostable = skillObject?.boostable ?? null;
  }
}
export class QuestRequirement {
  quest: Quest;
  constructor(questName: string) {
    this.quest = new QuestTool().getQuestByName(questName);
  }

  /**
   * Gets Quest Object
   * @returns {Quest} Quest boject tied to this requirement
   */
  getQuest() {
    return this.quest;
  }
}

// test();
