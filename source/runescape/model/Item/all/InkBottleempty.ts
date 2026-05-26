import { Item } from "../Item";

const InkBottleemptyData = {
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
    id: 31349,
    name: "Ink bottle#Empty"
  }
export const InkBottleempty = Item.fromJson(InkBottleemptyData);
