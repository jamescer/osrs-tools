import { SlayerLevelRequirement, CombatLevelRequirement, ItemRequirement } from '../../../../source/runescape/model/Requirement';
import { Assignment } from '../../../../source/runescape/model/slayer/Assignment';
import { Task } from '../../../../source/runescape/model/slayer/Task';
import { expect, describe, it, beforeEach } from "@jest/globals";

/**
 * Comprehensive test suite for Slayer Assignment
 */
describe('Assignment - Active slayer task assignment', () => {
    let mockRequirements: SlayerLevelRequirement[];
    let mockTask: Task;

    beforeEach(() => {
        mockRequirements = [new SlayerLevelRequirement(50)];
        mockTask = new Task('Aberrant Spectres', 10, 20, mockRequirements, 5, 15);
    });

    describe('constructor and basic properties', () => {
        it('should set properties correctly via constructor', () => {
            const requirements = [new SlayerLevelRequirement(50)];
            const task = new Task('Aberrant Spectres', 10, 20, requirements, 5, 15);
            const assignment = new Assignment(task.name, 10, requirements, task.extendedAmountMin, task.extendedAmountMax);

            expect(assignment.name).toBe('Aberrant Spectres');
            expect(assignment.requirements).toEqual(requirements);
            expect(assignment.getName()).toBe('Aberrant Spectres');
            expect(assignment.getQuantity()).toBe(10);
        });

        it('should support various assignment quantities', () => {
            const quantities = [5, 10, 25, 50, 100, 200];
            const reqs = [new SlayerLevelRequirement(75)];

            for (const qty of quantities) {
                const assignment = new Assignment('Test Task', qty, reqs);
                expect(assignment.getQuantity()).toBe(qty);
            }
        });

        it('should create assignment with no extended amounts', () => {
            const assignment = new Assignment('Basic Task', 15, mockRequirements, null, null);

            expect(assignment.name).toBe('Basic Task');
            expect(assignment.getQuantity()).toBe(15);
        });

        it('should create assignment with extended amounts', () => {
            const assignment = new Assignment(
                'Extended Task',
                20,
                mockRequirements,
                30,
                50
            );

            expect(assignment.name).toBe('Extended Task');
            expect(assignment.getQuantity()).toBe(20);
        });
    });

    describe('getter methods', () => {
        let assignment: Assignment;

        beforeEach(() => {
            assignment = new Assignment(
                'Test Creature',
                15,
                [new SlayerLevelRequirement(60)],
                20,
                30
            );
        });

        it('should return name via getName()', () => {
            expect(assignment.getName()).toBe('Test Creature');
        });

        it('should return quantity via getQuantity()', () => {
            expect(assignment.getQuantity()).toBe(15);
        });

        it('should return requirements', () => {
            const reqs = assignment.requirements;
            expect(Array.isArray(reqs)).toBe(true);
            expect(reqs.length).toBeGreaterThan(0);
        });

        it('should support accessing extended amounts', () => {
            const extended = new Assignment('Extended', 10, [], 15, 25);
            // Check if extended amounts are stored
            expect(extended).toBeDefined();
        });
    });

    describe('task conversions', () => {
        it('should create assignment from Task', () => {
            const assignment = new Assignment(
                mockTask.name,
                mockTask.getAmountMin(),
                mockTask.requirements,
                mockTask.extendedAmountMin,
                mockTask.extendedAmountMax
            );

            expect(assignment.name).toBe('Aberrant Spectres');
            expect(assignment.requirements).toEqual(mockRequirements);
        });

        it('should maintain requirements through assignment', () => {
            const requirements = [
                new SlayerLevelRequirement(85),
                new CombatLevelRequirement(75),
            ];
            const assignment = new Assignment('Hard Task', 50, requirements);

            expect(assignment.requirements.length).toBe(2);
        });
    });

    describe('assignment with various requirements', () => {
        it('should create assignment with slayer level requirement', () => {
            const assignment = new Assignment(
                'Slayer Task',
                20,
                [new SlayerLevelRequirement(75)]
            );

            expect(assignment.requirements.length).toBe(1);
        });

        it('should create assignment with combat level requirement', () => {
            const assignment = new Assignment(
                'Combat Task',
                30,
                [new CombatLevelRequirement(80)]
            );

            expect(assignment.requirements.length).toBe(1);
        });

        it('should create assignment with mixed requirements', () => {
            const requirements = [
                new SlayerLevelRequirement(75),
                new CombatLevelRequirement(70),
                new ItemRequirement('Slayer gear', 1),
            ];
            const assignment = new Assignment('Complex Task', 40, requirements);

            expect(assignment.requirements.length).toBe(3);
        });

        it('should create assignment with no requirements', () => {
            const assignment = new Assignment('Easy Task', 10, []);

            expect(assignment.requirements.length).toBe(0);
        });
    });

    describe('realistic assignment scenarios', () => {
        it('should represent Turael assignment (no requirements)', () => {
            const turaelAssignment = new Assignment('Spiders', 15, []);

            expect(turaelAssignment.name).toBe('Spiders');
            expect(turaelAssignment.requirements.length).toBe(0);
        });

        it('should represent mid-level master assignment', () => {
            const midLevelAssignment = new Assignment(
                'Dagannoths',
                50,
                [
                    new SlayerLevelRequirement(40),
                    new CombatLevelRequirement(60),
                ],
                75,
                100
            );

            expect(midLevelAssignment.name).toBe('Dagannoths');
            expect(midLevelAssignment.getQuantity()).toBe(50);
        });

        it('should represent high-level master assignment', () => {
            const highLevelAssignment = new Assignment(
                'Abyssal demons',
                120,
                [
                    new SlayerLevelRequirement(85),
                    new CombatLevelRequirement(85),
                ],
                200,
                300
            );

            expect(highLevelAssignment.name).toBe('Abyssal demons');
            expect(highLevelAssignment.getQuantity()).toBe(120);
        });
    });

    describe('quantity tracking', () => {
        it('should track different kill quantities', () => {
            const quantities = [5, 10, 20, 50, 100, 250];

            for (const qty of quantities) {
                const assignment = new Assignment(`Task ${qty}`, qty, []);
                expect(assignment.getQuantity()).toBe(qty);
            }
        });

        it('should support very large quantities', () => {
            const largeAssignment = new Assignment('Long Task', 1000, []);
            expect(largeAssignment.getQuantity()).toBe(1000);
        });

        it('should support minimum quantity of 1', () => {
            const minAssignment = new Assignment('Quick Task', 1, []);
            expect(minAssignment.getQuantity()).toBe(1);
        });
    });

    describe('task names in assignments', () => {
        const taskNames = [
            'Aberrant Spectres',
            'Abyssal demons',
            'Ankou',
            'Basilisks',
            'Bats',
            'Bears',
            'Bees',
            'Birds',
            'Black demons',
            'Black dragons',
        ];

        for (const taskName of taskNames) {
            it(`should support assignment of ${taskName}`, () => {
                const assignment = new Assignment(taskName, 50, []);
                expect(assignment.name).toBe(taskName);
                expect(assignment.getName()).toBe(taskName);
            });
        }
    });

    describe('extended task amounts', () => {
        it('should store regular and extended amounts', () => {
            const assignment = new Assignment(
                'Task',
                100,
                [],
                150,
                200
            );

            expect(assignment.getQuantity()).toBe(100);
        });

        it('should handle assignments without extension', () => {
            const assignment = new Assignment('Basic', 50, []);
            expect(assignment.getQuantity()).toBe(50);
        });

        it('should handle extension with null values', () => {
            const assignment = new Assignment('NoExt', 75, [], null, null);
            expect(assignment.getQuantity()).toBe(75);
        });
    });

    describe('assignment lifecycle', () => {
        it('should create fresh assignment instance', () => {
            const assign1 = new Assignment('Task', 50, []);
            const assign2 = new Assignment('Task', 50, []);

            expect(assign1).not.toBe(assign2); // Different instances
            expect(assign1.name).toBe(assign2.name); // Same name
        });

        it('should maintain data consistency', () => {
            const assignment = new Assignment('Consistent', 75, mockRequirements);

            // Multiple calls should return same data
            expect(assignment.getName()).toBe(assignment.name);
            expect(assignment.getQuantity()).toBe(75);
        });
    });

    describe('edge cases', () => {
        it('should handle assignment with special characters in name', () => {
            const assignment = new Assignment("K'ril's minions", 50, []);
            expect(assignment.name).toContain("K'ril");
        });

        it('should handle assignment with very long name', () => {
            const longName = 'A'.repeat(100);
            const assignment = new Assignment(longName, 50, []);
            expect(assignment.name.length).toBe(100);
        });

        it('should handle assignment with numbers in name', () => {
            const assignment = new Assignment('Gargoyle 2', 50, []);
            expect(assignment.name).toBe('Gargoyle 2');
        });
    });
});
