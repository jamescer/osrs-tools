import { Item } from "../Item";

const CandleunlitData = {
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
    id: 36,
    name: "Candle#Unlit"
  }
export const Candleunlit = Item.fromJson(CandleunlitData);
