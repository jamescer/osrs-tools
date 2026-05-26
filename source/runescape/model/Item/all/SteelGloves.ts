import { Item } from "../Item";

const SteelGlovesData = {
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
    id: 7456,
    name: "Steel gloves"
  }
export const SteelGloves = Item.fromJson(SteelGlovesData);
