import { Requirement, SlayerLevelRequirement } from '../../../../src/model/Requirement';
import { Assignment } from '../../../../src/model/slayer/Assignment';
import { Task } from '../../../../src/model/slayer/Task';

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
