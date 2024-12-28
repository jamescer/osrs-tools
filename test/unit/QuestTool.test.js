const { QuestTool } = require('../classes/Quest/model/QuestTool.js');

let tool = new QuestTool();
let questArray = tool.getQuestArray();
let questObject = tool.getQuestObject();
console.log(qt);

test('Account name should be "not poop"', () => {
  expect(newOsAcc.getName()).toBe('not poop');
});

test('Account name should be "not poop"', () => {
  expect(questArray.length).toBe(123);
});

test('Account name should be "not poop"', () => {
  expect(newOsAcc.getName()).toBe('not poop');
});
