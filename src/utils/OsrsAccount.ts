import { Skill } from './Skill';

export interface OsrsAccountObject {
  osrsAccount: object;

  main: {
    questPoints: number;
    combatLevel: number;
    skills: {
      overall: SkillObject;
      attack: SkillObject;
      defence: SkillObject;
      strength: SkillObject;
      hitpoints: SkillObject;
      ranged: SkillObject;
      prayer: SkillObject;
      magic: SkillObject;
      cooking: SkillObject;
      woodcutting: SkillObject;
      fletching: SkillObject;
      fishing: SkillObject;
      firemaking: SkillObject;
      crafting: SkillObject;
      smithing: SkillObject;
      mining: SkillObject;
      herblore: SkillObject;
      agility: SkillObject;
      thieving: SkillObject;
      slayer: SkillObject;
      farming: SkillObject;
      runecraft: SkillObject;
      hunter: SkillObject;
      construction: SkillObject;
    };
  };
  name: string;
  combatLevel: number;
}

export interface SkillObject {
  rank: number;
  level: number;
  xp: number;
}

/**
 * OsrsAccount
 * Author: James Cerniglia
 */
export class OsrsAccount {
  osrsAccount: OsrsAccountObject;

  main: {
    questPoints: number;
    combatLevel: number;
    skills: {
      overall: SkillObject;
      attack: SkillObject;
      defence: SkillObject;
      strength: SkillObject;
      hitpoints: SkillObject;
      ranged: SkillObject;
      prayer: SkillObject;
      magic: SkillObject;
      cooking: SkillObject;
      woodcutting: SkillObject;
      fletching: SkillObject;
      fishing: SkillObject;
      firemaking: SkillObject;
      crafting: SkillObject;
      smithing: SkillObject;
      mining: SkillObject;
      herblore: SkillObject;
      agility: SkillObject;
      thieving: SkillObject;
      slayer: SkillObject;
      farming: SkillObject;
      runecraft: SkillObject;
      hunter: SkillObject;
      construction: SkillObject;
    };
  };
  name: string;
  combatLevel: number;

  constructor(accountObject: OsrsAccountObject) {
    // uses an account under the schema returned from const osrshiscores = require('osrs-json-hiscores');
    this.osrsAccount = accountObject ?? null;
    this.setQuestPoints(0);
    this.setCombatLevel();
  }

  toString() {
    return (
      this.osrsAccount.name +
      ':  \nCombat Level: ' +
      this.osrsAccount.main.combatLevel +
      '\nQuestPoints: ' +
      this.getQuestPoints()
    );
  }

  /**
   * Get Skills for account
   * @return {Array} The array of skills associated with this account
   */
  getSkills() {
    return this.osrsAccount.main.skills;
  }

  /**
   * Get Quest Points for account
   * @return {Number} The amount of quest points for this account
   */
  getQuestPoints() {
    return this.osrsAccount.main.questPoints;
  }

  /**
   * Set Quest Points for account
   * @param {Number} x integer that is greater than or equal to 0, cannot put < 0
   */
  setQuestPoints(x) {
    if (x >= 0) {
      this.osrsAccount.main.questPoints = x;
    } else {
      this.osrsAccount.main.questPoints = 0;
    }
  }
  /**
   * Get Combat Level for account
   * @return {Number} The combat level for this account
   */
  getCombatLevel() {
    return this.osrsAccount.main.combatLevel;
  }

  /**
   * Set Combat Level for account
   */
  setCombatLevel() {
    var attklvl = this.osrsAccount.main.skills.attack.level ?? 1;
    var strlvl = this.osrsAccount.main.skills.strength.level ?? 1;
    var deflvl = this.osrsAccount.main.skills.defence.level ?? 1;
    var rangedlvl = this.osrsAccount.main.skills.ranged.level ?? 1;
    var magiclvl = this.osrsAccount.main.skills.magic.level ?? 1;
    var praylvl = this.osrsAccount.main.skills.prayer.level ?? 1;
    var hplvl = this.osrsAccount.main.skills.hitpoints.level ?? 10;
    var x = [
      Number(0.325 * (attklvl + strlvl)),
      Number(0.325 * ((3 * rangedlvl) / 2)),
      Number(0.325 * ((3 * magiclvl) / 2)),
    ];
    var cbMax = Math.max.apply(Math, x);
    var cb = parseInt(0.25 * (deflvl + hplvl + praylvl / 2) + cbMax);
    this.osrsAccount.main.combatLevel = cb;
    return true;
  }

  /**
   * Get Skill level for key input
   * @return {Number} The combat level for this account\
   * Example: "getSkillLevel('farming'"
   */
  getSkillLevel(skillName) {
    if (skillName) {
      var skillLowercase = skillName.toLowerCase();
      if (this.osrsAccount.main.skills[skillLowercase].level) {
        return this.osrsAccount.main.skills[skillLowercase].level;
      } else {
        console.log('No SkillName found for ' + skillName);
        return false;
      }
    }
    console.log('No SkillName found for ' + skillName);
    return false;
  }

  /**
   * Get Skill level for key input
   * Example: "getFarmingLevel()
   */
  getAttackLevel() {
    if (this.osrsAccount.main.skills.attack.level) {
      return this.osrsAccount.main.skills.attack.level;
    }
    console.log('No attack found for ' + this.osrsAccount.name);
    return false;
  }
  /**
   * Get Skill level for key input
   * Example: "getFarmingLevel()
   */
  getStrengthLevel() {
    if (this.osrsAccount.main.skills.strength.level) {
      return this.osrsAccount.main.skills.strength.level;
    }
    console.log('No strength found for ' + this.osrsAccount.name);
    return false;
  }
  /**
   * Get Skill level for key input
   * Example: "getFarmingLevel()
   */
  getDefenceLevel() {
    if (this.osrsAccount.main.skills.defence.level) {
      return this.osrsAccount.main.skills.defence.level;
    }
    console.log('No defence found for ' + this.osrsAccount.name);
    return false;
  }
  /**
   * Get Skill level for key input
   * Example: "getFarmingLevel()
   */
  getRangedLevel() {
    if (this.osrsAccount.main.skills.ranged.level) {
      return this.osrsAccount.main.skills.ranged.level;
    }
    console.log('No ranged found for ' + this.osrsAccount.name);
    return false;
  }
  /**
   * Get Skill level for key input
   * Example: "getFarmingLevel()
   */
  getPrayerLevel() {
    if (this.osrsAccount.main.skills.prayer.level) {
      return this.osrsAccount.main.skills.prayer.level;
    }
    console.log('No prayer found for ' + this.osrsAccount.name);
    return false;
  }
  /**
   * Get Skill level for key input
   * Example: "getFarmingLevel()
   */
  getMagicLevel() {
    if (this.osrsAccount.main.skills.prayer.level) {
      return this.osrsAccount.main.skills.prayer.level;
    }
    console.log('No prayer found for ' + this.osrsAccount.name);
    return false;
  }

  /**
   * Get Skill level for key input
   * Example: "getFarmingLevel()
   */
  getRunecraftingLevel() {
    if (this.osrsAccount.main.skills.runecraft.level) {
      return this.osrsAccount.main.skills.runecraft.level;
    }
    console.log('No runecraft found for ' + this.osrsAccount.name);
    return false;
  }
  /**
   * Get Skill level for key input
   * Example: "getFarmingLevel()
   */
  getConstructionLevel() {
    if (this.osrsAccount.main.skills.construction.level) {
      return this.osrsAccount.main.skills.construction.level;
    }
    console.log('No construction found for ' + this.osrsAccount.name);
    return false;
  }

  /**
   * Get Skill level for key input
   * Example: "getFarmingLevel()
   */
  getHitpointsLevel() {
    if (this.osrsAccount.main.skills.hitpoints.level) {
      return this.osrsAccount.main.skills.hitpoints.level;
    }
    console.log('No hitpoints found for ' + this.osrsAccount.name);
    return false;
  }
}
