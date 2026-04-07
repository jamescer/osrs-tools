import { Item } from '../Item';

const katanaData = {
  id: 12357,
  name: "Katana",
  iconUrl: "/assets/items/katana.png",
  examine: "Created by Hattori Hanzo in the Eastern Lands.",
  value: 24000,
  highAlch: 14400,
  lowAlch: 9600,
  weight: 0.453,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wield",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Katana",
};

export const Katana = Item.fromJson(katanaData);
