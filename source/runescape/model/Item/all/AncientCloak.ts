import { Item } from '../Item';

const ancientCloakData = {
  id: 12197,
  name: "Ancient cloak",
  iconUrl: "/assets/items/ancient-cloak.png",
  examine: "An Ancient cloak.",
  value: 2000,
  highAlch: 1200,
  lowAlch: 800,
  weight: 0.003,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Ancient_cloak",
};

export const AncientCloak = Item.fromJson(ancientCloakData);
