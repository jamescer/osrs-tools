import { Item } from '../Item';

const dragonDefenderOrnamentKitData = {
  id: 20143,
  name: "Dragon defender ornament kit",
  iconUrl: "/assets/items/dragon-defender-ornament-kit.png",
  examine: "Use on the dragon defender to trim it with gold.",
  value: 5000,
  highAlch: 3000,
  lowAlch: 2000,
  weight: 0.5,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: "2016-07-06",
  destroy: "Drop",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Dragon_defender_ornament_kit",
};

export const DragonDefenderOrnamentKit = Item.fromJson(dragonDefenderOrnamentKitData);
