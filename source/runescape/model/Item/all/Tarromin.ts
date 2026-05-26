import { Item } from "../Item";

const TarrominData = {
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
    id: 253,
    name: "Tarromin"
  }
export const Tarromin = Item.fromJson(TarrominData);
