import { Item } from "../Item";

const StockpilingCharmData = {
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
    id: 30679,
    name: "Stockpiling charm"
  }
export const StockpilingCharm = Item.fromJson(StockpilingCharmData);
