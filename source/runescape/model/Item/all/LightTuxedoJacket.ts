import { Item } from '../Item';

const lightTuxedoJacketData = {
  id: 19973,
  name: "Light tuxedo jacket",
  iconUrl: "/assets/items/light-tuxedo-jacket.png",
  examine: "A light tuxedo jacket with a matching shirt.",
  value: 10000,
  highAlch: 6000,
  lowAlch: 4000,
  weight: 2,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Light_tuxedo_jacket",
};

export const LightTuxedoJacket = Item.fromJson(lightTuxedoJacketData);
