import { Item } from '../Item';

const bandosKiteshieldData = {
  id: 12488,
  name: "Bandos kiteshield",
  iconUrl: "/assets/items/bandos-kiteshield.png",
  examine: "Rune kiteshield in the colours of Bandos.",
  value: 54400,
  highAlch: 32640,
  lowAlch: 21760,
  weight: 5.443,
  members: false,
  tradeable: true,
  equipable: true,
  releaseDate: "2014-06-12",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Bandos_kiteshield",
};

export const BandosKiteshield = Item.fromJson(bandosKiteshieldData);
