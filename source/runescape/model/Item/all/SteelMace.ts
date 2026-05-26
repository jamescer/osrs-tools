import { Item } from "../Item";

const SteelMaceData = {
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
    id: 1424,
    name: "Steel mace"
  }
export const SteelMace = Item.fromJson(SteelMaceData);
