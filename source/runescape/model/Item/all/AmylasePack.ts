import { Item } from "../Item";

const AmylasePackData = {
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
    id: 12641,
    name: "Amylase pack"
  }
export const AmylasePack = Item.fromJson(AmylasePackData);
