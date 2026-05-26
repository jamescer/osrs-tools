import { Item } from "../Item";

const FarmingHoodData = {
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
    id: 9812,
    name: "Farming hood"
  }
export const FarmingHood = Item.fromJson(FarmingHoodData);
