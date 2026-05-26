import { Item } from "../Item";

const UncookedBerryPieData = {
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
    id: 2321,
    name: "Uncooked berry pie"
  }
export const UncookedBerryPie = Item.fromJson(UncookedBerryPieData);
