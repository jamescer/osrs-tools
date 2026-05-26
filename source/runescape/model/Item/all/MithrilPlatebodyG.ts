import { Item } from '../Item';

const mithrilPlatebodyGData = {
    examine: "Mithril platebody with gold trim.",
    value: 5200,
    highAlch: 3120,
    lowAlch: 2080,
    weight: 0,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Mithril_platebody_(g)",
    id: 12277,
    name: "Mithril platebody (g)",
    iconUrl: "/assets/items/12277.png"
  }

export const MithrilPlatebodyG = Item.fromJson(mithrilPlatebodyGData);
