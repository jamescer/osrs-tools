const {
  Quest
} = require('../classes/Quest/model/Quest.js');
const {
  QuestData
} = require('../classes/Quest/data/questData.json');

var questobj = QuestData["A Porcine of Interest"];

test('testQuest name should be "not poop"', () => {
  var test = new Quest(questobj);
  expect(test.name).toBe("A Porcine of Interest");
});