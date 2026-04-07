import { Item } from '../Item';

const ancientDHideShieldData = {
  id: 23197,
  name: "Ancient d'hide shield",
  iconUrl: "/assets/items/ancient-dhide-shield.png",
  examine: "Ancient blessed wooden shield covered in dragon leather.",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Ancient_d'hide_shield",
};

export const AncientDHideShield = Item.fromJson(ancientDHideShieldData);
