import { Item } from "../Item";

const SteelHelmskiffData = {
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
    id: 32146,
    name: "Steel helm#Skiff"
  }
export const SteelHelmskiff = Item.fromJson(SteelHelmskiffData);
