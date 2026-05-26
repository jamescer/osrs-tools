import { Item } from "../Item";

const SteelScimitarData = {
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
    id: 1325,
    name: "Steel scimitar"
  }
export const SteelScimitar = Item.fromJson(SteelScimitarData);
