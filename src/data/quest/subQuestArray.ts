import { Quest } from '../../utils/Quest';
export const SubQuestArray: Array<Quest> = [
  {
    'Pirate Pete subquest of Recipe for Disaster': {
      miniquest: true,
      subquest: true,
      shortName: 'piratePeteSubquestOfRecipeforDisaster',
      name: 'Pirate Pete subquest of Recipe for Disaster',
      url: 'https://oldschool.runescape.wiki/w/Recipe_for_Disaster/Freeing_Pirate_Pete',
      members: true,
      difficulty: 'Special',
      questLength: 'Medium',
      released: '15 March 2006 (Update)',
      itemsRequired: [
        'A raw cod',
        'A pestle and mortar',
        'Bread',
        'A knife',
        'A fishbowl (empty)',
        'A needle',
        '3 bronze wire',
      ],
      requirements: {
        quests: [],
        skills: [
          {
            skill: 'cooking',
            level: 31,
            boostable: false,
          },
        ],
        other: [
          {
            description: 'The ability to defeat 5 level 30 monsters.',
          },
        ],
        ironman: [
          {
            skill: 'crafting',
            description:
              '42 Crafting (If crafting a fishbowl yourself or by completing Rum Deal)',
            level: 42,
            boostable: false,
          },
          {
            skill: 'smithing',
            description: '4 Smithing (To make the bronze wire.)',
            level: 4,
            boostable: false,
          },
        ],
      },
      rewards: {
        exp: [],
        questPoints: 2,
      },
      series: 'Pirate',
    },
  },
];
