import { Item } from "../Item";

const ElementalMetalData = {
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
    id: 2893,
    name: "Elemental metal"
  }
export const ElementalMetal = Item.fromJson(ElementalMetalData);
