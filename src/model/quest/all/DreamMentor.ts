import { Skill } from '../../account/Skill';

export const someQuest = {
  // ...existing quest properties...
  rewards: {
    experience: [
      { skill: Skill.Hitpoints, amount: 15000 },
      { skill: Skill.Magic, amount: 10000 },
    ],
    questPoints: 2,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
  // ...existing quest properties...
};