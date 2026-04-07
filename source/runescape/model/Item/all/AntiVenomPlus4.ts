import { Item } from '../Item';

const antiVenomPlus4Data = {
  id: 12913,
  name: "Anti-venom+(4)",
  iconUrl: "/assets/items/anti-venom-plus-4.png",
  examine: "4 doses of super antivenom potion.",
  value: 444,
  highAlch: 266,
  lowAlch: 177,
  weight: 0,
  members: true,
  tradeable: true,
  equipable: false,
  releaseDate: "2001-01-01",
  destroy: "Drop",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Anti-venom%2B(4)",
};

export const AntiVenomPlus4 = Item.fromJson(antiVenomPlus4Data);
