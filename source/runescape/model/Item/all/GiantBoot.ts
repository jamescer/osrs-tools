import { Item } from '../Item';

const giantBootData = {
  id: 23252,
  name: "Giant boot",
  iconUrl: "/assets/items/giant-boot.png",
  examine: "Worn on head. Warning: Smelly.",
  value: 14000,
  highAlch: 8400,
  lowAlch: 5600,
  weight: 0.5,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2019-04-11",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Giant_boot",
};

export const GiantBoot = Item.fromJson(giantBootData);
