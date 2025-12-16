import { LevelRequirement, QuestRequirement, ItemRequirement, Requirement } from '../Requirement';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const diariesData: Record<string, any> = require('../../resources/diary/diaries.json');

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

export interface Diary {
  name: string;
  itemReward?: string;
  rewards?: any;
  easy: DiaryLevel;
  medium: DiaryLevel;
  hard: DiaryLevel;
  elite: DiaryLevel;
}

function mapSkillReq(skillReq: any) {
  // skillReq: { skill: string, level: number, boostable: boolean }
  if (!skillReq || !skillReq.skill) return null;
  return new LevelRequirement(skillReq.skill, skillReq.level ?? 1, !!skillReq.boostable);
}

function mapTask(task: any): DiaryTask {
  const requirements: Requirement[] = [];

  if (task.requirements) {
    // quests
    if (Array.isArray(task.requirements.quests)) {
      for (const q of task.requirements.quests) {
        if (q && typeof q === 'string') requirements.push(new QuestRequirement(q));
      }
    }
    // skills
    if (Array.isArray(task.requirements.skills)) {
      for (const s of task.requirements.skills) {
        const lr = mapSkillReq(s);
        if (lr) requirements.push(lr);
      }
    }
  }

  // items are stored as freeform notes in the resource file
  const notes =
    task.other?.itemsNeeded || task.other?.itemsNeeded === '' ? task.other.itemsNeeded : undefined;

  return {
    description: task.description || '',
    requirements,
    notes,
  };
}

function mapLevel(level: any): DiaryLevel {
  if (!level) return { tasks: [] };
  const tasks = Array.isArray(level.tasks) ? level.tasks.map(mapTask) : [];
  return {
    itemReward: level.itemReward,
    rewards: level.rewards,
    tasks,
    itemsRequired: level.itemsRequired,
    itemRequirements: Array.isArray(level.itemsRequired)
      ? level.itemsRequired.map((s: string) => mapItemString(s)).filter(Boolean as any)
      : undefined,
    questsRequired: level.questsRequired,
    skillsRequired: level.skillsRequired,
  };
}

function mapItemString(s: string): ItemRequirement | null {
  if (!s || typeof s !== 'string') return null;
  // Try to extract a leading quantity: "3 strawberry seeds" or "2x item"
  const qtyMatch = s.trim().match(/^(\d+)\s*(?:x|×)?\s*(.+)$/i);
  let qty = 1;
  let name = s.trim();
  if (qtyMatch) {
    qty = parseInt(qtyMatch[1], 10) || 1;
    name = qtyMatch[2].trim();
  }
  // detect notes like '(noted)' or '(not consumed)'
  const noted = /noted/i.test(name);
  const notConsumed = /not consumed/i.test(name);
  // strip parenthetical notes from name
  name = name.replace(/\(.+\)/g, '').trim();
  return new ItemRequirement(name, qty, { consumed: !notConsumed, noted, notes: s });
}

function buildDiary(key: string, raw: any): Diary {
  return {
    name: raw.name || key,
    itemReward: raw.itemReward,
    rewards: raw.rewards,
    easy: mapLevel(raw.easy),
    medium: mapLevel(raw.medium),
    hard: mapLevel(raw.hard),
    elite: mapLevel(raw.elite),
  };
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
const diaries: Record<string, Diary> = {};
for (const k of Object.keys(diariesData)) {
  diaries[k] = buildDiary(k, diariesData[k]);
}

export default diaries;

// Named exports for convenient imports
export const ArdougneDiary = diaries['Ardougne Diary'];
export const DesertDiary = diaries['Desert Diary'];
export const FaladorDiary = diaries['Falador Diary'];
export const FremennikDiary = diaries['Fremennik Diary'];
export const KandarinDiary = diaries['Kandarin Diary'];
export const KaramjaDiary = diaries['Karamja Diary'];
export const KourendKebosDiary = diaries['Kourend & Kebos Diary'];
export const LumbridgeDraynorDiary = diaries['Lumbridge & Draynor Diary'];
export const MorytaniaDiary = diaries['Morytania Diary'];
export const VarrockDiary = diaries['Varrock Diary'];
export const WesternProvincesDiary = diaries['Western Provinces Diary'];
export const WildernessDiary = diaries['Wilderness Diary'];
