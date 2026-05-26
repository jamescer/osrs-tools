import { Item } from "../Item";

const StuffedBigSharkData = {
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
    id: 7994,
    name: "Stuffed big shark"
  }
export const StuffedBigShark = Item.fromJson(StuffedBigSharkData);
