import { OsrsAccount } from '../account/OsrsAccount';
import {
  CombatLevelRequirement,
  LevelRequirement,
  Requirement,
  RequirementType,
  SlayerLevelRequirement,
} from '../Requirement';
import { getMaxSkillBoost } from '../skills/SkillBoosts';

/**
 * The result of checking a single requirement against an account.
 */
export interface RequirementCheck {
  requirement: Requirement;
  label: string;
  met: boolean;
  /** False for requirement types the hiscores API can't confirm (item/location/quest/Slayer
   *  unlock/quest points) - these are advisory only, not a hard block. */
  verifiable: boolean;
  detail: string;
}

/**
 * The aggregate result of checking a full requirement list against an account.
 */
export interface EligibilityResult {
  eligible: boolean;
  checks: RequirementCheck[];
  unmet: RequirementCheck[];
  advisories: RequirementCheck[];
}

function evaluateLevel(req: LevelRequirement, account: OsrsAccount): RequirementCheck {
  const have = account.getSkill(req.skillName)?.level ?? 0;
  const effective = req.boostable ? have + getMaxSkillBoost(req.skillName) : have;
  const met = effective >= req.level;
  const boostNote = req.boostable && have < req.level ? ' (with boost)' : '';
  return {
    detail: met
      ? `Have ${have} ${req.skillName}${boostNote}`
      : `Have ${have} ${req.skillName}, need ${req.level}${req.boostable ? ' (boostable)' : ''}`,
    label: req.description,
    met,
    requirement: req,
    verifiable: true,
  };
}

function evaluateCombatLevel(req: CombatLevelRequirement, account: OsrsAccount): RequirementCheck {
  const have = account.combatLevel ?? 0;
  const met = have >= req.level;
  return {
    detail: met ? `Have combat level ${have}` : `Have combat level ${have}, need ${req.level}`,
    label: req.description,
    met,
    requirement: req,
    verifiable: true,
  };
}

function evaluateSlayerLevel(req: SlayerLevelRequirement, account: OsrsAccount): RequirementCheck {
  const have = account.getSkill('Slayer')?.level ?? 0;
  const met = have >= req.level;
  return {
    detail: met ? `Have ${have} Slayer` : `Have ${have} Slayer, need ${req.level}`,
    label: req.description,
    met,
    requirement: req,
    verifiable: true,
  };
}

/**
 * Evaluate a single requirement against an account.
 *
 * Level/CombatLevel/SlayerLevel are checked directly from hiscores data. Quest completion,
 * Quest Points, Item possession, Location access, and Slayer unlocks can't be confirmed from
 * hiscores alone, so they come back as unverifiable advisories (met: true, verifiable: false) -
 * callers with extra information (e.g. QuestTool.evaluateEligibility, which can recursively
 * resolve quest prerequisites) should override those specific checks afterward.
 */
export function evaluateRequirement(req: Requirement, account: OsrsAccount): RequirementCheck {
  switch (req.type) {
    case RequirementType.Level:
      return evaluateLevel(req as LevelRequirement, account);
    case RequirementType.CombatLevel:
      return evaluateCombatLevel(req as CombatLevelRequirement, account);
    case RequirementType.SlayerLevel:
      return evaluateSlayerLevel(req as SlayerLevelRequirement, account);
    case RequirementType.QuestPoint:
      // Treated as advisory: quest point counts are unreliable when account data comes from
      // a source that doesn't populate questPoints (e.g. partial hiscores imports that
      // default questPoints to 0). Callers with full account data should check directly.
      return {
        detail: 'Cannot verify from hiscores — check your Quest Points manually',
        label: req.description,
        met: true,
        requirement: req,
        verifiable: false,
      };
    default:
      // Quest / Item / Location / SlayerUnlock — hiscores can't confirm these on their own.
      return {
        detail: 'Cannot verify from hiscores — check manually',
        label: req.description,
        met: true,
        requirement: req,
        verifiable: false,
      };
  }
}

/**
 * Evaluate a full requirement list against an account.
 */
export function evaluateRequirements(requirements: Requirement[], account: OsrsAccount): EligibilityResult {
  const checks = requirements.map(req => evaluateRequirement(req, account));
  const unmet = checks.filter(c => c.verifiable && !c.met);
  const advisories = checks.filter(c => !c.verifiable);
  return { advisories, checks, eligible: unmet.length === 0, unmet };
}
