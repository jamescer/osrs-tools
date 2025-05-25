interface OsrsAccountObject {
  name: string;
  main: {
    combatLevel: number;
    questPoints: number;
    skills: {
      [skillName: string]: {
        level: number;
      };
    };
  };
}

class OsrsAccount {
  private osrsAccount: OsrsAccountObject | null;

  constructor(accountObject: OsrsAccountObject | null) {
    this.osrsAccount = accountObject ? accountObject : null;
    this.setQuestPoints(0);
    this.setCombatLevel();
  }

  getName(): string | undefined {
    return this.osrsAccount?.name;
  }

  toString(): string {
    return (
      (this.osrsAccount?.name ?? "") +
      ":  \nCombat Level: " +
      (this.osrsAccount?.main.combatLevel ?? "") +
      "\nQuestPoints: " +
      this.getQuestPoints()
    );
  }

  getSkills(): { [skillName: string]: { level: number } } | undefined {
    return this.osrsAccount?.main.skills;
  }

  getSkill(skillName: string): { level: number } | undefined {
    return this.osrsAccount?.main.skills[skillName.toLowerCase()];
  }

  getQuestPoints(): number | undefined {
    return this.osrsAccount?.main.questPoints;
  }

  setQuestPoints(x: number): void {
    if (x >= 0 && this.osrsAccount) {
      this.osrsAccount.main.questPoints = x;
    }
  }

  getCombatLevel(): number | undefined {
    return this.osrsAccount?.main.combatLevel;
  }

  setCombatLevel(): void {
    if (this.osrsAccount) {
      const attklvl = this.osrsAccount.main.skills.attack?.level ?? 1;
      const strlvl = this.osrsAccount.main.skills.strength?.level ?? 1;
      const deflvl = this.osrsAccount.main.skills.defence?.level ?? 1;
      const rangedlvl = this.osrsAccount.main.skills.ranged?.level ?? 1;
      const magiclvl = this.osrsAccount.main.skills.magic?.level ?? 1;
      const praylvl = this.osrsAccount.main.skills.prayer?.level ?? 1;
      const hplvl = this.osrsAccount.main.skills.hitpoints?.level ?? 10;
      const x = [
        0.325 * (attklvl + strlvl),
        0.325 * ((3 * rangedlvl) / 2),
        0.325 * ((3 * magiclvl) / 2),
      ];
      const cbMax = Math.max(...x);

      this.osrsAccount.main.combatLevel =
        0.25 * (deflvl + hplvl + praylvl / 2) + cbMax;
    }
  }
}

export { OsrsAccount };
