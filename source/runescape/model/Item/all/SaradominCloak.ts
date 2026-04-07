import { Item } from '../Item';

const saradominCloakData = {
  id: 10446,
  name: "Saradomin cloak",
  iconUrl: "/assets/items/saradomin-cloak.png",
  examine: "A Saradomin cloak.",
  value: 2000,
  highAlch: 1200,
  lowAlch: 800,
  weight: 0.4,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2006-12-05",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Saradomin_cloak",
};

export const SaradominCloak = Item.fromJson(saradominCloakData);
