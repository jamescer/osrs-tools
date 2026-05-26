import { Item } from "../Item";

const OakCupboardData = {
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
    id: 24935,
    name: "Oak cupboard"
  }
export const OakCupboard = Item.fromJson(OakCupboardData);
