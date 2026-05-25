import { Item } from '../Item';

const adamantLongswordData = {{
    examine: "A razor sharp longsword.",
    value: 3200,
    highAlch: 1920,
    lowAlch: 1280,
    weight: 0,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Adamant_longsword",
    id: 1301,
    name: "Adamant longsword",
    iconUrl: "/assets/items/1301.png"
  }

export const AdamantLongsword = Item.fromJson(adamantLongswordData);
