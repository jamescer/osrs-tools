import { Item } from "../Item";

const ThickDyeData = {
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
    id: 25610,
    name: "Thick dye"
  }
export const ThickDye = Item.fromJson(ThickDyeData);
