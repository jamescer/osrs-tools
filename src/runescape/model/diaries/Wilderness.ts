import { getDiaryByName } from './Diary';
import type { Diary } from './Diary';

export const WildernessDiary: Diary = getDiaryByName('Wilderness Diary')!;
export default WildernessDiary;
