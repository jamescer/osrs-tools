import { Item } from "../Item";

const UnfiredCupData = {
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
    id: 28193,
    name: "Unfired cup"
  }
export const UnfiredCup = Item.fromJson(UnfiredCupData);
