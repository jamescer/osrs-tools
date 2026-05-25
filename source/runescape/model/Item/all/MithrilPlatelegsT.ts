import { Item } from '../Item';

const mithrilPlatelegsTData = {{
    examine: "Mithril platelegs with trim.",
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
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Mithril_platelegs_(t)",
    id: 12289,
    name: "Mithril platelegs (t)",
    iconUrl: "/assets/items/12289.png"
  }

export const MithrilPlatelegsT = Item.fromJson(mithrilPlatelegsTData);
