import { Requirement, SlayerLevelRequirement } from '../../../../src/model/Requirement';
import { Task } from '../../../../src/model/slayer/Task';

describe('Task', () => {
  let mockRequirements: Requirement[];

  beforeEach(() => {
    mockRequirements = [new SlayerLevelRequirement(75)];
  });

  describe('constructor', () => {
    it('should create a Task with minimum required properties', () => {
      const task = new Task('Abyssal demons', 125, 200, mockRequirements);

      expect(task.name).toBe('Abyssal demons');
      expect(task.amountMin).toBe(125);
      expect(task.amountMax).toBe(200);
      expect(task.requirements).toEqual(mockRequirements);
      expect(task.weight).toBe(1); // default value
      expect(task.alternatives).toEqual([]); // default value
      expect(task.combatLevels).toEqual([]); // default value
      expect(task.SlayerExp).toBe(0); // default value
      expect(task.locations).toEqual([]); // default value
      expect(task.WildernessLevels).toEqual([]); // default value
      expect(task.bosses).toEqual([]); // default value
    });

    it('should create a Task with extended amounts', () => {
      const task = new Task('Abyssal demons', 125, 200, mockRequirements, 200, 300);

      expect(task.extendedAmountMin).toBe(200);
      expect(task.extendedAmountMax).toBe(300);
    });

    it('should create a Task with all optional properties', () => {
      const task = new Task(
        'Abyssal demons',
        125,
        200,
        mockRequirements,
        200,
        300,
        ['Greater demons'],
        8,
        [124],
        300,
        ['Slayer Tower'],
        [0],
        ['Abyssal Sire'],
      );

      expect(task.name).toBe('Abyssal demons');
      expect(task.amountMin).toBe(125);
      expect(task.amountMax).toBe(200);
      expect(task.requirements).toEqual(mockRequirements);
      expect(task.extendedAmountMin).toBe(200);
      expect(task.extendedAmountMax).toBe(300);
      expect(task.alternatives).toEqual(['Greater demons']);
      expect(task.weight).toBe(8);
      expect(task.combatLevels).toEqual([124]);
      expect(task.SlayerExp).toBe(300);
      expect(task.locations).toEqual(['Slayer Tower']);
      expect(task.WildernessLevels).toEqual([0]);
      expect(task.bosses).toEqual(['Abyssal Sire']);
    });
  });

  describe('methods', () => {
    let task: Task;

    beforeEach(() => {
      task = new Task(
        'Abyssal demons',
        125,
        200,
        mockRequirements,
        200,
        300,
        ['Greater demons'],
        8,
        [124],
        300,
        ['Slayer Tower'],
        [0],
        ['Abyssal Sire'],
      );
    });

    it('should return correct name via getName()', () => {
      expect(task.getName()).toBe('Abyssal demons');
    });

    it('should return correct weight via getWeight()', () => {
      expect(task.getWeight()).toBe(8);
    });

    it('should return correct min amount via getAmountMin()', () => {
      expect(task.getAmountMin()).toBe(125);
    });

    it('should return correct max amount via getAmountMax()', () => {
      expect(task.getAmountMax()).toBe(200);
    });

    it('should return correct requirements via getRequirements()', () => {
      expect(task.getRequirements()).toEqual(mockRequirements);
    });

    it('should return correct alternatives via getAlternatives()', () => {
      expect(task.getAlternatives()).toEqual(['Greater demons']);
    });

    it('should handle empty alternatives array', () => {
      const taskWithEmptyAlternatives = new Task(
        'Abyssal demons',
        125,
        200,
        mockRequirements,
        null,
        null,
        [],
      );
      expect(taskWithEmptyAlternatives.getAlternatives()).toEqual([]);
    });

    it('should convert to JSON correctly via toJSON()', () => {
      const json = task.toJSON();
      expect(json).toEqual({
        alternatives: ['Greater demons'],
        amountMax: 200,
        amountMin: 125,
        name: 'Abyssal demons',
        unlockRequirements: mockRequirements,
        weight: 8,
      });
    });

    it('should convert to string correctly via toString()', () => {
      expect(task.toString()).toBe('Task{ name: Abyssal demons }');
    });
  });

  describe('static methods', () => {
    it('should create Task from JSON via fromJSON()', () => {
      const json = {
        CombatLevels: [124],
        SlayerExp: 300,
        WildernessLevels: [0],
        alternatives: ['Greater demons'],
        amountMax: 200,
        amountMin: 125,
        bosses: ['Abyssal Sire'],
        extendedAmountMax: 300,
        extendedAmountMin: 200,
        locations: ['Slayer Tower'],
        name: 'Abyssal demons',
        requirements: mockRequirements,
        weight: 8,
      };

      const task = Task.fromJSON(json);
      expect(task).toBeInstanceOf(Task);
      expect(task.name).toBe('Abyssal demons');
      expect(task.amountMin).toBe(125);
      expect(task.amountMax).toBe(200);
      expect(task.extendedAmountMin).toBe(200);
      expect(task.extendedAmountMax).toBe(300);
      expect(task.alternatives).toEqual(['Greater demons']);
      expect(task.weight).toBe(8);
    });
  });
});
