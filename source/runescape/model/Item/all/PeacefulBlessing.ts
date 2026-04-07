import { Item } from '../Item';

const peacefulBlessingData = {
  id: 20226,
  name: "Peaceful blessing",
  iconUrl: "/assets/items/peaceful-blessing.png",
  examine: "Life and death, old and new, day and night. Balance is the key to all.",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Peaceful_blessing",
};

export const PeacefulBlessing = Item.fromJson(peacefulBlessingData);
