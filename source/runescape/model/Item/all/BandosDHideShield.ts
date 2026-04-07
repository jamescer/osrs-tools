import { Item } from '../Item';

const bandosDHideShieldData = {
  id: 23203,
  name: "Bandos d'hide shield",
  iconUrl: "/assets/items/bandos-dhide-shield.png",
  examine: "Bandos blessed wooden shield covered in dragon leather.",
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
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Bandos_d'hide_shield",
};

export const BandosDHideShield = Item.fromJson(bandosDHideShieldData);
