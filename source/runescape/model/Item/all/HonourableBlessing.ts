import { Item } from '../Item';

const honourableBlessingData = {
  id: 20229,
  name: "Honourable blessing",
  iconUrl: "/assets/items/honourable-blessing.png",
  examine: "Law is not law if it violates the principles of eternal justice.",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Honourable_blessing",
};

export const HonourableBlessing = Item.fromJson(honourableBlessingData);
