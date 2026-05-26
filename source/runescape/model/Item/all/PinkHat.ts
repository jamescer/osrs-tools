import { Item } from "../Item";

const PinkHatData = {
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
    id: 656,
    name: "Pink hat"
  }
export const PinkHat = Item.fromJson(PinkHatData);
