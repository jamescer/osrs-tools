import {
  CombatLevelRequirement,
  LevelRequirement,
  QuestRequirement,
  Requirement,
  RequirementType,
  SlayerLevelRequirement,
  SlayerUnlockRequirement,
} from '../../Requirement';
import { SlayerAssignmentContext } from './types';

function toLowerCaseSet(values?: Iterable<string>): Set<string> {
  const result = new Set<string>();
  if (!values) return result;
  for (const value of values) result.add(value.toLowerCase());
  return result;
}

/**
 * Checks whether a single requirement is satisfied by the given player context.
 * Requirement types that don't gate task assignment (e.g. items to bring) are
 * always treated as satisfied - only Slayer level, combat level, skill level,
 * quest, and Slayer unlock requirements can block an assignment.
 */
function meetsRequirement(requirement: Requirement, context: SlayerAssignmentContext): boolean {
  switch (requirement.type) {
    case RequirementType.SlayerLevel:
      return (context.slayerLevel ?? 0) >= (requirement as SlayerLevelRequirement).level;
    case RequirementType.CombatLevel:
      return (context.combatLevel ?? 0) >= (requirement as CombatLevelRequirement).level;
    case RequirementType.Level: {
      const levelRequirement = requirement as LevelRequirement;
      const playerLevel = context.skillLevels?.[levelRequirement.skillName] ?? 0;
      return playerLevel >= levelRequirement.level;
    }
    case RequirementType.Quest:
      return toLowerCaseSet(context.completedQuests).has((requirement as QuestRequirement).questName.toLowerCase());
    case RequirementType.SlayerUnlock:
      return toLowerCaseSet(context.unlockedRewards).has((requirement as SlayerUnlockRequirement).name.toLowerCase());
    default:
      return true;
  }
}

/**
 * Checks whether every requirement in the list is satisfied by the given player context.
 * A task with no requirements is always eligible.
 */
export function meetsRequirements(requirements: Requirement[], context: SlayerAssignmentContext): boolean {
  return requirements.every(requirement => meetsRequirement(requirement, context));
}
