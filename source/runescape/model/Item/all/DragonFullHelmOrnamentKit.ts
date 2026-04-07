import { Item } from '../Item';

const dragonFullHelmOrnamentKitData = {
  id: 12538,
  name: "Dragon full helm ornament kit",
  iconUrl: "/assets/items/dragon-full-helm-ornament-kit.png",
  examine: "Use on a dragon full helm to make it look fancier!",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Dragon_full_helm_ornament_kit",
};

export const DragonFullHelmOrnamentKit = Item.fromJson(dragonFullHelmOrnamentKitData);
