import { SlayerLevelRequirement, CombatLevelRequirement, ItemRequirement } from '../../../../source/runescape/model/Requirement';
import { Task } from '../../../../source/runescape/model/slayer/Task';
import { expect, describe, it, beforeEach } from "@jest/globals";

/**
 * Comprehensive test suite for Slayer Task
 */
describe('Task - Slayer task configuration', () => {
    let mockRequirements: SlayerLevelRequirement[];
    let mockCombatRequirements: CombatLevelRequirement[];

    beforeEach(() => {
        mockRequirements = [new SlayerLevelRequirement(75)];
        mockCombatRequirements = [new CombatLevelRequirement(80)];
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
            expect(task.slayerExp).toBe(0); // default value
            expect(task.locations).toEqual([]); // default value
            expect(task.wildernessLevels).toEqual([]); // default value
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
                ['Abyssal Sire']
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
            expect(task.slayerExp).toBe(300);
            expect(task.locations).toEqual(['Slayer Tower']);
            expect(task.wildernessLevels).toEqual([0]);
            expect(task.bosses).toEqual(['Abyssal Sire']);
        });

        it('should support various task types', () => {
            const taskTypes = [
                { name: 'Spiders', min: 10, max: 20 },
                { name: 'Goblins', min: 15, max: 30 },
                { name: 'Dragons', min: 100, max: 200 },
                { name: 'Wyverns', min: 75, max: 150 },
            ];

            for (const type of taskTypes) {
                const task = new Task(type.name, type.min, type.max, []);
                expect(task.name).toBe(type.name);
                expect(task.amountMin).toBe(type.min);
                expect(task.amountMax).toBe(type.max);
            }
        });
    });

    describe('getter methods', () => {
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
                ['Abyssal Sire']
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
            const taskWithEmptyAlternatives = new Task('Abyssal demons', 125, 200, mockRequirements, null, null, []);
            expect(taskWithEmptyAlternatives.getAlternatives()).toEqual([]);
        });

        it('should return all properties', () => {
            expect(task.combatLevels).toEqual([124]);
            expect(task.slayerExp).toBe(300);
            expect(task.locations).toEqual(['Slayer Tower']);
            expect(task.wildernessLevels).toEqual([0]);
            expect(task.bosses).toEqual(['Abyssal Sire']);
        });
    });

    describe('JSON serialization', () => {
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
                ['Abyssal Sire']
            );
        });

        it('should convert to JSON correctly via toJSON()', () => {
            const json = task.toJSON();
            expect(json.name).toBe('Abyssal demons');
            expect(json.amountMin).toBe(125);
            expect(json.amountMax).toBe(200);
            expect(json.alternatives).toEqual(['Greater demons']);
            expect(json.weight).toBe(8);
            expect(json.bosses).toEqual(['Abyssal Sire']);
        });

        it('should include all fields in JSON output', () => {
            const json = task.toJSON();
            expect(json).toHaveProperty('name');
            expect(json).toHaveProperty('amountMin');
            expect(json).toHaveProperty('amountMax');
            expect(json).toHaveProperty('extendedAmountMin');
            expect(json).toHaveProperty('extendedAmountMax');
            expect(json).toHaveProperty('alternatives');
            expect(json).toHaveProperty('weight');
            expect(json).toHaveProperty('combatLevels');
            expect(json).toHaveProperty('slayerExp');
            expect(json).toHaveProperty('locations');
            expect(json).toHaveProperty('wildernessLevels');
            expect(json).toHaveProperty('bosses');
            expect(json).toHaveProperty('requirements');
        });

        it('should create Task from JSON via fromJSON()', () => {
            const json = task.toJSON();
            const taskFromJson = Task.fromJSON(json);

            expect(taskFromJson).toBeInstanceOf(Task);
            expect(taskFromJson.name).toBe('Abyssal demons');
            expect(taskFromJson.amountMin).toBe(125);
            expect(taskFromJson.amountMax).toBe(200);
            expect(taskFromJson.extendedAmountMin).toBe(200);
            expect(taskFromJson.extendedAmountMax).toBe(300);
            expect(taskFromJson.alternatives).toEqual(['Greater demons']);
            expect(taskFromJson.weight).toBe(8);
        });

        it('should round-trip JSON serialization', () => {
            const json = task.toJSON();
            const restored = Task.fromJSON(json);
            const json2 = restored.toJSON();

            expect(json).toEqual(json2);
        });

        it('should handle tasks with minimal properties in JSON', () => {
            const minimalJson = {
                name: 'Spider',
                amountMin: 10,
                amountMax: 20,
                requirements: [],
            };
            const task = Task.fromJSON(minimalJson);

            expect(task.name).toBe('Spider');
            expect(task.amountMin).toBe(10);
            expect(task.weight).toBe(1); // default
        });
    });

    describe('string representation', () => {
        it('should convert to string correctly via toString()', () => {
            const task = new Task('Abyssal demons', 125, 200, mockRequirements, 200, 300, ['Greater demons'], 8, [124], 300, ['Slayer Tower'], [0], ['Abyssal Sire']);
            expect(task.toString()).toBe('Task{ name: Abyssal demons }');
        });

        it('should include task name in toString()', () => {
            const task = new Task('Wyverns', 75, 150, []);
            expect(task.toString()).toContain('Wyverns');
        });
    });

    describe('task requirements', () => {
        it('should support slayer level requirements', () => {
            const slayerReq = new SlayerLevelRequirement(75);
            const task = new Task('High Level Task', 100, 200, [slayerReq]);

            expect(task.requirements.length).toBe(1);
            expect(task.requirements[0]).toBeInstanceOf(SlayerLevelRequirement);
        });

        it('should support multiple combat level requirements', () => {
            const combatReqs = [
                new CombatLevelRequirement(80),
                new CombatLevelRequirement(75),
            ];
            const task = new Task('Combat Task', 50, 100, combatReqs);

            expect(task.requirements.length).toBe(2);
        });

        it('should support mixed requirement types', () => {
            const mixedReqs = [
                new SlayerLevelRequirement(75),
                new CombatLevelRequirement(80),
                new ItemRequirement('Slayer gear', 1),
            ];
            const task = new Task('Mixed Req Task', 100, 200, mixedReqs);

            expect(task.requirements.length).toBe(3);
        });

        it('should handle tasks with no requirements', () => {
            const task = new Task('Easy Task', 10, 20, []);
            expect(task.requirements).toEqual([]);
        });
    });

    describe('task amounts and scaling', () => {
        it('should support different amount ranges', () => {
            const tasks = [
                { min: 5, max: 10 },
                { min: 50, max: 100 },
                { min: 100, max: 300 },
            ];

            for (const amounts of tasks) {
                const task = new Task('Test', amounts.min, amounts.max, []);
                expect(task.amountMin).toBe(amounts.min);
                expect(task.amountMax).toBe(amounts.max);
            }
        });

        it('should support extended amounts for extended tasks', () => {
            const task = new Task('Task', 50, 100, [], 75, 150);

            expect(task.getAmountMin()).toBe(50);
            expect(task.getAmountMax()).toBe(100);
            expect(task.extendedAmountMin).toBe(75);
            expect(task.extendedAmountMax).toBe(150);
        });

        it('should handle tasks without extended amounts', () => {
            const task = new Task('No Extended', 50, 100, [], null, null);

            expect(task.extendedAmountMin).toBeNull();
            expect(task.extendedAmountMax).toBeNull();
        });
    });

    describe('wilderness and boss tasks', () => {
        it('should support wilderness level tracking', () => {
            const wildernessTasks = [
                { name: 'Lava Dragons', level: 52 },
                { name: 'Revenant NPCs', level: 10 },
            ];

            for (const taskInfo of wildernessTasks) {
                const task = new Task(taskInfo.name, 50, 100, [], null, null, [], 1, [], 0, [], [taskInfo.level]);
                expect(task.wildernessLevels).toContain(taskInfo.level);
            }
        });

        it('should support boss encounters', () => {
            const task = new Task(
                'Boss Task',
                1,
                1,
                [],
                null,
                null,
                [],
                5,
                [138],
                1000,
                ['Boss Arena'],
                [0],
                ['Cerberus', 'K\'ril', 'General Graardor']
            );

            expect(task.bosses.length).toBe(3);
            expect(task.bosses).toContain('Cerberus');
        });

        it('should support tasks with multiple locations', () => {
            const task = new Task(
                'Spread Task',
                100,
                200,
                [],
                null,
                null,
                [],
                3,
                [123],
                500,
                ['Dungeon 1', 'Dungeon 2', 'Dungeon 3']
            );

            expect(task.locations.length).toBe(3);
        });
    });

    describe('task variants and alternatives', () => {
        it('should track alternative monster variants', () => {
            const task = new Task(
                'Demons',
                100,
                200,
                [new SlayerLevelRequirement(75)],
                null,
                null,
                ['Lesser demon', 'Greater demon', 'Black demon']
            );

            expect(task.alternatives.length).toBe(3);
            expect(task.alternatives).toContain('Greater demon');
        });

        it('should handle tasks with no alternatives', () => {
            const task = new Task('Specific Task', 50, 100, [], null, null, []);
            expect(task.alternatives).toEqual([]);
        });
    });

    describe('slayer experience', () => {
        it('should track slayer experience reward', () => {
            const task = new Task('High Exp Task', 100, 200, [new SlayerLevelRequirement(90)], null, null, [], 10, [138], 5000);

            expect(task.slayerExp).toBe(5000);
        });

        it('should support various experience amounts', () => {
            const expAmounts = [0, 100, 1000, 10000, 50000];

            for (const exp of expAmounts) {
                const task = new Task('Test', 50, 100, [], null, null, [], 1, [], exp);
                expect(task.slayerExp).toBe(exp);
            }
        });
    });

    describe('task weighting', () => {
        it('should support various weight values', () => {
            const weights = [1, 2, 5, 10, 50, 100];

            for (const weight of weights) {
                const task = new Task('Test', 50, 100, [], null, null, [], weight);
                expect(task.weight).toBe(weight);
            }
        });

        it('should use default weight of 1 if not specified', () => {
            const task = new Task('Test', 50, 100, []);
            expect(task.weight).toBe(1);
        });
    });

    describe('real-world task examples', () => {
        it('should create Abyssal Demon task', () => {
            const abyssalTask = new Task(
                'Abyssal demons',
                125,
                200,
                [new SlayerLevelRequirement(85)],
                200,
                300,
                ['Greater demons'],
                8,
                [124],
                300,
                ['Slayer Tower'],
            );

            expect(abyssalTask.name).toBe('Abyssal demons');
            expect(abyssalTask.getWeight()).toBe(8);
        });

        it('should create Wyvern task', () => {
            const wyvernTask = new Task(
                'Wyverns',
                75,
                150,
                [new SlayerLevelRequirement(72)],
                100,
                200,
                [],
                6,
                [104],
                200,
                ['Wyvern Cave'],
            );

            expect(wyvernTask.name).toBe('Wyverns');
            expect(wyvernTask.requirements.length).toBe(1);
        });
    });
});
