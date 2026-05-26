import { Item } from "../Item";

const LarransKeyData = {
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
    id: 23490,
    name: "Larran's key"
  }
export const LarransKey = Item.fromJson(LarransKeyData);
