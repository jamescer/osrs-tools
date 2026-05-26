import { Item } from '../Item';

const saradominKiteshieldData = {
    examine: "Rune kiteshield in the colours of Saradomin.",
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
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Saradomin_kiteshield",
    id: 2667,
    name: "Saradomin kiteshield",
    iconUrl: "/assets/items/2667.png"
  }

export const SaradominKiteshield = Item.fromJson(saradominKiteshieldData);
