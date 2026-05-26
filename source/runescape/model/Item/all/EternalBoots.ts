import { Item } from "../Item";

const EternalBootsData = {
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
    id: 13235,
    name: "Eternal boots"
  }
export const EternalBoots = Item.fromJson(EternalBootsData);
