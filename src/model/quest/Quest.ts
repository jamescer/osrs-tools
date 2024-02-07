import { Requirement } from './Requirement';

/**
 * Rewards are earned by Completing Quests
 */
interface Rewards {
    [key: string]: any;
}

/**
 * A Subquest is a smaller quest that can be needed by a Quest
 */
interface Subquest {
    [key: string]: any;
}


class Quest {
    miniquest: boolean;
    shortName: string;
    name: string;
    url: string;
    members: boolean;
    difficulty: string;
    questLength: string;
    series: string;
    subquests: Subquest[];
    rewards: Rewards;
    requirements: Requirement[];

    constructor(
        miniquest: boolean,
        shortName: string,
        name: string,
        url: string,
        members: boolean,
        difficulty: string,
        questLength: string,
        requirements: Requirement[],
        rewards: Rewards,
        series: string,
        subquests: Subquest[]
    ) {
        this.name = name;
        this.miniquest = miniquest;
        this.shortName = shortName;
        this.url = url;
        this.members = members;
        this.difficulty = difficulty;
        this.questLength = questLength;
        this.series = series;
        this.subquests = subquests;
        this.rewards = rewards;
        this.requirements = requirements;
    }

    /**
     * Stringify quest
     * @returns {String} string description of class
     */
    toString(): string {
        return this.name;
    }
}

export { Quest };