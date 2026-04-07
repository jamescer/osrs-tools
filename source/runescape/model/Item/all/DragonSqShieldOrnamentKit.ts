import { Item } from '../Item';

const dragonSqShieldOrnamentKitData = {
  id: 12532,
  name: "Dragon sq shield ornament kit",
  iconUrl: "/assets/items/dragon-sq-shield-ornament-kit.png",
  examine: "Use on a dragon square shield to make it look fancier!",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Dragon_sq_shield_ornament_kit",
};

export const DragonSqShieldOrnamentKit = Item.fromJson(dragonSqShieldOrnamentKitData);
