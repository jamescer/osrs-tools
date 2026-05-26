import { Item } from "../Item";

const GrimyAvantoeData = {
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
    id: 211,
    name: "Grimy avantoe"
  }
export const GrimyAvantoe = Item.fromJson(GrimyAvantoeData);
