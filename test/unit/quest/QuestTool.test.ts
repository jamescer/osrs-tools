import { QuestTool } from '../../../src/model/quest/QuestTool';
import { OsrsAccount } from '../../../src/model/account/OsrsAccount';
import { Quest } from '../../../src/model/quest/Quest';
import { account } from '../../resources/A_Squeezer_Main_Data';
import {
  simpleQuest,
  skillQuest,
  boostableSkillQuest,
  questReqQuest,
  recursiveQuest,
} from './mockQuests';

// Helper: create an account with a given skill level
function makeAccountWithSkill(skill: string, level: number) {
  return OsrsAccount.fromJson({
    name: 'Test',
    combatLevel: 3,
    questPoints: 0,
    skills: { [skill]: { level } },
  });
}

describe('QuestTool', () => {
  it('should set and get OsrsAccount', () => {
    const acc = OsrsAccount.fromJson(account);
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

  describe('canCompleteQuest', () => {
    it('returns true for quest with no requirements', () => {
      const tool = new QuestTool();
      tool.setOsrsAccount(
        OsrsAccount.fromJson({
          name: 'Test',
          combatLevel: 3,
          questPoints: 0,
          skills: {},
        })
      );
      expect(tool.canCompleteQuest(simpleQuest)).toBe(true);
    });

    it('returns true if account meets skill requirement', () => {
      const tool = new QuestTool();
      tool.setOsrsAccount(makeAccountWithSkill('attack', 60));
      expect(tool.canCompleteQuest(skillQuest)).toBe(true);
    });

    it('returns false if account does not meet skill requirement', () => {
      const tool = new QuestTool();
      tool.setOsrsAccount(makeAccountWithSkill('attack', 40));
      expect(tool.canCompleteQuest(skillQuest)).toBe(false);
    });

    it('returns true if account can boost to meet boostable skill requirement', () => {
      const tool = new QuestTool();
      // Herblore 86, boostable by 5, requirement 90
      tool.setOsrsAccount(makeAccountWithSkill('herblore', 86));
      expect(tool.canCompleteQuest(boostableSkillQuest)).toBe(true);
    });

    it('returns false if account cannot boost enough for boostable skill requirement', () => {
      const tool = new QuestTool();
      tool.setOsrsAccount(makeAccountWithSkill('herblore', 80));
      expect(tool.canCompleteQuest(boostableSkillQuest)).toBe(false);
    });

    it('returns true for quest with quest requirement if account can complete required quest', () => {
      const tool = new QuestTool();
      tool.setOsrsAccount(
        OsrsAccount.fromJson({
          name: 'Test',
          combatLevel: 3,
          questPoints: 0,
          skills: {},
        })
      );
      // Patch getQuestByName to return our mock quest
      jest.spyOn(QuestTool, 'getQuestByName').mockImplementation((name) => {
        if (name === 'Simple Quest') return simpleQuest;
        return undefined;
      });
      expect(tool.canCompleteQuest(questReqQuest)).toBe(true);
    });

    it('returns false for quest with quest requirement if required quest cannot be completed', () => {
      const tool = new QuestTool();
      tool.setOsrsAccount(
        OsrsAccount.fromJson({
          name: 'Test',
          combatLevel: 3,
          questPoints: 0,
          skills: {},
        })
      );
      jest
        .spyOn(QuestTool, 'getQuestByName')
        .mockImplementation((name) => undefined);
      expect(tool.canCompleteQuest(questReqQuest)).toBe(false);
    });

    it('handles recursive quest requirements', () => {
      const tool = new QuestTool();
      tool.setOsrsAccount(
        OsrsAccount.fromJson({
          name: 'Test',
          combatLevel: 3,
          questPoints: 0,
          skills: {},
        })
      );
      jest.spyOn(QuestTool, 'getQuestByName').mockImplementation((name) => {
        if (name === 'Quest Req Quest') return questReqQuest;
        if (name === 'Simple Quest') return simpleQuest;
        return undefined;
      });
      expect(tool.canCompleteQuest(recursiveQuest)).toBe(true);
    });

    it('returns false for undefined quest', () => {
      const tool = new QuestTool();
      tool.setOsrsAccount(
        OsrsAccount.fromJson({
          name: 'Test',
          combatLevel: 3,
          questPoints: 0,
          skills: {},
        })
      );
      expect(tool.canCompleteQuest(undefined)).toBe(false);
    });
  });
});
