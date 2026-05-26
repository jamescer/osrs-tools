import { Item } from "../Item";

const PotatoCactusData = {
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
    id: 3138,
    name: "Potato cactus"
  }
export const PotatoCactus = Item.fromJson(PotatoCactusData);
