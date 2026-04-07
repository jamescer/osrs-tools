import { Item } from '../Item';

const samuraiGreavesData = {
  id: 20044,
  name: "Samurai greaves",
  iconUrl: "/assets/items/samurai-greaves.png",
  examine: "Armoured greaves of the Samurai.",
  value: 3200,
  highAlch: 1920,
  lowAlch: 1280,
  weight: 1.5,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Samurai_greaves",
};

export const SamuraiGreaves = Item.fromJson(samuraiGreavesData);
