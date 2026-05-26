import { Item } from "../Item";

const RawRedCrabMeatData = {
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
    id: 31686,
    name: "Raw red crab meat"
  }
export const RawRedCrabMeat = Item.fromJson(RawRedCrabMeatData);
