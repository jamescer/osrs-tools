'use strict';
const {
  SlayerData,
  konar,
  vannaka,
  nieve,
  mazchna,
  turael,
  krystilia,
} = require('../assets/data/slayerData.js');
const { SlayerMaster } = require('./SlayerMaster.js');

class SlayerTool {
  constructor() {
    this.slayerData = SlayerData;
    this.konarQuoMaten = new SlayerMaster(konar);
    this.vannaka = new SlayerMaster(vannaka);
    this.nieve = new SlayerMaster(nieve);
    this.mazchna = new SlayerMaster(mazchna);
    this.turael = new SlayerMaster(turael);
    this.krystilia = new SlayerMaster(krystilia);
  }

  /**
   * to string func
   * @todo
   * */
  toString() {
    return 'SlayerTool :) WIP';
  }

  /**
   * Get Turael Data
   * @return {Object} Json data for Turael
   * */
  getTurael() {
    return this.turael;
  }

  /**
   * Get All Slayer Master Data
   * @return {Object} Json data for all Slayer masters
   * */
  getSlayerData() {
    return this.slayerData;
  }

  /**
   * Get Vannaka Data
   * @return {Object} Json data for Vannaka
   * */
  getVannaka() {
    return this.vannaka;
  }

  /**
   * Get Nieve Data
   * @return {Object} Json data for Nieve
   * */
  getNieve() {
    return this.nieve;
  }

  /**
   * Get Mazchna Data
   * @return {Object} Json data for Mazchna
   * */
  getMaz() {
    return this.mazchna;
  }
  getMazchna() {
    return this.mazchna;
  }

  /**
   * Get Krystillia Data
   * @return {Object} Json data for Krystilia
   * */
  getKrystilia() {
    return this.krystilia;
  }
  getKrys() {
    return this.krystilia;
  }

  /**
   * Get Konar Data
   * @return {Object} Json data for Konar
   * */
  getKonarQuoMaten() {
    return this.konarQuoMaten;
  }
  getKonar() {
    return this.konarQuoMaten;
  }
}

module.exports = exports = { SlayerTool };

// module.exports = { SlayerTool };
// exports.SlayerTool = SlayerTool;
