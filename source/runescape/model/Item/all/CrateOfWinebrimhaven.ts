import { Item } from "../Item";

const CrateOfWinebrimhavenData = {
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
    id: 32479,
    name: "Crate of wine#Brimhaven"
  }
export const CrateOfWinebrimhaven = Item.fromJson(CrateOfWinebrimhavenData);
