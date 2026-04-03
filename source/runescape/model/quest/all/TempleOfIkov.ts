import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const TempleOfIkov: Quest = { age: 'Fifth Age', description: 'Complete a quest in the Temple of Ikov.', difficulty: QuestDifficulty.Intermediate, id: 1016, length: QuestLength.Medium, members: true, miniquest: false, name: 'Temple of Ikov', questPoints: 1, recommendations: [], recommendedPrayers: [], recommendedSkills: {}, requirements: [], rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 1, unlocks: [] }, series: 'Mahjarrat, #5', shortName: 'Temple of Ikov', startLocation: 'Temple', status: QuestStatus.NotStarted, steps: ['Complete temple'], url: 'https://oldschool.runescape.wiki/w/Temple_of_Ikov' };
export default TempleOfIkov;
