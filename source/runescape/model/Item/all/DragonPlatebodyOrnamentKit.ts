import { Item } from '../Item';

const dragonPlatebodyOrnamentKitData = {
  id: 22236,
  name: "Dragon platebody ornament kit",
  iconUrl: "/assets/items/dragon-platebody-ornament-kit.png",
  examine: "Use on a dragon platebody to make it look fancier!",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Dragon_platebody_ornament_kit",
};

export const DragonPlatebodyOrnamentKit = Item.fromJson(dragonPlatebodyOrnamentKitData);
