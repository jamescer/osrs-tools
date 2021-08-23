import { QuestArray } from '../data/quest/questDataArray';
var allSeries = [];
for (var index in QuestArray) {
  var current = QuestArray[index];
  allSeries.push(current.series);
}
