import { Item } from "../Item";

const FarmersForkData = {
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
    id: 1411,
    name: "Farmer's fork"
  }
export const FarmersFork = Item.fromJson(FarmersForkData);
