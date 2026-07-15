import { Skill } from '../Skill';
import { AttackUnlocks } from './AttackLevelUnlocks';

/**
 * Attack skill in OSRS
 * The Attack skill determines a player's accuracy and ability to wield certain weapons.
 * As players level up their Attack skill, they unlock the ability to use more powerful weapons with higher attack bonuses.
 * This class implements the Skill interface and includes specific unlocks related to the Attack skill.
 */
export class Attack implements Skill {
  level: number;
  experience: number;
  name: string;
  unlocks: any[];

  constructor() {
    this.level = 1;
    this.experience = 0;
    this.name = 'Attack';
    this.unlocks = [...AttackUnlocks];
  }
}
