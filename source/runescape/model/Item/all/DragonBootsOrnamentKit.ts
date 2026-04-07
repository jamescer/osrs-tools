import { Item } from '../Item';

const dragonBootsOrnamentKitData = {
  id: 22231,
  name: "Dragon boots ornament kit",
  iconUrl: "/assets/items/dragon-boots-ornament-kit.png",
  examine: "Use on some dragon boots to make them look fancier!",
  value: 5000,
  highAlch: 3000,
  lowAlch: 2000,
  weight: 0.5,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: "2018-01-25",
  destroy: "Drop",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Dragon_boots_ornament_kit",
};

export const DragonBootsOrnamentKit = Item.fromJson(dragonBootsOrnamentKitData);
