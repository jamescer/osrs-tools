import { Item } from '../Item';

const bandosCoifData = {
  id: 12504,
  name: "Bandos coif",
  iconUrl: "/assets/items/bandos-coif.png",
  examine: "Bandos blessed dragonhide coif.",
  value: 2000,
  highAlch: 1200,
  lowAlch: 800,
  weight: 0.9,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Bandos_coif",
};

export const BandosCoif = Item.fromJson(bandosCoifData);
