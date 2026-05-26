import { Item } from "../Item";

const DefenceDolmenData = {
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
    id: 29544,
    name: "Defence dolmen"
  }
export const DefenceDolmen = Item.fromJson(DefenceDolmenData);
