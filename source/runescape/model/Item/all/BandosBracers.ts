import { Item } from '../Item';

const bandosBracersData = {
  id: 12498,
  name: "Bandos bracers",
  iconUrl: "/assets/items/bandos-bracers.png",
  examine: "Bandos blessed dragonhide vambraces.",
  value: 4000,
  highAlch: 2400,
  lowAlch: 1600,
  weight: 1,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Bandos_bracers",
};

export const BandosBracers = Item.fromJson(bandosBracersData);
