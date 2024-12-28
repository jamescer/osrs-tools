import {
    SlayerData,
    konar,
    vannaka,
    nieve,
    mazchna,
    turael,
    krystilia,
} from '../../resources/slayer/slayerData';
import { SlayerMaster } from './SlayerMaster';

class SlayerTool {
    slayerData: any;
    konarQuoMaten: SlayerMaster;
    vannaka: SlayerMaster;
    nieve: SlayerMaster;
    mazchna: SlayerMaster;
    turael: SlayerMaster;
    krystilia: SlayerMaster;

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
     */
    toString(): string {
        return 'SlayerTool :) WIP';
    }

    /**
     * Get Turael Data
     * @return {SlayerMaster} Json data for Turael
     */
    getTurael(): SlayerMaster {
        return this.turael;
    }

    /**
     * Get All Slayer Master Data
     * @return {Object} Json data for all Slayer masters
     */
    getSlayerData(): any {
        return this.slayerData;
    }

    /**
     * Get Vannaka Data
     * @return {SlayerMaster} Json data for Vannaka
     */
    getVannaka(): SlayerMaster {
        return this.vannaka;
    }

    /**
     * Get Nieve Data
     * @return {SlayerMaster} Json data for Nieve
     */
    getNieve(): SlayerMaster {
        return this.nieve;
    }

    /**
     * Get Mazchna Data
     * @return {SlayerMaster} Json data for Mazchna
     */
    getMaz(): SlayerMaster {
        return this.mazchna;
    }
    getMazchna(): SlayerMaster {
        return this.mazchna;
    }

    /**
     * Get Krystillia Data
     * @return {Object} Json data for Krystilia
     */
    getKrystilia(): SlayerMaster {
        return this.krystilia;
    }
    getKrys(): SlayerMaster {
        return this.krystilia;
    }

    /**
     * Get Konar Data
     * @return {Object} Json data for Konar
     */
    getKonarQuoMaten(): SlayerMaster {
        return this.konarQuoMaten;
    }
    getKonar(): SlayerMaster {
        return this.konarQuoMaten;
    }
}

export { SlayerTool };