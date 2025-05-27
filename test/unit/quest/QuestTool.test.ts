import { QuestTool } from '../../../src/model/quest/QuestTool';
import { OsrsAccount } from '../../../src/model/account/OsrsAccount';
import { Quest } from '../../../src/model/quest/Quest';

describe('QuestTool', () => {
  it('should set and get OsrsAccount', () => {
    const acc = new OsrsAccount('Test');
    const tool = new QuestTool();
    expect(tool.getOsrsAccount()).toBeUndefined();
    tool.setOsrsAccount(acc);
    expect(tool.getOsrsAccount()).toBe(acc);
  });

  it('should get max skill boost for known and unknown skills', () => {
    expect(QuestTool.getMaxSkillBoost('Attack')).toBeGreaterThan(0);
    expect(QuestTool.getMaxSkillBoost('Herblore')).toBeGreaterThan(0);
    expect(QuestTool.getMaxSkillBoost('UnknownSkill')).toBe(0);
  });

  it('should get a quest by name (returns undefined for non-existent quest)', () => {
    expect(QuestTool.getQuestByName('Dragon Slayer')).toBeDefined();
    expect(QuestTool.getQuestByName('Nonexistent Quest')).toBeUndefined();
  });

  it('should return false if no account is set for canCompleteQuest', () => {
    const tool = new QuestTool();
    expect(tool.canCompleteQuest(undefined)).toBe(false);
  });

  // You can add more tests for canCompleteQuest with mock quests and accounts as needed
});
