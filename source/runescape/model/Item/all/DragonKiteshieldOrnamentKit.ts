import { Item } from '../Item';

const dragonKiteshieldOrnamentKitData = {
  id: 22239,
  name: "Dragon kiteshield ornament kit",
  iconUrl: "/assets/items/dragon-kiteshield-ornament-kit.png",
  examine: "Use on a dragon kiteshield to make it look fancier!",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Dragon_kiteshield_ornament_kit",
};

export const DragonKiteshieldOrnamentKit = Item.fromJson(dragonKiteshieldOrnamentKitData);
