import { Item } from '../Item';

const bandosDHideBootsData = {
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
    id: 19924,
    name: "Bandos d'hide boots",
    iconUrl: "/assets/items/19924.png"
  }

export const BandosDHideBoots = Item.fromJson(bandosDHideBootsData);
