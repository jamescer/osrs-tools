import { Item } from '../Item';

const samuraiKasaData = {
  id: 20035,
  name: "Samurai kasa",
  iconUrl: "/assets/items/samurai-kasa.png",
  examine: "A conical hat.",
  value: 4000,
  highAlch: 2400,
  lowAlch: 1600,
  weight: 0.6,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Samurai_kasa",
};

export const SamuraiKasa = Item.fromJson(samuraiKasaData);
