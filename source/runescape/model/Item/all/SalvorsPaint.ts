import { Item } from "../Item";

const SalvorsPaintData = {{
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
    id: 32099,
    name: "Salvor's paint"
  }
export const SalvorsPaint = Item.fromJson(SalvorsPaintData);