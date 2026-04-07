import { Item } from '../Item';

const bandosCloakData = {
  id: 12273,
  name: "Bandos cloak",
  iconUrl: "/assets/items/bandos-cloak.png",
  examine: "A Bandos cloak.",
  value: 2000,
  highAlch: 1200,
  lowAlch: 800,
  weight: 0.4,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Bandos_cloak",
};

export const BandosCloak = Item.fromJson(bandosCloakData);
