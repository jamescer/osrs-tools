import { Item } from "../Item";

const GoldOreData = {
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
    id: 444,
    name: "Gold ore"
  }
export const GoldOre = Item.fromJson(GoldOreData);
