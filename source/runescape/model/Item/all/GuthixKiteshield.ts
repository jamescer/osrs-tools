import { Item } from '../Item';

const guthixKiteshieldData = {
  id: 2675,
  name: "Guthix kiteshield",
  iconUrl: "/assets/items/guthix-kiteshield.png",
  examine: "Rune kiteshield in the colours of Guthix.",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Guthix_kiteshield",
};

export const GuthixKiteshield = Item.fromJson(guthixKiteshieldData);
