import { Item } from '../Item';

const adamantKiteshieldTData = {{
    examine: "Adamant kiteshield with trim.",
    value: 5440,
    highAlch: 3264,
    lowAlch: 2176,
    weight: 0,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Adamant_kiteshield_(t)",
    id: 2603,
    name: "Adamant kiteshield (t)",
    iconUrl: "/assets/items/2603.png"
  }

export const AdamantKiteshieldT = Item.fromJson(adamantKiteshieldTData);
