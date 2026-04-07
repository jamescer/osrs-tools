import { Item } from '../Item';

const samuraiBootsData = {
  id: 20047,
  name: "Samurai boots",
  iconUrl: "/assets/items/samurai-boots.png",
  examine: "Armoured socks of the Samurai.",
  value: 4500,
  highAlch: 2700,
  lowAlch: 1800,
  weight: 0.95,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Samurai_boots",
};

export const SamuraiBoots = Item.fromJson(samuraiBootsData);
