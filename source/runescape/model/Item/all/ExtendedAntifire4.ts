import { Item } from '../Item';

const extendedAntifire4Data = {
  id: 11951,
  name: "Extended antifire(4)",
  iconUrl: "/assets/items/extended-antifire-4.png",
  examine: "4 doses of extended anti-firebreath potion.",
  value: 440,
  highAlch: 264,
  lowAlch: 176,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: "2001-01-01",
  destroy: "Drop",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Extended_antifire(4)",
};

export const ExtendedAntifire4 = Item.fromJson(extendedAntifire4Data);
