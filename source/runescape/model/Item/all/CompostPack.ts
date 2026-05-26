import { Item } from "../Item";

const CompostPackData = {
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
    id: 19704,
    name: "Compost pack"
  }
export const CompostPack = Item.fromJson(CompostPackData);
