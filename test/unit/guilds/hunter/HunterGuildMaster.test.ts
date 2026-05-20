import { HunterGuildMaster } from '../../../../source/runescape/model/guilds/hunter/HunterGuildMaster';
import { HunterRumour } from '../../../../source/runescape/model/guilds/hunter/HunterRumour';

describe('HunterGuildMaster', () => {
  it('validates hunter level and quest requirements', () => {
    const master = new HunterGuildMaster('Test Master', 'Expert', 60, true);

    expect(master.canAssignRumour(59)).toBe(false);
    expect(master.canAssignRumour(60, [])).toBe(false);
    expect(master.canAssignRumour(60, ['At First Light'])).toBe(true);
  });

  it('reports wiki url and assignment state', () => {
    const master = new HunterGuildMaster('Test Master', 'Novice', 1);

    expect(master.wikiUrl).toBe('https://runescape.wiki/w/Test Master');
    expect(master.isAssigned).toBe(false);

    master.assignRumour('test-rumour');
    expect(master.isAssigned).toBe(true);
    expect(master.currentRumourId).toBe('test-rumour');
  });

  it('returns a random eligible rumour excluding other assigned rumours', () => {
    const master = new HunterGuildMaster('Test Master', 'Novice', 1);
    const eligibleRumours = [
      new HunterRumour({
        id: 'a',
        creature: 'A',
        method: 'Bird snare',
        locations: [{ name: 'Test', wikiUrl: 'https://example.com' }],
        requiredHunterLevel: 1,
        tier: 'Novice',
        masterNames: ['Test Master'],
      }),
      new HunterRumour({
        id: 'b',
        creature: 'B',
        method: 'Deadfall',
        locations: [{ name: 'Test', wikiUrl: 'https://example.com' }],
        requiredHunterLevel: 1,
        tier: 'Novice',
        masterNames: ['Test Master'],
      }),
    ];

    const otherAssigned = [eligibleRumours[1]];
    const randomSpy = jest.spyOn(Math, 'random').mockReturnValue(0);

    expect(master.getRandomRumour(eligibleRumours, otherAssigned)).toBe(eligibleRumours[0]);

    randomSpy.mockRestore();
  });

  it('throws when there are no assignable rumours', () => {
    const master = new HunterGuildMaster('Test Master', 'Novice', 1);
    const eligibleRumours = [
      new HunterRumour({
        id: 'a',
        creature: 'A',
        method: 'Bird snare',
        locations: [{ name: 'Test', wikiUrl: 'https://example.com' }],
        requiredHunterLevel: 1,
        tier: 'Novice',
        masterNames: ['Test Master'],
      }),
    ];
    const otherAssigned = [eligibleRumours[0]];

    expect(() => master.getRandomRumour(eligibleRumours, otherAssigned)).toThrow(
      'No assignable rumours available for master Test Master',
    );
  });
});
