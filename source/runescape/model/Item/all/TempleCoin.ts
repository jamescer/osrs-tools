import { Item } from "../Item";

const TempleCoinData = {{
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
    id: 23497,
    name: "Temple coin"
  }
export const TempleCoin = Item.fromJson(TempleCoinData);