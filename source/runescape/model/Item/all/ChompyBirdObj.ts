import { Item } from "../Item";

const ChompyBirdObjData = {
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
    id: 2884,
    name: "Chompy bird obj"
  }
export const ChompyBirdObj = Item.fromJson(ChompyBirdObjData);
