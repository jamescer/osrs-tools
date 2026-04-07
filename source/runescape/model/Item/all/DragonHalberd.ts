import { Item } from '../Item';

const dragonHalberdData = {
  id: 3204,
  name: "Dragon halberd",
  iconUrl: "/assets/items/dragon-halberd.png",
  examine: "A dragon halberd.",
  value: 250000,
  highAlch: 150000,
  lowAlch: 100000,
  weight: 3.175,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2004-09-20",
  destroy: "Wield",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Dragon_halberd",
};

export const DragonHalberd = Item.fromJson(dragonHalberdData);
