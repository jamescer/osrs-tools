import { Item } from '../Item';

const bandosChapsData = {
    examine: "Bandos blessed dragonhide chaps.",
    value: 6000,
    highAlch: 3600,
    lowAlch: 2400,
    weight: 5,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2014-06-12",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Bandos_chaps",
    id: 12502,
    name: "Bandos chaps",
    iconUrl: "/assets/items/12502.png"
  }

export const BandosChaps = Item.fromJson(bandosChapsData);
