import { Quest, QuestObject } from '../../utils/Quest';
let MiniQuestArray1: Array<QuestObject> = [];
let temp = [];
for (var index in MiniQuestArray1) {
  temp.push(new Quest(MiniQuestArray1[index]));
}

export let QuestArray: Array<Quest> = temp;
