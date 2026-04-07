import { Item } from '../Item';

const dragonScimitarData = {
  id: 4587,
  name: "Dragon scimitar",
  iconUrl: "/assets/items/dragon-scimitar.png",
  examine: "A vicious, curved sword.",
  value: 100000,
  highAlch: 60000,
  lowAlch: 40000,
  weight: 1.814,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2005-03-29",
  destroy: "Wield",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Dragon_scimitar",
};

export const DragonScimitar = Item.fromJson(dragonScimitarData);
