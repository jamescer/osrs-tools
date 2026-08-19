import { describe, expect, it } from '@jest/globals';
import { OsrsAccount } from 'src/runescape/model/account/OsrsAccount';
import { Quest } from 'src/runescape/model/quest/Quest';
import { QuestTool } from 'src/runescape/model/quest/QuestTool';
import { LevelRequirement, QuestRequirement } from 'src/runescape/model/Requirement';

import { simpleQuest, skillQuest } from './mockQuests';

function makeAccount(skills: Record<string, number> = {}): OsrsAccount {
  const skillMap: Record<string, { level: number }> = {};
  for (const [name, level] of Object.entries(skills)) {
    skillMap[name] = { level };
  }
  return OsrsAccount.fromJson({ name: 'Test', questPoints: 0, skills: skillMap });
}

describe('QuestTool.evaluateEligibility', () => {
  it('is eligible for a quest with no requirements', () => {
    const result = QuestTool.evaluateEligibility(simpleQuest, makeAccount());
    expect(result.eligible).toBe(true);
    expect(result.checks).toHaveLength(0);
  });

  it('is ineligible with the unmet requirement surfaced when a Level requirement is not met', () => {
    const result = QuestTool.evaluateEligibility(skillQuest, makeAccount({ attack: 10 }));
    expect(result.eligible).toBe(false);
    expect(result.unmet).toHaveLength(1);
    expect(result.unmet[0].requirement).toBeInstanceOf(LevelRequirement);
  });

  it('is eligible when the Level requirement is met', () => {
    const result = QuestTool.evaluateEligibility(skillQuest, makeAccount({ attack: 60 }));
    expect(result.eligible).toBe(true);
  });

  it('recursively resolves a Quest-type prerequisite against the real quest catalog', () => {
    // "The Restless Ghost" is a real, zero-requirement quest in the catalog.
    const questWithRealPrereq: Quest = {
      ...simpleQuest,
      name: 'Synthetic Quest With Real Prereq',
      requirements: [new QuestRequirement('The Restless Ghost')],
    };

    const result = QuestTool.evaluateEligibility(questWithRealPrereq, makeAccount());
    expect(result.eligible).toBe(true);

    const questCheck = result.checks[0];
    expect(questCheck.verifiable).toBe(true);
    expect(questCheck.met).toBe(true);
    expect(questCheck.detail).toContain('requirements are currently met');
  });

  it('marks a Quest-type prerequisite that cannot be found as unmet, not advisory', () => {
    const questWithUnknownPrereq: Quest = {
      ...simpleQuest,
      name: 'Synthetic Quest With Unknown Prereq',
      requirements: [new QuestRequirement('Not A Real Quest')],
    };

    const result = QuestTool.evaluateEligibility(questWithUnknownPrereq, makeAccount());
    expect(result.eligible).toBe(false);
    expect(result.unmet).toHaveLength(1);
    expect(result.unmet[0].verifiable).toBe(true);
    expect(result.unmet[0].detail).toContain('Could not find quest data');
  });

  it('propagates an unmet nested prerequisite up through recursion', () => {
    // Real quest that itself requires an unmet Level - use it as a nested prereq.
    const realPrereq = QuestTool.getQuestByName('Dragon Slayer I');
    expect(realPrereq).toBeDefined();

    const questWithHardPrereq: Quest = {
      ...simpleQuest,
      name: 'Synthetic Quest Requiring Dragon Slayer I',
      requirements: [new QuestRequirement('Dragon Slayer I')],
    };

    // A near-empty account almost certainly doesn't meet Dragon Slayer I's requirements.
    const result = QuestTool.evaluateEligibility(questWithHardPrereq, makeAccount());
    expect(result.eligible).toBe(false);
    expect(result.unmet[0].detail).toContain("Dragon Slayer I's requirements aren't met yet");
  });

  it('short-circuits as eligible when the quest is already in the visited set (cycle guard)', () => {
    const visited = new Set<string>([simpleQuest.name]);
    const result = QuestTool.evaluateEligibility(simpleQuest, makeAccount(), visited);
    expect(result).toEqual({ advisories: [], checks: [], eligible: true, unmet: [] });
  });
});
