import { Item } from "../Item";

const SawdustData = {
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
    id: 9468,
    name: "Sawdust"
  }
export const Sawdust = Item.fromJson(SawdustData);
