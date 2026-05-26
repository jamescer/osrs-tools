import { Item } from "../Item";

const SmallMapItemData = {
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
    id: 8004,
    name: "Small map (item)"
  }
export const SmallMapItem = Item.fromJson(SmallMapItemData);
