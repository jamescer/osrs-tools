import { Item } from '../Item';

const adamantFullHelmData = {{
    examine: "A full face helmet.",
    value: 3520,
    highAlch: 2112,
    lowAlch: 1408,
    weight: 0,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Adamant_full_helm",
    id: 1161,
    name: "Adamant full helm",
    iconUrl: "/assets/items/1161.png"
  }

export const AdamantFullHelm = Item.fromJson(adamantFullHelmData);
