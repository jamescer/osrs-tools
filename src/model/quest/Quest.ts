// SkillRequirement interface
interface SkillRequirement {
  level: number; // Required skill level
  isBoostable: boolean; // Flag to indicate if the skill is boostable
}

// Quest interface
interface Quest {
  id: number; // Unique identifier
  name: string; // Quest name
  difficulty: string; // Difficulty level
  skillRequirements: { [skill: string]: SkillRequirement }; // Skill level requirements with boostable flag
  status: "Not Started" | "In Progress" | "Completed"; // Quest status
  miniquest: boolean; // Is this a miniquest?
  shortName: string; // Short name for the quest
  url: string; // URL to the quest guide
  series: string; // Series of the quest (e.g. 'Elf', 'Mahjarrat')
  members: boolean; // Is this a members-only quest?
  questPoints: number; // Quest points rewarded
  length: string; // Length of the quest
  age: string; // Age of the quest
  startLocation: string; // Starting location
  difficultyLevel: string; // Difficulty level
  officialDifficulty: string; // Official difficulty level
  officialLength: string; // Official length
  officialAge: string; // Official age
  itemRequirements: string[]; // Item requirements
  recommendedItems: string[]; // Recommended items
  recommendedSkills: { [skill: string]: number }; // Recommended skills
  recommendedPrayers: string[]; // Recommended prayers
  questRequirements: string[]; // Names of quests that need to be completed before
  rewards: {
    experience?: { [skill: string]: number }; // Experience rewards per skill
    items?: string[]; // List of items rewarded
    areas?: string[]; // List of items rewarded
  };
}

export { Quest };
