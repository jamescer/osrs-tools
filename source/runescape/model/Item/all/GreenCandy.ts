import { Item } from "../Item";

const GreenCandyData = {
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
    id: 24985,
    name: "Green candy"
  }
export const GreenCandy = Item.fromJson(GreenCandyData);
