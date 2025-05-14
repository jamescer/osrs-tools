import { Assignment } from '../../../../src/model/slayer/Assignment';
import {
  Requirement,
  SlayerLevelRequirement,
} from '../../../../src/model/Requirement';
import { Task } from '../../../../src/model/slayer/Task';

// Test for the Tureal data from the JSON file
import { Turael } from '../../../../src/resources/slayer/SlayerData';
import { Spria } from '../../../../src/resources/slayer/SlayerData';

describe('Spria Slayer Master', () => {
  it('should have a valid name', () => {
    expect(Spria.name).toBe('Spria');
  });

  it('should have a valid combat level requirement', () => {
    expect(Spria.minimumCombatLevel).toBe(0);
  });

  it('should have a valid location', () => {
    expect(Spria.location).toBe('Draynor Village');
  });

  it('should have a list of tasks', () => {
    const tasks = Spria.getTasks();
    expect(Array.isArray(tasks)).toBe(true);
    expect(tasks.length).toBe(25);
  });

  it('should have a valid wiki link', () => {
    expect(Spria.wikiUrl).toBe('https://oldschool.runescape.wiki/w/Spria');
  });
});
