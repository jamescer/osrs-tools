import { Item } from "../Item";

const MithrilCrossbowData = {
    examine: "",
    value: 0,
    highAlch: 0,
    lowAlch: 0,
    weight: 0,
    members: false,
    tradeable: false,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "",
    id: 9181,
    name: "Mithril crossbow"
  }
export const MithrilCrossbow = Item.fromJson(MithrilCrossbowData);
