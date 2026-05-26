import { Item } from '../Item';

const gildedScimitarData = {
    examine: "Rune scimitar with gold plate.",
    value: 25600,
    highAlch: 15360,
    lowAlch: 10240,
    weight: 1.814,
    members: false,
    tradeable: true,
    equipable: true,
    releaseDate: "2014-06-12",
    destroy: "Wield",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Gilded_scimitar",
    id: 12389,
    name: "Gilded scimitar",
    iconUrl: "/assets/items/12389.png"
  }

export const GildedScimitar = Item.fromJson(gildedScimitarData);
