import { Item } from "../Item";

const CoinPursefilledData = {
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
    id: 30941,
    name: "Coin purse#Filled"
  }
export const CoinPursefilled = Item.fromJson(CoinPursefilledData);
