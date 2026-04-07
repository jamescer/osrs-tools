import { Item } from '../Item';

const dragonChainbodyOrnamentKitData = {
  id: 12534,
  name: "Dragon chainbody ornament kit",
  iconUrl: "/assets/items/dragon-chainbody-ornament-kit.png",
  examine: "Use on a dragon chainbody to make it look fancier!",
  value: 5000,
  highAlch: 3000,
  lowAlch: 2000,
  weight: 0.5,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: "2014-06-12",
  destroy: "Drop",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Dragon_chainbody_ornament_kit",
};

export const DragonChainbodyOrnamentKit = Item.fromJson(dragonChainbodyOrnamentKitData);
