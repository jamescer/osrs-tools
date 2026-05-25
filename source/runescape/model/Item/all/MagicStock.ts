import { Item } from "../Item";

const MagicStockData = {{
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
    id: 21952,
    name: "Magic stock"
  }
export const MagicStock = Item.fromJson(MagicStockData);