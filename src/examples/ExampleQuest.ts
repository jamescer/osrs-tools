
//  this would be the real import
// import { QuestTool } from 'osrs-tools';

import { QuestTool } from '../src/model/quest/QuestTool';

/**
 * This is a code example file for the OSRS Tools library.
 * It is not part of the main library and is intended for demonstration purposes only.
 */

// Example: Retrieve a quest by name
const questName = 'Dragon Slayer I';
const quest = QuestTool.getQuestByName(questName);

if (quest) {
  console.log(`Quest found: ${quest.name}`);
  console.log(`Difficulty: ${quest.difficulty}`);
  console.log(`Length: ${quest.length}`);
  console.log(`Description: ${quest.description}`);
} else {
  console.log(`Quest "${questName}" not found.`);
}
