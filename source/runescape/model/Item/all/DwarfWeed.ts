import { Item } from "../Item";

const DwarfWeedData = {
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
    id: 267,
    name: "Dwarf weed"
  }
export const DwarfWeed = Item.fromJson(DwarfWeedData);
