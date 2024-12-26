// import { QuestData } from '../../src/lib/resources/quest/questData';
// import { Quest } from '../../src/lib/model/quest/Quest';

const { QuestData, Quest } = require('../../lib/resources/quest/questData');

var questobj = QuestData['A Porcine of Interest'];

test('questobj name should be "A Porcine of Interest"', () => {
  var test = new Quest(questobj);
  console.log('Result:', test.name); // Logging the result
  expect(test.name).toBe('A Porcine of Interest');
});
