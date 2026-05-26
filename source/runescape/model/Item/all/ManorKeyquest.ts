import { Item } from "../Item";

const ManorKeyquestData = {
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
    id: 21052,
    name: "Manor key#Quest"
  }
export const ManorKeyquest = Item.fromJson(ManorKeyquestData);
