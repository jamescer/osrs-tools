import { Item } from "../Item";

const SantasSealData = {
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
    id: 21871,
    name: "Santa's seal"
  }
export const SantasSeal = Item.fromJson(SantasSealData);
