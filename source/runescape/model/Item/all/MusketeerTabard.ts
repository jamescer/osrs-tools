import { Item } from '../Item';

const musketeerTabardData = {
  id: 12441,
  name: "Musketeer tabard",
  iconUrl: "/assets/items/musketeer-tabard.png",
  examine: "All for one!",
  value: 1880,
  highAlch: 1128,
  lowAlch: 752,
  weight: 1.814,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Musketeer_tabard",
};

export const MusketeerTabard = Item.fromJson(musketeerTabardData);
