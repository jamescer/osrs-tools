import { Item } from '../Item';

const mithrilKiteshieldTData = {
    examine: "Mithril kiteshield with trim.",
    value: 2210,
    highAlch: 1326,
    lowAlch: 884,
    weight: 0,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Mithril_kiteshield_(t)",
    id: 12291,
    name: "Mithril kiteshield (t)",
    iconUrl: "/assets/items/12291.png"
  }

export const MithrilKiteshieldT = Item.fromJson(mithrilKiteshieldTData);
