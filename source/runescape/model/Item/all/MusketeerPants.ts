import { Item } from '../Item';

const musketeerPantsData = {
  id: 12443,
  name: "Musketeer pants",
  iconUrl: "/assets/items/musketeer-pants.png",
  examine: "One for all!",
  value: 1870,
  highAlch: 1122,
  lowAlch: 748,
  weight: 1.814,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Musketeer_pants",
};

export const MusketeerPants = Item.fromJson(musketeerPantsData);
