import { Item } from "../Item";

const SantaHatData = {{
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
    id: 1050,
    name: "Santa hat"
  }
export const SantaHat = Item.fromJson(SantaHatData);