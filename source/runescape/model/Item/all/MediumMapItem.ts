import { Item } from "../Item";

const MediumMapItemData = {{
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
    id: 8005,
    name: "Medium map (item)"
  }
export const MediumMapItem = Item.fromJson(MediumMapItemData);