import { Item } from "../Item";

const ToadsLegsData = {
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
    id: 2152,
    name: "Toad's legs"
  }
export const ToadsLegs = Item.fromJson(ToadsLegsData);
