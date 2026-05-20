
/**
 * OSRS Skill
 */
export interface Skill {
    level: number;
    experience: number;
    name: string;
    unlocks: LevelUnlock[];
}


/**
 * When you level up in a skill, you may unlock new content such as quests, areas, or abilities
 * . This interface represents such unlocks.
 * Each unlock has a required level, a type (e.g., "Quest", "Area", "Ability"),
 * and a description of what is unlocked.
 * This allows us to track not only the player's skill levels but also the new content they have access to as they progress in their skills.
 */
export interface LevelUnlock {
  level: number;
  type: string;
  description: string;
}
