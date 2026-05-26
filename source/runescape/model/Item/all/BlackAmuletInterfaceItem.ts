import { Item } from "../Item";

const BlackAmuletInterfaceItemData = {
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
    id: 1685,
    name: "Black amulet (interface item)"
  }
export const BlackAmuletInterfaceItem = Item.fromJson(BlackAmuletInterfaceItemData);
