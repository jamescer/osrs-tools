import { Item } from "../Item";

const DarkDyeData = {
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
    id: 24729,
    name: "Dark dye"
  }
export const DarkDye = Item.fromJson(DarkDyeData);
