import { Item } from "../Item";

const CrateOfFishingSuppliesData = {
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
    id: 32753,
    name: "Crate of fishing supplies"
  }
export const CrateOfFishingSupplies = Item.fromJson(CrateOfFishingSuppliesData);
