import { Item } from "../Item";

const GoldElegantSkirtData = {
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
    id: 12345,
    name: "Gold elegant skirt"
  }
export const GoldElegantSkirt = Item.fromJson(GoldElegantSkirtData);
