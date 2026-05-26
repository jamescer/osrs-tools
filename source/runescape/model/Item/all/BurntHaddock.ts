import { Item } from "../Item";

const BurntHaddockData = {
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
    id: 32323,
    name: "Burnt haddock"
  }
export const BurntHaddock = Item.fromJson(BurntHaddockData);
