import { Item } from '../Item';

const ThirdAgeDruidicRobeBottomsData = {
  id: 23339,
  name: "3rd age druidic robe bottoms",
  iconUrl: "/assets/items/3rd-age-druidic-robe-bottoms.png",
  examine: "A fabulously ancient woven robe as worn by the druids of old.",
  value: 200000,
  highAlch: 120000,
  lowAlch: 80000,
  weight: 1.5,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2019-04-11",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/3rd_age_druidic_robe_bottoms",
};

export const ThirdAgeDruidicRobeBottoms = Item.fromJson(ThirdAgeDruidicRobeBottomsData);
