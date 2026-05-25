import { Item } from "../Item";

const BaggedMagicTreeData = {{
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
    id: 8429,
    name: "Bagged magic tree"
  }
export const BaggedMagicTree = Item.fromJson(BaggedMagicTreeData);