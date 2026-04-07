import { Item } from '../Item';

const ThirdAgePickaxeData = {
  id: 20014,
  name: "3rd age pickaxe",
  iconUrl: "/assets/items/3rd-age-pickaxe.png",
  examine: "A beautifully crafted pickaxe, shaped by ancient smiths.",
  value: 97950,
  highAlch: 58770,
  lowAlch: 39180,
  weight: 2.4,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wield",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/3rd_age_pickaxe",
};

export const ThirdAgePickaxe = Item.fromJson(ThirdAgePickaxeData);
