const { Requirement } = require('./Requirement.js');

/**
 * Quest class
 * Author: James Cerniglia
 */
class Quest {
  constructor(questObject) {
    this.questObject = questObject ? questObject : null;
    this.name = questObject.name ? questObject.name : null;
    this.miniquest = questObject.miniquest ? questObject.miniquest : null;
    this.shortName = questObject.shortName ? questObject.shortName : null;
    this.url = questObject.url ? questObject.url : null;
    this.members = questObject.members ? questObject.members : null;
    this.difficulty = questObject.difficulty ? questObject.difficulty : null;
    this.questLength = questObject.questLength ? questObject.questLength : null;
    this.series = questObject.members ? questObject.series : null;
    this.subquests = questObject.subquests ? questObject.subquests : null;

    this.requirements = [];

    // Initialize quest requirements
    if (questObject.requirements) {
      for (var u = 0; u < questObject.requirements.length; u++) {
        requirements.push(new Requirement(questObject.requirements[u]));
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

function test() {
  var questobj = {
    miniquest: false,
    shortName: 'zogreFleshEaters',
    name: 'Zogre Flesh Eaters',
    url: 'https://oldschool.runescape.wiki/w/Zogre_Flesh_Eaters',
    members: true,
    difficulty: 'Intermediate',
    questLength: 'Medium',
    requirements: {
      quests: ['Big Chompy Bird Hunting', 'Jungle Potion'],
      skills: [
        {
          skill: 'smithing',
          level: 4,
          boostable: false,
        },
        {
          skill: 'herblore',
          level: 8,
          boostable: false,
        },
        {
          skill: 'ranged',
          level: 30,
          boostable: false,
        },
        {
          skill: 'fletching',
          level: 30,
          boostable: false,
        },
        {
          skill: 'strength',
          level: 10,
          boostable: false,
        },
        {
          skill: 'prayer',
          level: 43,
          boostable: false,
        },
      ],
    },
    rewards: {
      exp: [
        {
          skill: 'fletching',
          amount: 2000,
        },
        {
          skill: 'herblore',
          amount: 2000,
        },
        {
          skill: 'ranged',
          amount: 2000,
        },
      ],
      questPoints: 1,
    },
    series: 'Ogre',
    subquests: [],
  };
  var test = new Quest(questobj);
}
module.exports = {
  Account,
};
