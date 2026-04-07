import { Item } from '../Item';

const rangingPotion4Data = {
  id: 2444,
  name: "Ranging potion(4)",
  iconUrl: "/assets/items/ranging-potion-4.png",
  examine: "4 doses of ranging potion.",
  value: 360,
  highAlch: 216,
  lowAlch: 144,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: "2001-01-01",
  destroy: "Drop",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Ranging_potion(4)",
};

export const RangingPotion4 = Item.fromJson(rangingPotion4Data);
