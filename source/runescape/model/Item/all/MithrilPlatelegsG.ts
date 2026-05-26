import { Item } from '../Item';

const mithrilPlatelegsGData = {
    examine: "Mithril platelegs with gold trim.",
    value: 2600,
    highAlch: 1560,
    lowAlch: 1040,
    weight: 0,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Mithril_platelegs_(g)",
    id: 12279,
    name: "Mithril platelegs (g)",
    iconUrl: "/assets/items/12279.png"
  }

export const MithrilPlatelegsG = Item.fromJson(mithrilPlatelegsGData);
