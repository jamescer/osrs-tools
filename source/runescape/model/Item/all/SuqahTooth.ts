import { Item } from "../Item";

const SuqahToothData = {
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
    id: 9079,
    name: "Suqah tooth"
  }
export const SuqahTooth = Item.fromJson(SuqahToothData);
