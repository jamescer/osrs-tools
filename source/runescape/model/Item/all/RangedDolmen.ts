import { Item } from "../Item";

const RangedDolmenData = {
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
    id: 29546,
    name: "Ranged dolmen"
  }
export const RangedDolmen = Item.fromJson(RangedDolmenData);
