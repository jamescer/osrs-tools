import { Item } from '../Item';

const guthixDHideShieldData = {
  id: 23188,
  name: "Guthix d'hide shield",
  iconUrl: "/assets/items/guthix-dhide-shield.png",
  examine: "Guthix blessed wooden shield covered in dragon leather.",
  value: 28334,
  highAlch: 17000,
  lowAlch: 11333,
  weight: 8,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2019-04-11",
  destroy: "Wield",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Guthix_d'hide_shield",
};

export const GuthixDHideShield = Item.fromJson(guthixDHideShieldData);
