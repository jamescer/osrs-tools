import { Requirement, QuestRequirement, SkillRequirement } from './Requirement';

/**
 * Quest class
 * Author: James Cerniglia
 */
export enum QuestSeries {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

export interface QuestObject {
  isMembers: Boolean;
  isSubquest: Boolean;
  isMiniquest: Boolean;
  name: String;
  shortName: String;
  url: String;
  itemsRecommended: Array<String>;
  enemiesToDefeat: Array<String>;
  itemsRequired: Array<String>;
  startPoint: String;
  description: String;
  difficulty: String;
  questLength: String;
  series: String;
  subquests: Array<QuestObject>;
  requirements: any;
  rewards: object;
}

export class Quest {
  questObject: object;
  isMembers: Boolean;
  isSubquest: Boolean;
  isMiniquest: Boolean;
  name: String;
  shortName: String;
  url: String;
  itemsRecommended: Array<String>;
  enemiesToDefeat: Array<String>;
  itemsRequired: Array<String>;
  startPoint: String;
  description: String;
  difficulty: String;
  questLength: String;
  series: String;
  subquests: Array<QuestObject>;
  requirements: any;
  rewards: object;
  constructor(questObject: QuestObject) {
    this.questObject = questObject;
    this.name = questObject.name;
    this.isMiniquest = questObject.isMiniquest;
    this.isSubquest = questObject.isSubquest;
    this.isMembers = questObject.isMembers;
    this.shortName = questObject.shortName;
    this.url = questObject.url;
    this.difficulty = questObject.difficulty;
    this.questLength = questObject.questLength;
    this.series = questObject.series;
    this.subquests = questObject.subquests;
    this.requirements = questObject.requirements;
    this.rewards = questObject.rewards;
    this.startPoint = questObject.startPoint;
    this.description = questObject.description;
    this.itemsRequired = questObject.itemsRequired;
    this.enemiesToDefeat = questObject.enemiesToDefeat;
    this.itemsRecommended = questObject.itemsRecommended;
    // Initialize quest requirements

    if (this.requirements?.quests) {
      for (var req in this.requirements.quests) {
        this.requirements.quests.push(
          new QuestRequirement(this.requirements.quests[req])
        );
      }
    }

    if (this.requirements?.skills) {
      for (var req in this.requirements.quests) {
        this.requirements.push(
          new SkillRequirement(this.requirements.quests[req])
        );
      }
    }
  }

  /**
   *
   * @returns {String} string description of class
   */
  toString() {
    return this.name;
  }
}
export class SubQuest extends Quest {}
