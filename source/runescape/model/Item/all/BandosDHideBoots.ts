import { Item } from '../Item';

const bandosDHideBootsData = {
  id: 19924,
  name: "Bandos d'hide boots",
  iconUrl: "/assets/items/bandos-dhide-boots.png",
  examine: "Bandos blessed dragonhide boots.",
  value: 9300,
  highAlch: 5580,
  lowAlch: 3720,
  weight: 1.4,
  members: true,
  tradeable: true,
  equipable: true,
  releaseDate: "2016-07-06",
  destroy: "Wear",
  questItem: false,
  stackable: false,
  noted: true,
  officialWikiUrl: "https://oldschool.runescape.wiki/w/Bandos_d'hide_boots",
};

export const BandosDHideBoots = Item.fromJson(bandosDHideBootsData);
