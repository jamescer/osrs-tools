// import { QuestData } from '../../src/lib/resources/quest/questData';
// import { Quest } from '../../src/lib/model/quest/Quest';

const { QuestData } = require('../../resources/quest/questData');
const { Quest } = require('../../resources/quest/questData');

var questobj = QuestData['A Porcine of Interest'];

test('questobj name should be "A Porcine of Interest"', () => {
    var test = new Quest(questobj);
    expect(test.name).toBe('A Porcine of Interest');
});