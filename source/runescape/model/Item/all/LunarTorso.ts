import { Item } from "../Item";

const LunarTorsoData = {
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
    id: 9097,
    name: "Lunar torso"
  }
export const LunarTorso = Item.fromJson(LunarTorsoData);
