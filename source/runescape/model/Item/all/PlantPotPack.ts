import { Item } from "../Item";

const PlantPotPackData = {
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
    id: 13250,
    name: "Plant pot pack"
  }
export const PlantPotPack = Item.fromJson(PlantPotPackData);
