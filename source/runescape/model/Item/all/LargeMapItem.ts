import { Item } from "../Item";

const LargeMapItemData = {{
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
    id: 8006,
    name: "Large map (item)"
  }
export const LargeMapItem = Item.fromJson(LargeMapItemData);