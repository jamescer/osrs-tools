import { Item } from '../Item';

const warBlessingData = {
  id: 20232,
  name: "War blessing",
  iconUrl: "/assets/items/war-blessing.png",
  examine: "The blood of the soldier makes the glory of the general.",
  value: 80,
  highAlch: 48,
  lowAlch: 32,
  weight: 0.51,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Equip",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/War_blessing",
};

export const WarBlessing = Item.fromJson(warBlessingData);
