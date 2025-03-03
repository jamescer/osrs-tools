import { OsrsAccount } from '../account/OsrsAccount';
import { Quest } from './Quest';

class QuestTool {
    private questObject: any;
    private questArray: any;
    private subQuestArray: any;
    private osrsAccount: OsrsAccount | undefined;

    constructor() {
        // todo need to import these data from a typescript file where its defined/stored
        this.questObject = [];
        this.questArray = [];
        this.subQuestArray = [];
    }

    /**
     * to string func
     * @todo    Implement this function
     * @return  {String} The string representation of the class object. 
     */
    toString(): string {
        return 'QuestTool :) WIP';
    }

    /**
     * Get the data for a quest
     * @param  {String} questName The name of the quest
     * @return {Object} The data for the input quest in a JSON object.
     * */
    getQuest(questName: string): Quest | undefined {
        if (typeof questName === 'string' && this.questObject[questName]) {
            // return new Quest(this.questObject[questName]); TODO
        }
        return undefined;
    }

    /**
     * Get the data for a quest
     * @param  {String} questName The name of the quest
     * @return {Object} The data for the input quest in a JSON object.
     * */
    getQuestByName(questName: string): Quest | undefined {
        return this.getQuest(questName);
    }

    /**
     * Get the data for a quest
     * @param  {String} subQuestName The name of the subquest
     * @return {Object} The data for the input subquest in a JSON object.
     * */
    getSubQuest(subQuestName: string): any | undefined {
        return this.subQuestArray.find((x: any) => x.name === subQuestName);
    }

    // Define highestBoost method, switch case omitted for brevity

    /**
     * Add two numbers together
     * @todo Need to implement Recipe for disaster functionality
     * @param  {String} quest The either string or quest object of the quest to be determined completeable or not.
     * @return {Boolean}  If the account currently tied to the tool can complete the quest.
     * */
    canCompleteQuest(quest: string | Quest | undefined): boolean {
        // Implementation omitted for brevity
        return true; // Placeholder return value
    }

    // Define completableQuests method, implementation omitted for brevity

    /**
     * Set the account to be used in this quest tool
     * @param  {OsrsAccount} acc1 The osrs Account to be associated with this class object.
     * */
    setOsrsAccount(acc1: OsrsAccount): boolean {
        if (acc1) {
            // this.osrsAccount = new OsrsAccount(acc1); TODO
            return true;
        }
        return false;
    }

    // Define other methods, implementation omitted for brevity

    /**
     * Get the osrs account associated with this quest tool
     * @return  {OsrsAccount | undefined} The osrs Account associated with this class object.
     * */
    getOsrsAccount(): OsrsAccount | undefined {
        return this.osrsAccount;
    }

    // Define other getters, implementation omitted for brevity
}

export { QuestTool };