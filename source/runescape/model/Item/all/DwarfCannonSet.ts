import { Item } from "../Item";

const DwarfCannonSetData = {
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
    id: 12863,
    name: "Dwarf cannon set"
  }
export const DwarfCannonSet = Item.fromJson(DwarfCannonSetData);
