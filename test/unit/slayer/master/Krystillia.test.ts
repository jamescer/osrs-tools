import { Krystilia } from '../../../../src/resources/slayer/Masters';
import { SlayerMaster } from '../../../../src/model/slayer/SlayerMaster';

describe('Krystilia Slayer Master', () => {
  it('should be an instance of SlayerMaster', () => {
    expect(Krystilia).toBeInstanceOf(SlayerMaster);
  });

  it('should have the correct name', () => {
    expect(Krystilia.name).toBe('Krystilia');
  });

  it('should have the correct location', () => {
    expect(Krystilia.location).toBe('Edgeville');
  });

  it('should have the correct wiki URL', () => {
    expect(Krystilia.wikiUrl).toBe(
      'https://oldschool.runescape.wiki/w/Krystilia'
    );
  });

  it('should have the correct minimum combat level', () => {
    expect(Krystilia.minimumCombatLevel).toBe(0);
  });

  it('should have tasks matching Tureal tasks', () => {
    expect(Krystilia.tasks).toBeDefined();
    expect(Krystilia.tasks).toEqual(expect.any(Array));
  });
});
