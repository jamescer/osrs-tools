import { Item } from "../Item";

const CookedBreamData = {
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
    id: 29217,
    name: "Cooked bream"
  }
export const CookedBream = Item.fromJson(CookedBreamData);
