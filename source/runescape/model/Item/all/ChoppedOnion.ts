import { Item } from "../Item";

const ChoppedOnionData = {
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
    id: 1871,
    name: "Chopped onion"
  }
export const ChoppedOnion = Item.fromJson(ChoppedOnionData);
