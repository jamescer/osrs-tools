import { Requirement, SlayerLevelRequirement } from '../../../../source/runescape/model/Requirement';
import { Assignment } from '../../../../source/runescape/model/slayer/Assignment';
import { Task } from '../../../../source/runescape/model/slayer/Task';

describe('Assignment', () => {
  it('should set properties correctly via constructor', () => {
    const requirements: Requirement[] = [new SlayerLevelRequirement(50)];
    const task = new Task('Aberrant Spectres', 10, 20, requirements, 5, 15);
    const assignment = new Assignment(
      task.name,
      10,
      requirements,
      task.extendedAmountMin,
      task.extendedAmountMax,
    );
    expect(assignment.name).toBe('Aberrant Spectres');
    expect(assignment.requirements).toEqual(requirements);

    expect(assignment.getName()).toBe('Aberrant Spectres');
    expect(assignment.getQuantity()).toBe(10);
  });
});
