import raw from '../../resources/oldSchoolRunescapeItems.json';
import { OsrsItemImage } from './OsrsItemImage';

export const OldSchoolRunescapeItems: readonly OsrsItemImage[] = raw;

export const OldSchoolRunescapeItemsById: ReadonlyMap<number, OsrsItemImage> = new Map(
  OldSchoolRunescapeItems.map(item => [item.id, item]),
);
