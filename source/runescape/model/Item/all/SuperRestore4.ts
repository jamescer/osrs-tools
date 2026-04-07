import { Item } from '../Item';

const superRestore4Data = {
  id: 3024,
  name: "Super restore(4)",
  iconUrl: "/assets/items/super-restore-4.png",
  examine: "4 doses of super restore potion.",
  value: 300,
  highAlch: 180,
  lowAlch: 120,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: "2001-01-01",
  destroy: "Drop",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Super_restore(4)",
};

export const SuperRestore4 = Item.fromJson(superRestore4Data);
