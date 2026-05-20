import { HunterRumourDefinition, HunterRumourTier } from './types';
import { RumourLocation } from './RumourLocation';
import { LeagueRegion } from '../../leagues';




/**
 * Represents a Hunter Rumour that can be assigned by a Hunter Guild Master. Contains all the necessary information about the rumour, including the creature, method, locations, required hunter level, tier, and any quest requirements. Provides methods to check if the rumour can be assigned to a specific master and if a player is eligible for the rumour based on their hunter level and completed quests.
 */
export class HunterRumour {

  /// Unique identifier for the rumour, typically derived from the creature name and method.
  readonly id: string;

  // The name of the creature that the rumour is about.
  readonly creature: string;

  // A brief description of the method to catch the creature.
  readonly method: string;

  readonly locations: RumourLocation[];

  readonly requiredHunterLevel: number;

  readonly tier: HunterRumourTier;

  readonly masterNames: string[];

  readonly questRequirements: string[];

  readonly notes?: string;

  readonly leagueRegions: string[];


  constructor(definition: HunterRumourDefinition) {
    this.id = definition.id;
    this.creature = definition.creature;
    this.method = definition.method;
    this.locations = [...definition.locations];
    this.requiredHunterLevel = definition.requiredHunterLevel;
    this.tier = definition.tier;
    this.masterNames = [...definition.masterNames];
    this.questRequirements = [...(definition.questRequirements ?? [])];
    this.notes = definition.notes;
    this.leagueRegions = [...(definition.leagueRegions ?? [])];
  }

  get wikiUrls(): string[] {
    return this.locations.map((location) => location.wikiUrl);
  }


  /**
   * Checks if this rumour can be assigned by the specified master based on the masterNames property, which lists the names of masters that can assign this rumour. This method is used to determine if a particular rumour is eligible to be assigned by a given Hunter Guild Master when players are looking for available rumours.
   * @param masterName The name of the Hunter Guild Master to check against the masterNames list for this rumour.
   * @returns A boolean indicating whether this rumour can be assigned by the specified master.
   */
  canBeAssignedByMaster(masterName: string): boolean {
    return this.masterNames.includes(masterName);
  }

  /**
   * Checks if a player is eligible for this rumour based on their hunter level and completed quests. This method verifies that the player's hunter level meets or exceeds the requiredHunterLevel for the rumour, and that they have completed all quests listed in the questRequirements property. This is used to ensure that players only receive rumours that they are qualified to pursue, based on their in-game progress and achievements.
   * @param hunterLevel The Hunter level of the player, which must meet or exceed the requiredHunterLevel for this rumour.
   * @param completedQuests An array of quest names that the player has completed, which must include all quests listed in the questRequirements for this rumour.
   * @returns A boolean indicating whether the player is eligible for this rumour.
   */
  isEligible(hunterLevel: number, completedQuests: string[] = []): boolean {
    const meetsLevel = hunterLevel >= this.requiredHunterLevel;
    const meetsQuests = this.questRequirements.every((quest) => completedQuests.includes(quest));
    return meetsLevel && meetsQuests;
  }
}
