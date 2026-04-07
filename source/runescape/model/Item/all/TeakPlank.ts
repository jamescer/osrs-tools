import { Item } from '../Item';

const teakPlankData = {
  id: 8780,
  name: "Teak plank",
  iconUrl: "/assets/items/teak-plank.png",
  examine: "A plank of fine teak.",
  value: 500,
  highAlch: 300,
  lowAlch: 200,
  weight: 0.8,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: "2006-05-31",
  destroy: "Drop",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Teak_plank",
};

export const TeakPlank = Item.fromJson(teakPlankData);
