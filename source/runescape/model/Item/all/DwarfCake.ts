import { Item } from "../Item";

const DwarfCakeData = {
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
    id: 27801,
    name: "Dwarf cake"
  }
export const DwarfCake = Item.fromJson(DwarfCakeData);
