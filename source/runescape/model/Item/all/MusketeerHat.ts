import { Item } from '../Item';

const musketeerHatData = {
  id: 12351,
  name: "Musketeer hat",
  iconUrl: "/assets/items/musketeer-hat.png",
  examine: "Engarde!",
  value: 3500,
  highAlch: 2100,
  lowAlch: 1400,
  weight: 0.005,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Musketeer_hat",
};

export const MusketeerHat = Item.fromJson(musketeerHatData);
