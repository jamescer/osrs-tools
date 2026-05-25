import { Item } from "../Item";

const BrokenCharmData = {{
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
    id: 30688,
    name: "Broken charm"
  }
export const BrokenCharm = Item.fromJson(BrokenCharmData);