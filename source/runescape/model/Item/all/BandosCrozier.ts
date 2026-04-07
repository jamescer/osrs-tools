import { Item } from '../Item';

const bandosCrozierData = {
  id: 12275,
  name: "Bandos crozier",
  iconUrl: "/assets/items/bandos-crozier.png",
  examine: "A Bandos crozier.",
  value: 5000,
  highAlch: 3000,
  lowAlch: 2000,
  weight: 2,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wield",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Bandos_crozier",
};

export const BandosCrozier = Item.fromJson(bandosCrozierData);
