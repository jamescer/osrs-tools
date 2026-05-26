import { Item } from "../Item";

const GoblinSymbolBookData = {
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
    id: 5009,
    name: "Goblin symbol book"
  }
export const GoblinSymbolBook = Item.fromJson(GoblinSymbolBookData);
