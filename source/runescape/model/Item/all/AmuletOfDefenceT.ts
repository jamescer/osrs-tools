import { Item } from '../Item';

const amuletOfDefenceTData = {
  id: 23309,
  name: "Amulet of defence (t)",
  iconUrl: "/assets/items/amulet-of-defence-t.png",
  examine: "An enchanted emerald amulet of protection that looks good.",
  value: 1275,
  highAlch: 765,
  lowAlch: 510,
  weight: 0.01,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: "2019-04-11",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Amulet_of_defence_(t)",
};

export const AmuletOfDefenceT = Item.fromJson(amuletOfDefenceTData);
