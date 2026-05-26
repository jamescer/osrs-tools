import { Item } from "../Item";

const RottenOnionData = {
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
    id: 13327,
    name: "Rotten onion"
  }
export const RottenOnion = Item.fromJson(RottenOnionData);
