import { Item } from "../Item";

const OldToothData = {
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
    id: 695,
    name: "Old tooth"
  }
export const OldTooth = Item.fromJson(OldToothData);
