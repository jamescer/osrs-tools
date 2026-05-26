import { Item } from "../Item";

const GypsumData = {
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
    id: 5579,
    name: "Gypsum"
  }
export const Gypsum = Item.fromJson(GypsumData);
