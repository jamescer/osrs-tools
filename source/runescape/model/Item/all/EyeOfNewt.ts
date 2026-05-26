import { Item } from "../Item";

const EyeOfNewtData = {
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
    id: 221,
    name: "Eye of newt"
  }
export const EyeOfNewt = Item.fromJson(EyeOfNewtData);
