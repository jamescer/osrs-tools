import { Item } from "../Item";

const PurpleCapeData = {
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
    id: 1029,
    name: "Purple cape"
  }
export const PurpleCape = Item.fromJson(PurpleCapeData);
