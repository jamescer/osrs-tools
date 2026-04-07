import { Item } from '../Item';

const runeKiteshieldData = {
  id: 1201,
  name: "Rune kiteshield",
  iconUrl: "/assets/items/rune-kiteshield.png",
  examine: "A large metal shield.",
  value: 54400,
  highAlch: 32640,
  lowAlch: 21760,
  weight: 5.443,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: "2001-08-13",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Rune_kiteshield",
};

export const RuneKiteshield = Item.fromJson(runeKiteshieldData);
