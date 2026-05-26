import { Item } from '../Item';

const bandosCoifData = {
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
    id: 12504,
    name: "Bandos coif",
    iconUrl: "/assets/items/12504.png"
  }

export const BandosCoif = Item.fromJson(bandosCoifData);
