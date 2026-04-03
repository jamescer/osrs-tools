import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const SheepShearer: Quest = { age: 'Fifth Age', description: 'Shear sheep for a farmer.', difficulty: QuestDifficulty.Novice, id: 1003, length: QuestLength.VeryShort, members: false, miniquest: false, name: 'Sheep Shearer', questPoints: 1, recommendations: [], recommendedPrayers: [], recommendedSkills: {}, requirements: [], rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 1, unlocks: [] }, series: 'None', shortName: 'Sheep Shearer', startLocation: 'Lumbridge Farm', status: QuestStatus.NotStarted, steps: ['Shear sheep'], url: 'https://oldschool.runescape.wiki/w/Sheep_Shearer' };
export default SheepShearer;
