import { Item } from "../Item";

const ExplorerBackpackData = {
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
    id: 12514,
    name: "Explorer backpack"
  }
export const ExplorerBackpack = Item.fromJson(ExplorerBackpackData);
