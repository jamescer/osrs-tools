import { Item } from '../Item';

const runeKiteshieldGData = {
    examine: "Rune kiteshield with gold trim.",
    value: 54400,
    highAlch: 32640,
    lowAlch: 21760,
    weight: 5.443,
    members: false,
    tradeable: true,
    equipable: true,
    releaseDate: "2004-05-05",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Rune_kiteshield_(g)",
    id: 2621,
    name: "Rune kiteshield (g)",
    iconUrl: "/assets/items/2621.png"
  }

export const RuneKiteshieldG = Item.fromJson(runeKiteshieldGData);
