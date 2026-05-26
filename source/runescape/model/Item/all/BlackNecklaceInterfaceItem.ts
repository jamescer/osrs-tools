import { Item } from "../Item";

const BlackNecklaceInterfaceItemData = {
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
    id: 1666,
    name: "Black necklace (interface item)"
  }
export const BlackNecklaceInterfaceItem = Item.fromJson(BlackNecklaceInterfaceItemData);
