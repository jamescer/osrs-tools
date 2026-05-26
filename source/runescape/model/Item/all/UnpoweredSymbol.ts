import { Item } from "../Item";

const UnpoweredSymbolData = {
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
    id: 1722,
    name: "Unpowered symbol"
  }
export const UnpoweredSymbol = Item.fromJson(UnpoweredSymbolData);
