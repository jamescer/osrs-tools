// Importing the barrel triggers registration of every real master via their module side effects.
import 'src/runescape/model/slayer/masters';

import { describe, expect, it } from '@jest/globals';
import {
  getAllMasters,
  getMasterByName,
  getMastersByMinimumLevel,
  getMastersByProgression,
  getRandomMasterForLevel,
  initializeMastersRegistry,
  SlayerMasterProgression,
} from 'src/runescape/model/slayer/masters/registry';

describe('Slayer masters registry', () => {
  describe('initializeMastersRegistry', () => {
    it('returns the same Map instance on repeated calls', () => {
      expect(initializeMastersRegistry()).toBe(initializeMastersRegistry());
    });
  });

  describe('getAllMasters', () => {
    it('returns every registered master, including the unreleased Mortimer', () => {
      const names = getAllMasters().map(master => master.getName());
      expect(names).toEqual(
        expect.arrayContaining([
          'Turael',
          'Spria',
          'Mazchna',
          'Vannaka',
          'Chaeldar',
          'Konar Quo Maten',
          'Nieve',
          'Duradel',
          'Krystilia',
          'Mortimer',
        ]),
      );
    });
  });

  describe('getMasterByName', () => {
    it('finds a master case-insensitively', () => {
      expect(getMasterByName('turael')?.getName()).toBe('Turael');
      expect(getMasterByName('TURAEL')?.getName()).toBe('Turael');
    });

    it('returns undefined for an unknown name', () => {
      expect(getMasterByName('Not A Master')).toBeUndefined();
    });
  });

  describe('getMastersByMinimumLevel', () => {
    it('only includes masters whose minimum combat level is at or below the given level', () => {
      const names = getMastersByMinimumLevel(20).map(master => master.getName());
      expect(names).toEqual(expect.arrayContaining(['Turael', 'Spria', 'Mazchna', 'Mortimer', 'Krystilia']));
      expect(names).not.toContain('Vannaka');
      expect(names).not.toContain('Nieve');
    });

    it('returns nothing below the lowest master requirement', () => {
      expect(getMastersByMinimumLevel(-1)).toEqual([]);
    });

    it('excludes Duradel when player Slayer level is below 50', () => {
      // Duradel requires combat 100 AND Slayer 50
      const at99combat1slayer = getMastersByMinimumLevel(100, 1).map(m => m.getName());
      expect(at99combat1slayer).not.toContain('Duradel');
    });

    it('includes Duradel when player meets both combat 100 and Slayer 50', () => {
      const at100combat50slayer = getMastersByMinimumLevel(100, 50).map(m => m.getName());
      expect(at100combat50slayer).toContain('Duradel');
    });
  });

  describe('getMastersByProgression', () => {
    it('sorts masters ascending by minimum combat level', () => {
      const levels = getMastersByProgression().map(master => master.getMinimumCombatLevel());
      const sorted = [...levels].sort((a, b) => a - b);
      expect(levels).toEqual(sorted);
    });
  });

  describe('getRandomMasterForLevel', () => {
    it('returns a master eligible for the given combat level', () => {
      const master = getRandomMasterForLevel(20);
      expect(master).not.toBeNull();
      expect(master?.getMinimumCombatLevel()).toBeLessThanOrEqual(20);
    });

    it('returns null when no master qualifies', () => {
      expect(getRandomMasterForLevel(-1)).toBeNull();
    });
  });

  describe('SlayerMasterProgression', () => {
    it('lists the canonical master names in wiki-defined progression order', () => {
      expect(SlayerMasterProgression.TURAEL).toBe('Turael');
      expect(SlayerMasterProgression.NIEVE).toBe('Nieve');
    });
  });
});
