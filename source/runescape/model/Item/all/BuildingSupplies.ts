import { Item } from "../Item";

const BuildingSuppliesData = {
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
    id: 28968,
    name: "Building supplies"
  }
export const BuildingSupplies = Item.fromJson(BuildingSuppliesData);
