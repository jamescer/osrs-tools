import { Item } from "../Item";

const FeatherPackData = {
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
    id: 11881,
    name: "Feather pack"
  }
export const FeatherPack = Item.fromJson(FeatherPackData);
