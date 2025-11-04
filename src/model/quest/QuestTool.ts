import { Cache } from '../../utils/cache';
import { OsrsAccount } from '../account/OsrsAccount';
import { LevelRequirement, QuestRequirement, RequirementType } from '../Requirement';
import { Quest } from './Quest';

class QuestTool {
  private osrsAccount: OsrsAccount | undefined;
  private static questCache = new Cache<Quest>({ maxSize: 200, ttl: 3600000 }); // 1 hour TTL

  constructor(account?: OsrsAccount) {
    this.osrsAccount = account;
  }

  /**
   * Set the account to be used in this quest tool
   * @param  {OsrsAccount} acc1 The osrs Account to be associated with this class object.
   */
  setOsrsAccount(acc1: OsrsAccount): boolean {
    if (acc1) {
      this.osrsAccount = acc1;
      return true;
    }
    return false;
  }

  /**
   * Get the osrs account associated with this quest tool
   * @return  {OsrsAccount | undefined} The osrs Account associated with this class object.
   */
  getOsrsAccount(): OsrsAccount | undefined {
    return this.osrsAccount;
  }

  /**
   * Determine if the account can complete a quest, including recursively checking quest requirements.
   * @param quest The quest to check (must be a Quest instance)
   * @param visited (internal) Set of quest names already checked to prevent infinite recursion
   */
  canCompleteQuest(quest: Quest | undefined, visited: Set<string> = new Set()): boolean {
    if (!this.osrsAccount) return false;
    if (!quest) return false;
    if (visited.has(quest.name)) return true; // Prevent infinite loops
    visited.add(quest.name);

    // check requirements
    if (!quest.requirements || quest.requirements.length === 0) return true;
    for (const req of quest.requirements) {
      if (req.type === RequirementType.Quest) {
        // Recursively check quest requirements
        const questReq = req as QuestRequirement;
        if (
          !questReq ||
          !this.canCompleteQuest(QuestTool.getQuestByName(questReq.questName), visited)
        ) {
          return false;
        }
      } else if (req.type === RequirementType.Level) {
        // Check if the account meets the level requirement
        const levelReq = req as LevelRequirement;
        const skill = this.osrsAccount.getSkill(levelReq.skillName);
        if (!skill) {
          return false; // Skill not found in account
        }
        // If the skill is boostable, we can check if the current level + max boost is enough
        if (levelReq.boostable) {
          if (skill.level + QuestTool.getMaxSkillBoost(levelReq.skillName) < levelReq.level) {
            return false;
          }
        } else if (skill.level < levelReq.level) {
          return false;
        }
      }
    }
    return true;
  }

  /**
   * Static utility to get a Quest instance by its name.
   * This assumes all quests are exported as default from their respective files in quest/all/.
   * @param questName The name of the quest to retrieve
   * @returns Quest instance or undefined if not found
   */
  static getQuestByName(questName: string): Quest | undefined {
    // Normalize quest name to match file naming convention
    const normalized = questName
      .replace(/[^a-zA-Z0-9]/g, '') // Remove non-alphanumeric
      .replace(/\s+/g, '') // Remove spaces
      .replace(/^./, c => c.toUpperCase());

    // Check cache first
    const cached = QuestTool.questCache.get(normalized);
    if (cached) {
      return cached;
    }

    try {
      // Dynamically require the quest file
      // Note: This only works in Node.js, not in browser environments
      // and assumes all quest files are named as <QuestName>.ts/js and exported as default
      // Example: 'Dragon Slayer' => './all/DragonSlayer'
      // You may want to maintain a map for production use
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const questModule = require(`./all/${normalized}`);
      const quest = questModule.default || questModule;

      // Cache the result if found
      if (quest) {
        QuestTool.questCache.set(normalized, quest);
      }

      return quest;
    } catch (e) {
      return undefined;
    }
  }

  /**
   * Get the maximum boost for a given skill, based on OSRS Wiki data.
   * @param skillName The name of the skill (case-insensitive, e.g. 'Attack', 'Herblore')
   * @returns The maximum boost amount for the skill (positive integer, or 0 if unboostable)
   */
  static getMaxSkillBoost(skillName: string): number {
    // Data from https://oldschool.runescape.wiki/w/Temporary_skill_boost
    const boosts: { [key: string]: number } = {
      // No boost
      Agility: 5,

      Attack: 5,

      // Super combat potion, Overload(+)
      Defence: 5,

      // Summer pie
      Herblore: 5,

      
      // Volcanic ash, Summer pie
Crafting: 3,

      
      
// Super combat potion, Overload(+)
Magic: 4,

      
// Mushroom pie
Fletching: 3,

      
      
// Ranging potion, Overload(+)
Prayer: 2,

      // Super combat potion, Overload(+)
      Strength: 5,

      
      // Admiral pie
Cooking: 5,

      
      
// Overload(+), Imbued heart
Ranged: 4,

      // Preserve, Prayer-boosting items
      Hitpoints: 0,

      
      // Spicy stew (yellow)
Farming: 5,

      
      
// Wild pie
Hunter: 5,

      // Hunter potion
      Mining: 3,

      
      // Spicy stew (orange)
Construction: 5,

      
      
// Botanical pie
Thieving: 5,

      // Spicy stew (orange)
      Fishing: 5,

      
      // Chef's delight(m)
Firemaking: 4,

      
      // Fletching potion
Slayer: 2,

      // Garden pie
      Runecraft: 5,

      // Dwarven stout(m)
      Smithing: 4,

      // Spicy stew (red)
      Woodcutting: 3, // Spicy stew (orange)
      // Add more as needed
    };
    const normalized = skillName.charAt(0).toUpperCase() + skillName.slice(1).toLowerCase();
    return boosts[normalized] ?? 0;
  }
}

export { QuestTool };
