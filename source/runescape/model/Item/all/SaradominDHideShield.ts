import { Item } from '../Item';

const saradominDHideShieldData = {
  id: 23191,
  name: "Saradomin d'hide shield",
  iconUrl: "/assets/items/saradomin-dhide-shield.png",
  examine: "Saradomin blessed wooden shield covered in dragon leather.",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Saradomin_d'hide_shield",
};

export const SaradominDHideShield = Item.fromJson(saradominDHideShieldData);
