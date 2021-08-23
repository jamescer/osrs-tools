import { OsrsAccount } from '../OsrsAccount';
import { subQuestArray } from '../../data/quest/subQuestArray';
const questData = require('../../data/quest/questData.js');
const questDataArray = require('../data/questDataArray.js');
const trees = require('../data/farming/tree.json');
const fruitTrees = require('../../data/farming/fruitTrees.json');
const { Seed } = require('./Seed.js');

class FarmingTool {
  osrsAccount: OsrsAccount;
  trees: any;
  fruitTrees: any;
  constructor(osrsAccount) {
    this.osrsAccount = acc1 != null ? new OsrsAccount(acc1) : null;
    this.trees = questDataArray;
    this.fruitTrees = subQuestArray;
  }
  /**
   * to string func
   * @todo Possibly return all methods etc with descriptions
   * */
  toString() {
    return 'FarmingTool :) WIP';
  }

  /**
   * Set the account to be used in this quest tool
   * @param  {} skillName The osrs Account to be associated with this class object.
   * */
  getTreeRun() {
    if (this.hasOsrsAccount()) {
      return false;
    } else {
      //Lets get levels for tree run
      var level = this.osrsAccount.getFarmingLevel();
    }
  }
  /**
   * Set the account to be used in this quest tool
   * @param  {} skillName The osrs Account to be associated with this class object.
   * */
  getItemsForSeed(seed: Seed) {}

  /**
   * getFruitTreeRun
   */
  getFruitTreeRun() {
    if (this.hasOsrsAccount()) {
      return false;
    } else {
      var level = this.osrsAccount.getFarmingLevel();
    }
  }

  /**
   * getCombinedTreeRun
   * */
  getCombinedTreeRun() {
    if (this.hasOsrsAccount()) {
      return false;
    } else {
      var level = this.osrsAccount.getFarmingLevel();
    }
  }

  /**
   * Set the account to be used in this quest tool
   * @param  {Object} skillName The osrs Account to be associated with this class object.
   * */
  setOsrsAccount(acc1) {
    if (acc1) {
      this.osrsAccount = new OsrsAccount(acc1);
      return true;
    } else {
      return false;
    }
  }

  /**
   * Set the account to be used in this quest tool
   * @param  {Object} skillName The osrs Account to be associated with this class object.
   * */
  setAccount(acc1) {
    if (acc1) {
      this.osrsAccount = new OsrsAccount(acc1);
    }
  }
  /**
   * if the tool has an osrsaccount associated with
   * @return  {Boolean}
   * */
  hasOsrsAccount() {
    if (this.osrsAccount != null && this.osrsAccount) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Set the account to be used in this quest tool
   * @return  {OsrsAccount} osrsAccount The osrs Account to be associated with this class object.
   * */
  getOsrsAccount() {
    return this.osrsAccount;
  }
}

module.exports = { FarmingTool };
// exports.QuestTool = QuestTool;
