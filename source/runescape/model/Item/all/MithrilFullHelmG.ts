import { Item } from '../Item';

const mithrilFullHelmGData = {{
    examine: "Mithril full helm with gold trim.",
    value: 1430,
    highAlch: 858,
    lowAlch: 572,
    weight: 0,
    members: false,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Mithril_full_helm_(g)",
    id: 12283,
    name: "Mithril full helm (g)",
    iconUrl: "/assets/items/12283.png"
  }

export const MithrilFullHelmG = Item.fromJson(mithrilFullHelmGData);
