import { Item } from '../Item';

const bandosStoleData = {
  id: 12269,
  name: "Bandos stole",
  iconUrl: "/assets/items/bandos-stole.png",
  examine: "A Bandos stole.",
  value: 2500,
  highAlch: 1500,
  lowAlch: 1000,
  weight: 0.01,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Bandos_stole",
};

export const BandosStole = Item.fromJson(bandosStoleData);
