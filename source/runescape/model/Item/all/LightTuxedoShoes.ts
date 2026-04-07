import { Item } from '../Item';

const lightTuxedoShoesData = {
  id: 19982,
  name: "Light tuxedo shoes",
  iconUrl: "/assets/items/light-tuxedo-shoes.png",
  examine: "Light shoes to match your light tuxedo.",
  value: 3000,
  highAlch: 1800,
  lowAlch: 1200,
  weight: 0.5,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Light_tuxedo_shoes",
};

export const LightTuxedoShoes = Item.fromJson(lightTuxedoShoesData);
