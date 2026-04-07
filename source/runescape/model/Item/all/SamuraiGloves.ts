import { Item } from '../Item';

const samuraiGlovesData = {
  id: 20041,
  name: "Samurai gloves",
  iconUrl: "/assets/items/samurai-gloves.png",
  examine: "Armoured gloves of the Samurai.",
  value: 3200,
  highAlch: 1920,
  lowAlch: 1280,
  weight: 0.4,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Samurai_gloves",
};

export const SamuraiGloves = Item.fromJson(samuraiGlovesData);
