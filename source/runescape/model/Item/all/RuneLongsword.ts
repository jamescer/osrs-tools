import { Item } from '../Item';

const runeLongswordData = {{
    examine: "A razor sharp longsword.",
    value: 32000,
    highAlch: 19200,
    lowAlch: 12800,
    weight: 0,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Rune_longsword",
    id: 1303,
    name: "Rune longsword",
    iconUrl: "/assets/items/1303.png"
  }

export const RuneLongsword = Item.fromJson(runeLongswordData);
