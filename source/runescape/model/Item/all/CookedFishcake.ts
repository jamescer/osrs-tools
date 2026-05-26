import { Item } from "../Item";

const CookedFishcakeData = {
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
    id: 7530,
    name: "Cooked fishcake"
  }
export const CookedFishcake = Item.fromJson(CookedFishcakeData);
