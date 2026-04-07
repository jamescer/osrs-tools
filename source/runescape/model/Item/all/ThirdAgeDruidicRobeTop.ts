import { Item } from '../Item';

const ThirdAgeDruidicRobeTopData = {
  id: 23336,
  name: "3rd age druidic robe top",
  iconUrl: "/assets/items/3rd-age-druidic-robe-top.png",
  examine: "A fabulously ancient woven robe top as worn by the druids of old.",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/3rd_age_druidic_robe_top",
};

export const ThirdAgeDruidicRobeTop = Item.fromJson(ThirdAgeDruidicRobeTopData);
