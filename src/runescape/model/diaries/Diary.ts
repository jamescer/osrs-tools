import { ItemRequirement, LevelRequirement, QuestRequirement, Requirement } from '../Requirement';
import { ArdougneDiary as typedArdougneDiary } from './ardougne/Ardougne';
import { DesertDiary as typedDesertDiary } from './desert/Desert';
import { FremennikDiary as typedFremennikDiary } from './fremennik/Fremennik';
import { KandarinDiary as typedKandarinDiary } from './kandarin/Kandarin';
import { KaramjaDiary as typedKaramjaDiary } from './karamja/Karamja';
import { KourendKebosDiary as typedKourendKebosDiary } from './kourend-kebos/KourendKebos';
import { LumbridgeDraynorDiary as typedLumbridgeDraynorDiary } from './lumbridge-draynor/LumbridgeDraynor';
import { MorytaniaDiary as typedMorytaniaDiary } from './morytania/Morytania';
import { VarrockDiary as typedVarrockDiary } from './varrock/Varrock';
import { WildernessDiary as typedWildernessDiary } from './wilderness/Wilderness';

export interface DiaryTask {
  description: string;
  requirements: Requirement[];
  notes?: string;
}

export interface DiaryLevel {
  itemReward?: string;
  rewards?: any;
  tasks: DiaryTask[];
  itemsRequired?: string[];
  itemRequirements?: ItemRequirement[];
  questsRequired?: string[];
  skillsRequired?: any[];
}

/**
 * Diary interface representing the structure of a RuneScape diary, including its name, rewards, and tasks for each difficulty level. Tasks include descriptions, requirements (such as quests and skills), and optional notes.
 * The diaries are built from a JSON resource file and can be accessed by name or retrieved as a list of all diaries.
 * Example usage:
 * const ardougneDiary = getDiaryByName("Ardougne Diary");
 * if (ardougneDiary) {
 *   console.log(ardougneDiary.name); // "Ardougne Diary"
 *   console.log(ardougneDiary.easy.tasks[0].description); // Description of the first easy task
 *   console.log(ardougneDiary.easy.tasks[0].requirements); // Requirements for the first easy task
 * }
 */
export interface Diary {
  name: string;
  itemReward?: string;
  rewards?: any;
  easy: DiaryLevel;
  medium: DiaryLevel;
  hard: DiaryLevel;
  elite: DiaryLevel;
}

export function getDiaryByName(name: string): Diary | undefined {
  // exact match first
  if (diaries[name]) return diaries[name];
  // try case-insensitive
  const found = Object.keys(diaries).find(k => k.toLowerCase() === name.toLowerCase());
  return found ? diaries[found] : undefined;
}

export function getAllDiaries(): Diary[] {
  return Object.values(diaries);
}

//Build the Diaries for Export
const diaries: Record<string, Diary> = {
  'Ardougne Diary': typedArdougneDiary,
  'Desert Diary': typedDesertDiary,
  'Fremennik Diary': typedFremennikDiary,
  'Kandarin Diary': typedKandarinDiary,
  'Karamja Diary': typedKaramjaDiary,
  'Kourend & Kebos Diary': typedKourendKebosDiary,
  'Lumbridge & Draynor Diary': typedLumbridgeDraynorDiary,
  'Morytania Diary': typedMorytaniaDiary,
  'Varrock Diary': typedVarrockDiary,
  'Wilderness Diary': typedWildernessDiary,
};

export default diaries;

export const ArdougneDiary = diaries['Ardougne Diary'];
export const DesertDiary = diaries['Desert Diary'];
export const FremennikDiary = diaries['Fremennik Diary'];
export const KandarinDiary = diaries['Kandarin Diary'];
export const KaramjaDiary = diaries['Karamja Diary'];
export const KourendKebosDiary = diaries['Kourend & Kebos Diary'];
export const LumbridgeDraynorDiary = diaries['Lumbridge & Draynor Diary'];
export const MorytaniaDiary = diaries['Morytania Diary'];
export const VarrockDiary = diaries['Varrock Diary'];
export const WildernessDiary = diaries['Wilderness Diary'];
