import { QuestArray } from '../data/quest/questDataArray';
var test = QuestArray;
console.log({ test: test });

for (var index in QuestArray) {
  var current = QuestArray[index];
  console.log(current);
  console.log(typeof current);
}
