import { Item } from '../Item';

const ancientKiteshieldData = {
  id: 12468,
  name: "Ancient kiteshield",
  iconUrl: "/assets/items/ancient-kiteshield.png",
  examine: "Rune kiteshield in the colours of a long-forgotten god.",
  value: 54400,
  highAlch: 32640,
  lowAlch: 21760,
  weight: 5.443,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Ancient_kiteshield",
};

export const AncientKiteshield = Item.fromJson(ancientKiteshieldData);
