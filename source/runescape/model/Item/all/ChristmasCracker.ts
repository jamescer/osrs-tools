import { Item } from "../Item";

const ChristmasCrackerData = {
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
    id: 962,
    name: "Christmas cracker"
  }
export const ChristmasCracker = Item.fromJson(ChristmasCrackerData);
