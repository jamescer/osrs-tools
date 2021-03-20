
/**
 * OsrsAccount
 */
 exports =class OsrsAccount {
    osrsAccount;
    constructor(acc) {
        this.osrsAccount = acc;
        this.setQuestPoints(0);
        this.setCombatLevel();
    }
    toString() {
        return this.osrsAccount.name + ':  \nCombat Level: ' + this.osrsAccount.main.combatLevel + '\nQuestPoints: ' + this.getQuestPoints();
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
        var attklvl = this.osrsAccount.main.skills.attack.level ? this.osrsAccount.main.skills.attack.level : 1;
        var strlvl = this.osrsAccount.main.skills.strength.level ? this.osrsAccount.main.skills.strength.level : 1;
        var deflvl = this.osrsAccount.main.skills.defence.level ? this.osrsAccount.main.skills.defence.level : 1;;
        var rangedlvl = this.osrsAccount.main.skills.ranged.level ? this.osrsAccount.main.skills.ranged.level : 1;
        var magiclvl = this.osrsAccount.main.skills.magic.level ? this.osrsAccount.main.skills.magic.level : 1;
        var praylvl = this.osrsAccount.main.skills.prayer.level ? this.osrsAccount.main.skills.prayer.level : 1;
        var hplvl = this.osrsAccount.main.skills.hitpoints.level ? this.osrsAccount.main.skills.hitpoints.level : 10;
        var x = [
            parseInt(
                0.325 *
                (attklvl +
                    strlvl)
            ),
            parseInt(0.325 * ((3 * rangedlvl) / 2)),
            parseInt(0.325 * ((3 * magiclvl) / 2)),
        ];
        var cbMax = Math.max.apply(Math, x);

        this.osrsAccount.main.combatLevel = parseInt(
            0.25 *
            (deflvl +
                hplvl +
                praylvl / 2) +
            cbMax
        );

    }


    completableQuests(arr) {
        arr.append(this)
        completableQuests(arr)
    }


}


