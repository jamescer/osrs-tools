import { Item } from "../Item";

const WintumberTreeData = {
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
    id: 10508,
    name: "Wintumber tree"
  }
export const WintumberTree = Item.fromJson(WintumberTreeData);
