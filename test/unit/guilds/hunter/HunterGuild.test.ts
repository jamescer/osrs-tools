import { HunterGuild } from '../../../../source/runescape/model/guilds/hunter/HunterGuild';
import { HunterGuildMasterName } from '../../../../source/runescape/model/guilds/hunter/HunterGuildMaster';

describe('HunterGuild', () => {
  const guild = new HunterGuild();
  const masters = [
    HunterGuildMasterName.GILMAN,
    HunterGuildMasterName.CERVUS,
    HunterGuildMasterName.ORNUS,
    HunterGuildMasterName.ACO,
    HunterGuildMasterName.TECO,
    HunterGuildMasterName.WOLF,
  ];

  beforeEach(() => {
    masters.forEach((name) => guild.setMasterCurrentRumour(name, ''));
  });

  it('finds masters and returns all masters without mutating the internal array', () => {
    const gilman = guild.getMasterByName('Gilman');
    const unknown = guild.getMasterByName('Unknown');
    const allMasters = guild.getAllMasters();

    expect(gilman).toBeDefined();
    expect(gilman?.minimumLevel).toBe(46);
    expect(unknown).toBeUndefined();
    expect(allMasters.length).toBe(6);
    expect(allMasters).not.toBe(guild.getAllMasters());
  });

  it('resolves rumours by id and reports assignment state', () => {
    const rumour = guild.getRumourById('tropical-wagtail');
    const missing = guild.getRumourById('missing-rumour');

    expect(rumour).toBeDefined();
    expect(rumour?.creature).toBe('Tropical wagtail');
    expect(missing).toBeUndefined();
  });

  it('can assign a current rumour to a master and detect assigned rumours', () => {
    expect(guild.doesAnyMasterHaveRumour('tropical-wagtail')).toBe(false);

    guild.setMasterCurrentRumour('Gilman', 'tropical-wagtail');

    expect(guild.doesAnyMasterHaveRumour('tropical-wagtail')).toBe(true);
  });

  it('filters eligible rumours and excludes already assigned rumours', () => {
    guild.setMasterCurrentRumour('Gilman', 'tropical-wagtail');

    const eligible = guild.getEligibleRumours('Cervus', 57, []);

    expect(eligible.every((rumour) => rumour.id !== 'tropical-wagtail')).toBe(true);
  });

  it('assigns a rumour when eligible and returns a valid assignment', () => {
    const assignment = guild.assignRumour('Gilman', 46, [], () => 0);

    expect(assignment).not.toBeNull();
    expect(assignment?.masterName).toBe('Gilman');
    expect(assignment?.rumourId).toBeDefined();
    expect(assignment?.id).toContain('Gilman-');
  });

  it('does not assign to Wolf before At First Light and assigns after completion', () => {
    const before = guild.assignRumour('Wolf', 91, [], () => 0);
    expect(before).toBeNull();

    const after = guild.assignRumour('Wolf', 91, ['At First Light'], () => 0);
    expect(after).not.toBeNull();
    expect(after?.masterName).toBe('Wolf');
  });

  it('assigns a specific rumour to a master using assignRumourToMaster', () => {
    guild.assignRumourToMaster('Cervus', 'swamp-lizard');
    expect(guild.getMasterByName('Cervus')?.currentRumourId).toBe('swamp-lizard');
  });
});
