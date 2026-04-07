import { Item } from '../Item';

const topHatData = {
  id: 12432,
  name: "Top hat",
  iconUrl: "/assets/items/top-hat.png",
  examine: "Aint no rabbits in this hat.",
  value: 1800,
  highAlch: 1080,
  lowAlch: 720,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Top_hat",
};

export const TopHat = Item.fromJson(topHatData);
