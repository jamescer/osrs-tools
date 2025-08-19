import { Requirement } from './requirements';
import { QuestDifficulty, QuestLength, QuestStatus } from './enums';

/**
 * Types and interfaces for the OSRS Quests system
 */

/**
 * Experience reward for completing a quest
 */
export interface QuestRewardExperience {
  /** The skill that receives the experience */
  skill: string;
  /** The amount of experience gained */
  amount: number;
}

/**
 * An item rewarded from completing a quest
 */
export interface QuestRewardItem {
  /** The name of the item */
  name: string;
  /** The quantity of the item (defaults to 1 if not specified) */
  quantity?: number;
  /** Additional notes about the item reward (e.g. "choice of one", "untradeable") */
  note?: string;
}

/**
 * A feature/ability unlocked by completing a quest
 */
export interface QuestRewardUnlock {
  /** Description of what was unlocked */
  description: string;
  /** Optional URL to wiki page about the unlocked content */
  url?: string;
}

/**
 * An experience lamp rewarded from a quest
 */
export interface QuestRewardLamp {
  /** The amount of experience in the lamp */
  amount: number;
  /** Any restrictions on which skills the lamp can be used on */
  skillRestriction?: string | string[];
  /** Additional notes about the lamp */
  note?: string;
}

/**
 * Points awarded for completing a quest
 */
export interface QuestRewardPoints {
  /** The type of points (e.g. "Slayer", "Quest") */
  type: string;
  /** The number of points awarded */
  amount: number;
}

/**
 * A pet rewarded from completing a quest
 */
export interface QuestRewardPet {
  /** The name of the pet */
  name: string;
  /** Additional notes about the pet */
  note?: string;
}

/**
 * All possible rewards from completing a quest
 */
export interface QuestRewards {
  /** Experience rewards in different skills */
  experience?: QuestRewardExperience[];
  /** Item rewards */
  items?: QuestRewardItem[];
  /** Features/abilities unlocked */
  unlocks?: QuestRewardUnlock[];
  /** Experience lamps awarded */
  lamps?: QuestRewardLamp[];
  /** Points awarded */
  points?: QuestRewardPoints[];
  /** Pet rewards */
  pets?: QuestRewardPet[];
  /** Quest points awarded for completion */
  questPoints: number;
  /** Areas unlocked by completing the quest */
  areas?: string[];
}

/**
 * Represents a quest in Old School RuneScape
 */
export interface Quest {
  /** Unique identifier for the quest */
  id: number;

  /** The full name of the quest */
  name: string;

  /** Brief description of the quest's story/objective */
  description: string;

  /** The difficulty rating of the quest */
  difficulty: QuestDifficulty;

  /** Step-by-step guide to complete the quest */
  steps: string[];

  /** Requirements that must be met to start/complete the quest */
  requirements: Requirement[];

  /** Current status of the quest for the player */
  status: QuestStatus;

  /** Whether this is a miniquest rather than a full quest */
  miniquest: boolean;

  /** Machine-friendly version of the quest name for internal use */
  shortName: string;

  /** URL to the official OSRS Wiki guide for this quest */
  url: string;

  /** The quest series this belongs to (e.g. 'Elf', 'Mahjarrat') */
  series?: string | null;

  /** Whether this is a members-only quest */
  members: boolean;

  /** Number of quest points awarded for completion */
  questPoints: number;

  /** Approximate time to complete the quest */
  length: QuestLength;

  /** The RuneScape age when this quest was released */
  age: string;

  /** Location where the quest starts */
  startLocation: string;

  /** Items recommended (but not required) to complete the quest */
  recommendedItems: string[];

  /** Recommended (but not required) skill levels */
  recommendedSkills: { [skill: string]: number };

  /** Recommended prayers to use during the quest */
  recommendedPrayers: string[];

  /** All rewards for completing the quest */
  rewards: QuestRewards;
}
export { QuestStatus, QuestDifficulty, QuestLength };
