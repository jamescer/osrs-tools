import { Skill } from '../../account/Skill';

export interface QuestRewards {
  experience: Array<{ skill: Skill; amount: number }>;
  questPoints: number;
  items: any[];
  areas: any[];
  unlocks: any[];
  lamps: any[];
  points: any[];
  pets: any[];
}

const rewards: QuestRewards = {
  experience: [
    { skill: Skill.Magic, amount: 20000 },
  ],
  questPoints: 3,
  items: [],
  areas: [],
  unlocks: [],
  lamps: [],
  points: [],
  pets: [],
};