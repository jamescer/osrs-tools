import { Item } from "../Item";

const PotLidData = {
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
    id: 4440,
    name: "Pot lid"
  }
export const PotLid = Item.fromJson(PotLidData);
