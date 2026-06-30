import { HunterRumourTier, HunterRumourAssignment } from './types';
import { HunterRumour } from './HunterRumour';
import { HunterGuildMaster, HunterGuildMasterName } from './HunterGuildMaster';
import { HUNTER_RUMOUR_REGISTRY } from './Rumours';

/**
 * Defines the Hunter Guild Masters and their properties, including the minimum Hunter level required to receive rumours from them, whether they require the completion of "At First Light" to assign rumours, and the tier of rumours they provide. The HunterGuild class provides methods to retrieve masters by name, get all masters, retrieve rumours by ID, determine eligible rumours for a player based on their level and completed quests, and assign a rumour to a player while ensuring all eligibility criteria are met. The Hunter Guild module serves as the central hub for all logic related to the Hunter Guild, its masters, and the assignment of rumours to players.
 * Note: The rumours are defined in a separate module to avoid circular dependencies, as HunterRumour references HunterGuildMaster and vice versa.
 */
const HUNTER_GUILD_MASTERS: HunterGuildMaster[] = [
  new HunterGuildMaster('Gilman', 'Novice', 46),
  new HunterGuildMaster('Cervus', 'Adept', 57),
  new HunterGuildMaster('Ornus', 'Adept', 57),
  new HunterGuildMaster('Aco', 'Expert', 72),
  new HunterGuildMaster('Teco', 'Expert', 72),
  new HunterGuildMaster('Wolf', 'Master', 91, true),
];

/**
 * The Hunter Guild module encapsulates all data and logic related to the Hunter Guild, including its masters, rumours, and player progress. It provides methods to retrieve masters and rumours, determine eligibility, and assign rumours to players based on their level, completed quests, and current progress.
 * Note: The rumours are defined in a separate module to avoid circular dependencies, as HunterRumour references HunterGuildMaster and vice versa.
 */
export class HunterGuild {
  public wikiUrl = 'https://runescape.wiki/w/Hunter_Guild';

  private gilman: HunterGuildMaster;
  private cervus: HunterGuildMaster;
  private ornus: HunterGuildMaster;
  private aco: HunterGuildMaster;
  private teco: HunterGuildMaster;
  private wolf: HunterGuildMaster;

  private completedQuests: string[] = [];

  constructor(completedQuests: string[] = []) {
    this.completedQuests = completedQuests ?? [];
    this.gilman = HUNTER_GUILD_MASTERS.find((master) => master.name === 'Gilman')!;
    this.cervus = HUNTER_GUILD_MASTERS.find((master) => master.name === 'Cervus')!;
    this.ornus = HUNTER_GUILD_MASTERS.find((master) => master.name === 'Ornus')!;
    this.aco = HUNTER_GUILD_MASTERS.find((master) => master.name === 'Aco')!;
    this.teco = HUNTER_GUILD_MASTERS.find((master) => master.name === 'Teco')!;
    this.wolf = HUNTER_GUILD_MASTERS.find((master) => master.name === 'Wolf')!;
  }

  /* Getters Start */

  get Gilman(): HunterGuildMaster {
    return this.gilman;
  }

  get Cervus(): HunterGuildMaster {
    return this.cervus;
  }

  get Ornus(): HunterGuildMaster {
    return this.ornus;
  }

  get Aco(): HunterGuildMaster {
    return this.aco;
  }

  get Teco(): HunterGuildMaster {
    return this.teco;
  }

  get Wolf(): HunterGuildMaster {
    return this.wolf;
  }



  /* Getters end */

  getMasterByName(masterName: string): HunterGuildMaster | undefined {
    return HUNTER_GUILD_MASTERS.find((master) => master.name === masterName);
  }

  getAllMasters(): HunterGuildMaster[] {
    return [...HUNTER_GUILD_MASTERS];
  }

  getRumourById(rumourId: string): HunterRumour | undefined {
    return HUNTER_RUMOUR_REGISTRY.find((rumour) => rumour.id === rumourId);
  }


  doesAnyMasterHaveRumour(rumourId: string): boolean {
    return HUNTER_GUILD_MASTERS.some((master) => master.currentRumourId === rumourId);
  }

  setMasterCurrentRumour(masterName: string, rumourId: string) {
    const master = this.getMasterByName(masterName);
    if (master) {
      master.currentRumourId = rumourId;
    }
  }


  assignRumourToMaster(masterName: string, rumourId: string): void {
    const master = this.getMasterByName(masterName);
    if (master) {
      master.assignRumour(rumourId);
    }
  }

  getEligibleRumours(
    masterName: string,
    hunterLevel: number,
    completedQuests: string[] = [],
  ): HunterRumour[] {
    const master = this.getMasterByName(masterName);
    if (!master || !master.canAssignRumour(hunterLevel, completedQuests)) {
      return [];
    }

    return HUNTER_RUMOUR_REGISTRY.filter(
      (rumour) =>
        rumour.canBeAssignedByMaster(masterName) &&
        rumour.isEligible(hunterLevel, completedQuests) &&
        !this.doesAnyMasterHaveRumour(rumour.id)
    );
  }


  assignRumour(
    masterName: string,
    hunterLevel: number,
    completedQuests: string[] = [],
    randomizer: () => number = Math.random,
  ): HunterRumourAssignment | null {
    const eligibleRumours = this.getEligibleRumours(masterName, hunterLevel, completedQuests);

    if (eligibleRumours.length === 0) {
      // cannot assign a rumour if there are no eligible rumours available for the master, which can happen if the player does not meet the requirements for any of the rumours or if all eligible rumours are currently assigned to other masters. In this case, the method returns null to indicate that no assignment could be made.
      return null;
    }

    const index = Math.floor(randomizer() * eligibleRumours.length);
    const selectedRumour = eligibleRumours[index];

    const assignment: HunterRumourAssignment = {
      id: `${masterName}-${selectedRumour.id}-${Date.now()}`,
      masterName,
      rumourId: selectedRumour.id,
      assignedAt: new Date(),
    };

    return assignment;
  }

};
