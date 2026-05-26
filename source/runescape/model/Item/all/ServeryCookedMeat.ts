import { Item } from "../Item";

const ServeryCookedMeatData = {
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
    id: 13413,
    name: "Servery cooked meat"
  }
export const ServeryCookedMeat = Item.fromJson(ServeryCookedMeatData);
