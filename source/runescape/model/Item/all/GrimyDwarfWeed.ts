import { Item } from "../Item";

const GrimyDwarfWeedData = {
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
    id: 217,
    name: "Grimy dwarf weed"
  }
export const GrimyDwarfWeed = Item.fromJson(GrimyDwarfWeedData);
