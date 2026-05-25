import { Item } from "../Item";

const ChefsHatData = {{
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
    id: 1949,
    name: "Chef's hat"
  }
export const ChefsHat = Item.fromJson(ChefsHatData);