import { Item } from "../Item";

const StuffedOrangefinData = {
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
    id: 31418,
    name: "Stuffed orangefin"
  }
export const StuffedOrangefin = Item.fromJson(StuffedOrangefinData);
