import { Item } from '../Item';

const adamantDaggerData = {{
    examine: "Short and deadly.",
    value: 800,
    highAlch: 480,
    lowAlch: 320,
    weight: 0,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Adamant_dagger",
    id: 1211,
    name: "Adamant dagger",
    iconUrl: "/assets/items/1211.png"
  }

export const AdamantDagger = Item.fromJson(adamantDaggerData);
