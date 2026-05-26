import { Item } from "../Item";

const MithrilBarData = {
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
    id: 2359,
    name: "Mithril bar"
  }
export const MithrilBar = Item.fromJson(MithrilBarData);
