import type { HunterRumour } from './HunterRumour';
import { HUNTER_RUMOUR_REGISTRY } from './Rumours';
import { HunterRumourTier } from './types';

export const HunterGuildMasterName = {
  ACO: { name: 'Aco' },
  CERVUS: { name: 'Cervus' },
  GILMAN: { name: 'Gilman' },
  ORNUS: { name: 'Ornus' },
  TECO: { name: 'Teco' },
};

/**
 * Represents a Hunter Guild Master, who can assign rumours to players based on their
 * Hunter level,
 * completed quests, and the tier of the rumour.
 * Each master has specific requirements for assigning rumours,
 * and some may require the completion of certain quests (e.g., "At First Light")
 * to unlock higher-tier rumours.
 * The HunterGuildMaster class encapsulates the properties and logic related to each master,
 * allowing for easy retrieval and eligibility checks when assigning rumours to players.
 */
export class HunterGuildMaster {
  readonly name: string; //name of the master
  readonly tier: HunterRumourTier; // the tier of rumour they give
  readonly minimumLevel: number; // required level for it to be assigned by this master
  readonly requiresAtFirstLight: boolean; // whether the master requires completion of "At First Light" to assign their rumours
  currentRumourId: string; // the ID of the currently assigned rumour, if any

  constructor(name: string, tier: HunterRumourTier, minimumLevel: number, requiresAtFirstLight = false) {
    this.name = name;
    this.tier = tier;
    this.minimumLevel = minimumLevel;
    this.requiresAtFirstLight = requiresAtFirstLight;
    this.currentRumourId = '';
  }

  public canAssignRumour(hunterLevel: number, completedQuests: string[] = []): boolean {
    if (hunterLevel < this.minimumLevel) {
      return false;
    }
    if (this.requiresAtFirstLight && !completedQuests.includes('At First Light')) {
      return false;
    }
    return true;
  }

  get wikiUrl(): string {
    return `https://runescape.wiki/w/${this.name}`;
  }

  get isAssigned(): boolean {
    return this.currentRumourId !== '';
  }

  // Assigns a rumour to this master by setting the currentRumourId. This method can be called when a new rumour is assigned to the master, allowing us to track which rumour is currently active for that master. When a rumour is completed, the currentRumourId can be cleared to indicate that the master is ready for a new assignment.
  assignRumour(rumourId: string): void {
    this.currentRumourId = rumourId;
  }

  get rumoursThatCanBeAssigned(): HunterRumour[] {
    return HUNTER_RUMOUR_REGISTRY.filter(rumour => rumour.canBeAssignedByMaster(this.name));
  }

  /**
   * When having a master assign a Hunter Rumour, it needs to check all the current assigned rumours from the other masters;
   * It cannot give a rumour that is already assigned from another master, even if it is eligible for assignment.
   * This method takes in the list of eligible rumours for this master and the list of currently assigned rumours from the other masters,
   * and returns a random rumour ID that can be assigned to this master without conflicts.
   * @param eligibleRumours
   * @param otherMasterRumours
   */
  public getRandomRumour(eligibleRumours: HunterRumour[], otherMasterRumours: HunterRumour[]): HunterRumour {
    const otherAssignedRumourIds = new Set(otherMasterRumours.map(rumour => rumour.id));

    const assignableRumours = eligibleRumours.filter(rumour => !otherAssignedRumourIds.has(rumour.id));

    if (assignableRumours.length === 0) {
      throw new Error(`No assignable rumours available for master ${this.name}`);
    }

    const randomIndex = Math.floor(Math.random() * assignableRumours.length);
    return assignableRumours[randomIndex];
  }
}
