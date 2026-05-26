import { Item } from "../Item";

const YellowDyeData = {
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
    id: 1765,
    name: "Yellow dye"
  }
export const YellowDye = Item.fromJson(YellowDyeData);
