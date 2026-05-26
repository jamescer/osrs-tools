import { Item } from "../Item";

const BrutusSlippersData = {
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
    id: 33099,
    name: "Brutus slippers"
  }
export const BrutusSlippers = Item.fromJson(BrutusSlippersData);
