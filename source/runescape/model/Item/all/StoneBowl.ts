import { Item } from "../Item";

const StoneBowlData = {
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
    id: 4704,
    name: "Stone bowl"
  }
export const StoneBowl = Item.fromJson(StoneBowlData);
