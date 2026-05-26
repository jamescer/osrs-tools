import { Item } from "../Item";

const AssemblerMaxHoodData = {
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
    id: 21900,
    name: "Assembler max hood"
  }
export const AssemblerMaxHood = Item.fromJson(AssemblerMaxHoodData);
