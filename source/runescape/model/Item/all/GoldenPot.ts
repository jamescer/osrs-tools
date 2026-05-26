import { Item } from "../Item";

const GoldenPotData = {
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
    id: 2948,
    name: "Golden pot"
  }
export const GoldenPot = Item.fromJson(GoldenPotData);
