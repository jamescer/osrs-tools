import { Item } from "../Item";

const CrateOfPoisonData = {
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
    id: 32456,
    name: "Crate of poison"
  }
export const CrateOfPoison = Item.fromJson(CrateOfPoisonData);
