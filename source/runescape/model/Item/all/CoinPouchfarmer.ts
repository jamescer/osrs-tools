import { Item } from "../Item";

const CoinPouchfarmerData = {
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
    id: 22522,
    name: "Coin pouch#Farmer"
  }
export const CoinPouchfarmer = Item.fromJson(CoinPouchfarmerData);
