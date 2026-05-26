import { Item } from "../Item";

const AccumulationCharmData = {
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
    id: 30682,
    name: "Accumulation charm"
  }
export const AccumulationCharm = Item.fromJson(AccumulationCharmData);
