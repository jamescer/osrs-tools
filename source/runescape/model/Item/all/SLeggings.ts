import { Item } from '../Item';

const sLeggingsData = {
  id: 20104,
  name: "Ankou's leggings",
  iconUrl: "/assets/items/ankous-leggings.png",
  examine: "These leggings will make your flesh transparent.",
  value: 1,
  highAlch: 0,
  lowAlch: 0,
  weight: 0.5,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Ankou's_leggings",
};

export const SLeggings = Item.fromJson(sLeggingsData);
