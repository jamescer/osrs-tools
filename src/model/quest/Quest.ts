import { Requirement } from '../Requirement';

interface QuestRewardExperience {
  skill: string;
  amount: number;
}

interface QuestRewardItem {
  name: string;
  quantity?: number;
  note?: string; // e.g., "choice of one", "untradeable"
}

interface QuestRewardUnlock {
  description: string;
  url?: string;
}

interface QuestRewardLamp {
  amount: number;
  skillRestriction?: string | string[]; // e.g., "Any", "60+"
  note?: string;
}

interface QuestRewardPoints {
  type: string; // e.g., "Slayer", "Quest"
  amount: number;
}

interface QuestRewardPet {
  name: string;
  note?: string;
}

interface QuestRewards {
  experience?: QuestRewardExperience[];
  items?: QuestRewardItem[];
  unlocks?: QuestRewardUnlock[];
  lamps?: QuestRewardLamp[];
  points?: QuestRewardPoints[];
  pets?: QuestRewardPet[];
  questPoints: number;
  areas?: string[];
  // Add more as needed
}

// Quest interface
interface Quest {
  id: number; // Unique identifier
  name: string; // Quest name
  description: string;
  difficulty: string; // Difficulty level
  steps: string[]; // Steps to complete the quest
  requirements: Requirement[]; // Skill level requirements with boostable flag
  status: QuestStatus; // Quest status
  miniquest: boolean; // Is this a miniquest?
  shortName: string; // Short name for the quest
  url: string; // URL to the quest guide
  series?: string | undefined | null; // Series of the quest (e.g. 'Elf', 'Mahjarrat')
  members: boolean; // Is this a members-only quest?
  questPoints: number; // Quest points rewarded
  length: string; // Length of the quest
  age: string; // Age of the quest
  startLocation: string; // Starting location
  difficultyLevel: string; // Difficulty level
  officialDifficulty: string; // Official difficulty level
  officialLength: string; // Official length
  officialAge: string; // Official age
  recommendedItems: string[]; // Recommended items
  recommendedSkills: { [skill: string]: number }; // Recommended skills
  recommendedPrayers: string[]; // Recommended prayers
  rewards: QuestRewards;
  [key: string]: any; // Additional properties
}

export { Quest };
export enum QuestStatus {
  NotStarted = 'NotStarted',
  InProgress = 'InProgress',
  Completed = 'Completed',
  Failed = 'Failed',
}
