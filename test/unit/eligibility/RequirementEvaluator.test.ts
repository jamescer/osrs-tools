import { describe, expect, it } from '@jest/globals';
import { OsrsAccount } from 'src/runescape/model/account/OsrsAccount';
import { evaluateRequirement, evaluateRequirements } from 'src/runescape/model/eligibility/RequirementEvaluator';
import {
  CombatLevelRequirement,
  ItemRequirement,
  LevelRequirement,
  LocationRequirement,
  QuestPointRequirement,
  QuestRequirement,
  SlayerLevelRequirement,
} from 'src/runescape/model/Requirement';

function makeAccount(skills: Record<string, number>): OsrsAccount {
  const skillMap: Record<string, { level: number }> = {};
  for (const [name, level] of Object.entries(skills)) {
    skillMap[name] = { level };
  }
  return OsrsAccount.fromJson({ name: 'Test', questPoints: 0, skills: skillMap });
}

describe('evaluateRequirement', () => {
  it('marks a Level requirement met when the account has enough of the skill', () => {
    const account = makeAccount({ Attack: 70 });
    const check = evaluateRequirement(new LevelRequirement('Attack', 60), account);
    expect(check.met).toBe(true);
    expect(check.verifiable).toBe(true);
  });

  it('marks a Level requirement unmet when the account falls short', () => {
    const account = makeAccount({ Attack: 40 });
    const check = evaluateRequirement(new LevelRequirement('Attack', 60), account);
    expect(check.met).toBe(false);
    expect(check.detail).toContain('need 60');
  });

  it('accounts for the max boost on a boostable Level requirement', () => {
    // Herblore's max boost is 5, per SkillBoosts.ts
    const account = makeAccount({ Herblore: 85 });
    const check = evaluateRequirement(new LevelRequirement('Herblore', 90, true), account);
    expect(check.met).toBe(true);
    expect(check.detail).toContain('with boost');
  });

  it('does not let a boost satisfy a non-boostable Level requirement', () => {
    const account = makeAccount({ Attack: 85 });
    const check = evaluateRequirement(new LevelRequirement('Attack', 90, false), account);
    expect(check.met).toBe(false);
  });

  it('checks CombatLevel directly from the account', () => {
    const highCombat = makeAccount({ Attack: 99, Defence: 99, Hitpoints: 99, Strength: 99 });
    const lowCombat = makeAccount({ Attack: 1, Defence: 1, Hitpoints: 10, Strength: 1 });

    expect(evaluateRequirement(new CombatLevelRequirement(80), highCombat).met).toBe(true);
    expect(evaluateRequirement(new CombatLevelRequirement(80), lowCombat).met).toBe(false);
  });

  it('checks SlayerLevel directly from the Slayer skill', () => {
    const account = makeAccount({ Slayer: 55 });
    expect(evaluateRequirement(new SlayerLevelRequirement(50), account).met).toBe(true);
    expect(evaluateRequirement(new SlayerLevelRequirement(60), account).met).toBe(false);
  });

  it('treats an unset skill as level 0', () => {
    const account = makeAccount({});
    // Level 10 comfortably exceeds Magic's max boost (4), so an unset skill can't pass via boost.
    const check = evaluateRequirement(new LevelRequirement('Magic', 10), account);
    expect(check.met).toBe(false);
    expect(check.detail).toContain('Have 0 Magic');
  });

  it.each([
    ['QuestPoint', new QuestPointRequirement(50)],
    ['Item', new ItemRequirement('Rune axe')],
    ['Location', new LocationRequirement('Karamja')],
    ['Quest', new QuestRequirement('Recipe for Disaster')],
  ])('marks %s requirements as unverifiable advisories, not blockers', (_label, req) => {
    const account = makeAccount({});
    const check = evaluateRequirement(req, account);
    expect(check.verifiable).toBe(false);
    expect(check.met).toBe(true);
  });
});

describe('evaluateRequirements', () => {
  it('is eligible when every verifiable requirement is met, ignoring advisories', () => {
    const account = makeAccount({ Attack: 70 });
    const result = evaluateRequirements([new LevelRequirement('Attack', 60), new ItemRequirement('Rune axe')], account);
    expect(result.eligible).toBe(true);
    expect(result.unmet).toHaveLength(0);
    expect(result.advisories).toHaveLength(1);
  });

  it('is ineligible when any verifiable requirement is unmet', () => {
    const account = makeAccount({ Attack: 10 });
    const result = evaluateRequirements([new LevelRequirement('Attack', 60), new ItemRequirement('Rune axe')], account);
    expect(result.eligible).toBe(false);
    expect(result.unmet).toHaveLength(1);
    expect(result.unmet[0].requirement).toBeInstanceOf(LevelRequirement);
  });

  it('is eligible for an empty requirement list', () => {
    const result = evaluateRequirements([], makeAccount({}));
    expect(result.eligible).toBe(true);
    expect(result.checks).toHaveLength(0);
  });
});
