import { Item } from "../Item";

const GoldenCandleData = {
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
    id: 2947,
    name: "Golden candle"
  }
export const GoldenCandle = Item.fromJson(GoldenCandleData);
