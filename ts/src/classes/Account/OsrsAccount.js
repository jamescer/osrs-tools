/**
 * OsrsAccount
 * Author: James Cerniglia
 */
class OsrsAccount {

  /**
   *
   * @param {*} accountObject json from api wrapper
   */
  constructor(accountObject) {
    // uses an account under the schema returned from const osrshiscores = require('osrs-json-hiscores');
    this.osrsAccount = accountObject ? accountObject : null;
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
   * Get Skill for account
   * @return {Array} The array of skills associated with this account
   */
  getSkill(skillName) {
    return this.osrsAccount.main.skills[skillName.toLowerCase()];
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
   * @param {Number} x integer that is greater than or equal to 0
   */
  setQuestPoints(x) {
    if (x >= 0) {
      this.osrsAccount.main.questPoints = x;
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
    var attklvl = this.osrsAccount.main.skills.attack.level|| 1;
    var strlvl = this.osrsAccount.main.skills.strength.level || 1;
    var deflvl = this.osrsAccount.main.skills.defence.level|| 1;
    var rangedlvl = this.osrsAccount.main.skills.ranged.level|| 1;
    var magiclvl = this.osrsAccount.main.skills.magic.level|| 1;
    var praylvl = this.osrsAccount.main.skills.prayer.level|| 1;
    var hplvl = this.osrsAccount.main.skills.hitpoints.level|| 10;
    var x = [
      parseInt(0.325 * (attklvl + strlvl)),
      parseInt(0.325 * ((3 * rangedlvl) / 2)),
      parseInt(0.325 * ((3 * magiclvl) / 2)),
    ];
    var cbMax = Math.max.apply(Math, x);

    this.osrsAccount.main.combatLevel = parseInt(
      0.25 * (deflvl + hplvl + praylvl / 2) + cbMax
    );
  }
}
module.exports = {
  OsrsAccount,
};
