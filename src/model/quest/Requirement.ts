class Requirement {

}

class SkillRequirement extends Requirement {
    skillName: string;
    level: number;
    boostable: boolean;

    constructor(skillName: string, level: number, boostable: boolean) {
        super();
        this.skillName = skillName;
        this.level = level;
        this.boostable = boostable;
    }

    getSkillName(): string {
        return this.skillName;
    }

    getLevel(): number {
        return this.level;
    }

    getBoostable(): boolean {
        return this.boostable;
    }

    toString(): string {
        return `${this.skillName}: Level ${this.level} (Boostable: ${this.boostable})`;
    }
}

class QuestRequirement extends Requirement {
    questName: string;

    constructor(questName: string) {
        super();
        this.questName = questName;
    }

    getQuestName(): string {
        return this.questName;
    }

    toString(): string {
        return this.questName;
    }
}

function test(): void {
    const reqs = {
        "quests": [
            "Big Chompy Bird Hunting",
            "Jungle Potion"
        ],
        "skills": [
            { "skill": "smithing", "level": 4, "boostable": false },
            { "skill": "herblore", "level": 8, "boostable": false },
            { "skill": "ranged", "level": 30, "boostable": false },
            { "skill": "fletching", "level": 30, "boostable": false },
            { "skill": "strength", "level": 10, "boostable": false },
            { "skill": "prayer", "level": 43, "boostable": false }
        ]
    };

    const reqArr: (QuestRequirement | SkillRequirement)[] = [];
    if (reqs.quests) {
        for (const questName of reqs.quests) {
            reqArr.push(new QuestRequirement(questName));
        }
    }
    if (reqs.skills) {
        for (const skillData of reqs.skills) {
            reqArr.push(new SkillRequirement(skillData.skill, skillData.level, skillData.boostable));
        }
    }
    console.log(reqArr);
}
test();

export { Requirement, SkillRequirement, QuestRequirement };