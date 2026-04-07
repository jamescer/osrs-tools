import { Item } from '../Item';

const dragonLegsSkirtOrnamentKitData = {
  id: 12536,
  name: "Dragon legs/skirt ornament kit",
  iconUrl: "/assets/items/dragon-legs-skirt-ornament-kit.png",
  examine: "Use on dragon platelegs or plateskirt to make them look fancier!",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Dragon_legs%2Fskirt_ornament_kit",
};

export const DragonLegsSkirtOrnamentKit = Item.fromJson(dragonLegsSkirtOrnamentKitData);
