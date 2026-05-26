import { Item } from "../Item";

const MartialSalvageData = {
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
    id: 32857,
    name: "Martial salvage"
  }
export const MartialSalvage = Item.fromJson(MartialSalvageData);
