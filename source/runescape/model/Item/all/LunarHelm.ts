import { Item } from "../Item";

const LunarHelmData = {
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
    id: 9096,
    name: "Lunar helm"
  }
export const LunarHelm = Item.fromJson(LunarHelmData);
