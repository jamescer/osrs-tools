import { Item } from "../Item";

const EvilRootData = {
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
    id: 9919,
    name: "Evil root"
  }
export const EvilRoot = Item.fromJson(EvilRootData);
