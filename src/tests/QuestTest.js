const { Quest } = require('../utils/Quest');

try {
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
  console.log(test);
} catch (err) {
  console.log(err);
}
