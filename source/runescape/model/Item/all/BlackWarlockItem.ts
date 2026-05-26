import { Item } from "../Item";

const BlackWarlockItemData = {
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
    id: 10014,
    name: "Black warlock (item)"
  }
export const BlackWarlockItem = Item.fromJson(BlackWarlockItemData);
