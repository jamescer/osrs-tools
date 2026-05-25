import { Item } from "../Item";

const AncientSymbolData = {{
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
    id: 11181,
    name: "Ancient symbol"
  }
export const AncientSymbol = Item.fromJson(AncientSymbolData);