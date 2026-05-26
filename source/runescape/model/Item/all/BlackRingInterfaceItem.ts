import { Item } from "../Item";

const BlackRingInterfaceItemData = {
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
    id: 1647,
    name: "Black ring (interface item)"
  }
export const BlackRingInterfaceItem = Item.fromJson(BlackRingInterfaceItemData);
