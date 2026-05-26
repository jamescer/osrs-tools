import { Item } from "../Item";

const CoinPouchpaladinData = {
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
    id: 22535,
    name: "Coin pouch#Paladin"
  }
export const CoinPouchpaladin = Item.fromJson(CoinPouchpaladinData);
