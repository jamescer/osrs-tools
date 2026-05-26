import { Item } from "../Item";

const OrangeCandyData = {
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
    id: 24987,
    name: "Orange candy"
  }
export const OrangeCandy = Item.fromJson(OrangeCandyData);
