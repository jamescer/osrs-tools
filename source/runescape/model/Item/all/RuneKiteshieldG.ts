import { Item } from '../Item';

const runeKiteshieldGData = {
  id: 2621,
  name: "Rune kiteshield (g)",
  iconUrl: "/assets/items/rune-kiteshield-g.png",
  examine: "Rune kiteshield with gold trim.",
  value: 54400,
  highAlch: 32640,
  lowAlch: 21760,
  weight: 5.443,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: "2004-05-05",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Rune_kiteshield_(g)",
};

export const RuneKiteshieldG = Item.fromJson(runeKiteshieldGData);
