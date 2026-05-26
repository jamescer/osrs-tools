import { Item } from "../Item";

const ElidinisWardData = {
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
    id: 25985,
    name: "Elidinis' ward"
  }
export const ElidinisWard = Item.fromJson(ElidinisWardData);
