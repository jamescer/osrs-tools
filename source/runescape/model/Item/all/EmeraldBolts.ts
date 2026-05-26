import { Item } from "../Item";

const EmeraldBoltsData = {
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
    id: 9338,
    name: "Emerald bolts"
  }
export const EmeraldBolts = Item.fromJson(EmeraldBoltsData);
