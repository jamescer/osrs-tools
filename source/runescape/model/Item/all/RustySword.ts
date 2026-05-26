import { Item } from "../Item";

const RustySwordData = {
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
    id: 686,
    name: "Rusty sword"
  }
export const RustySword = Item.fromJson(RustySwordData);
