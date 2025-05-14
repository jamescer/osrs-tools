import {
  SlayerUnlock,
  SlayerUnlocks,
} from '../../../../src/resources/slayer/SlayerUnlock';

describe('SlayerUnlock', () => {
  it('should create a SlayerUnlock instance with correct properties', () => {
    const unlock = new SlayerUnlock('Test Unlock', 100, 'Test description');
    expect(unlock.name).toBe('Test Unlock');
    expect(unlock.cost).toBe(100);
    expect(unlock.description).toBe('Test description');
  });

  it('should have a predefined list of SlayerUnlocks', () => {
    expect(SlayerUnlocks).toBeInstanceOf(Array);
    expect(SlayerUnlocks.length).toBeGreaterThan(0);
  });

  it('should contain specific SlayerUnlocks with correct properties', () => {
    const gargoyleSmasher = SlayerUnlocks.find(
      (unlock) => unlock.name === 'Gargoyle smasher'
    );
    expect(gargoyleSmasher).toBeDefined();
    expect(gargoyleSmasher?.cost).toBe(120);
    expect(gargoyleSmasher?.description).toBe(
      'Gargoyles are automatically dealt the finishing blow if the player has a Rock hammer in their inventory.'
    );

    const likeABoss = SlayerUnlocks.find(
      (unlock) => unlock.name === 'Like a boss'
    );
    expect(likeABoss).toBeDefined();
    expect(likeABoss?.cost).toBe(200);
    expect(likeABoss?.description).toBe(
      'Konar, Duradel, Krystilia and Nieve will be able to assign boss monsters as your task, excluding the Corporeal Beast.'
    );
  });

  it('should not contain duplicate SlayerUnlock names', () => {
    const names = SlayerUnlocks.map((unlock) => unlock.name);
    const uniqueNames = new Set(names);
    expect(names.length).toBe(uniqueNames.size);
  });

  it('should have all SlayerUnlocks with a positive cost', () => {
    SlayerUnlocks.forEach((unlock) => {
      expect(unlock.cost).toBeGreaterThan(0);
    });
  });

  it('should have all SlayerUnlocks with a non-empty description', () => {
    SlayerUnlocks.forEach((unlock) => {
      expect(unlock.description).toBeTruthy();
    });
  });
});
