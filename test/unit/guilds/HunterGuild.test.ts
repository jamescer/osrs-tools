import {   HunterGuild  } from 'src/runescape/model/guilds';

describe('HunterGuild', () => {
  it('returns the correct masters', () => {
    const hunterGuild = new HunterGuild();
    const gilman = hunterGuild.getMasterByName('Gilman');
    const wolf = hunterGuild.getMasterByName('Wolf');

    expect(gilman).toBeDefined();
    expect(gilman?.minimumLevel).toBe(46);
    expect(wolf).toBeDefined();
    expect(wolf?.minimumLevel).toBe(91);
  });

  it('should test assigning a rumour to a master', () => {
    const hunterGuild = new HunterGuild();
    const gilman = hunterGuild.getMasterByName('Gilman');
    expect(gilman).toBeDefined();

    // Simulate assigning a rumour to Gilman
    const rumourId = 'test-rumour-id';
    gilman?.assignRumour(rumourId);

    // Check that the currentRumourId is set correctly
    expect(gilman?.currentRumourId).toBe(rumourId);
  });


  it('should test if a rumour is assigned from one master, it cannot be assigned from one with the same rumour available', () => {
    const hunterGuild = new HunterGuild();
    const gilman = hunterGuild.getMasterByName('Gilman');
    const cervus = hunterGuild.getMasterByName('Cervus');
    expect(gilman).toBeDefined();
    expect(cervus).toBeDefined();


    // assign a task to gilman that can also be assigned from cervus
    const eligiblERumoursForGilman = hunterGuild.getEligibleRumours('Gilman', 99, [])
    const eligiblERumoursForCervus = hunterGuild.getEligibleRumours('Cervus', 99, [])

    const rumourId = 'swamp-lizard';
    gilman?.assignRumour(rumourId);

    // assigngin this rumour should remove it from the pool for gilman and cervus
    const eligiblERumoursForGilman2 = hunterGuild.getEligibleRumours('Gilman', 99, [])
    const eligiblERumoursForCervus2 = hunterGuild.getEligibleRumours('Cervus', 99, [])
        const u= 12;

    expect(eligiblERumoursForCervus.length).toBe(12)
    expect(eligiblERumoursForGilman.length).toBe(23)
    expect(eligiblERumoursForCervus2.length).toBe(11)
    expect(eligiblERumoursForGilman2.length).toBe(22)

  });


});
