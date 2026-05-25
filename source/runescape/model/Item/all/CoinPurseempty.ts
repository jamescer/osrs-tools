import { Item } from "../Item";

const CoinPurseemptyData = {{
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
    id: 30942,
    name: "Coin purse#Empty"
  }
export const CoinPurseempty = Item.fromJson(CoinPurseemptyData);