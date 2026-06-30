import { HunterRumour } from 'src/runescape/model/guilds/hunter/HunterRumour';
import { HunterGuildMasterName } from 'src/runescape/model/guilds/hunter/HunterGuildMaster';
import { FELDIP_HUNTER_AREA } from 'src/runescape/model/guilds/hunter/RumourLocation';
import type { HunterRumourDefinition } from 'src/runescape/model/guilds/hunter/types';

describe('HunterRumour', () => {
  it('constructs correctly and clones arrays', () => {
    const definition: HunterRumourDefinition = {
      id: 'test-rumour',
      creature: 'Test Creature',
      method: 'Bird snare',
      locations: [FELDIP_HUNTER_AREA],
      requiredHunterLevel: 10,
      tier: 'Novice',
      masterNames: [HunterGuildMasterName.GILMAN],
      questRequirements: ['Bone Voyage'],
    };

    const rumour = new HunterRumour(definition);

    expect(rumour.id).toBe('test-rumour');
    expect(rumour.creature).toBe('Test Creature');
    expect(rumour.method).toBe('Bird snare');
    expect(rumour.requiredHunterLevel).toBe(10);
    expect(rumour.tier).toBe('Novice');
    expect(rumour.masterNames).toEqual([HunterGuildMasterName.GILMAN]);
    expect(rumour.locations).toEqual([FELDIP_HUNTER_AREA]);
    expect(rumour.locations).not.toBe(definition.locations);
    expect(rumour.masterNames).not.toBe(definition.masterNames);
    expect(rumour.wikiUrls).toEqual([FELDIP_HUNTER_AREA.wikiUrl]);
  });

  it('can determine valid masters and eligibility requirements', () => {
    const rumour = new HunterRumour({
      id: 'test-rumour-2',
      creature: 'Another Creature',
      method: 'Net trap',
      locations: [FELDIP_HUNTER_AREA],
      requiredHunterLevel: 20,
      tier: 'Adept',
      masterNames: ['Cervus'],
      questRequirements: ['Bone Voyage'],
    });

    expect(rumour.canBeAssignedByMaster('Cervus')).toBe(true);
    expect(rumour.canBeAssignedByMaster('Gilman')).toBe(false);
    expect(rumour.isEligible(19, ['Bone Voyage'])).toBe(false);
    expect(rumour.isEligible(20, [])).toBe(false);
    expect(rumour.isEligible(20, ['Bone Voyage'])).toBe(true);
  });
});
