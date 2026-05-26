import { Item } from "../Item";

const MeternormalData = {
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
    id: 10987,
    name: "Meter#Normal"
  }
export const Meternormal = Item.fromJson(MeternormalData);
