import { Item } from "../Item";

const CrateOfAmuletsData = {
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
    id: 32673,
    name: "Crate of amulets"
  }
export const CrateOfAmulets = Item.fromJson(CrateOfAmuletsData);
