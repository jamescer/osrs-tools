import { Item } from "../Item";

const CoinPouchelfData = {
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
    id: 22538,
    name: "Coin pouch#Elf"
  }
export const CoinPouchelf = Item.fromJson(CoinPouchelfData);
