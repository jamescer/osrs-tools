import { Item } from '../Item';

const lightTrousersData = {
  id: 19979,
  name: "Light trousers",
  iconUrl: "/assets/items/light-trousers.png",
  examine: "Light tuxedo trousers with matching stockings.",
  value: 6000,
  highAlch: 3600,
  lowAlch: 2400,
  weight: 1,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Light_trousers",
};

export const LightTrousers = Item.fromJson(lightTrousersData);
