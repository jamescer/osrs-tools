import { Item } from '../Item';

const blackDragonhideData = {
  id: 1747,
  name: "Black dragonhide",
  iconUrl: "/assets/items/black-dragonhide.png",
  examine: "The scaly rough hide from a Black Dragon.",
  value: 150,
  highAlch: 90,
  lowAlch: 60,
  weight: 3.175,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: "2004-03-29",
  destroy: "Drop",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Black_dragonhide",
};

export const BlackDragonhide = Item.fromJson(blackDragonhideData);
