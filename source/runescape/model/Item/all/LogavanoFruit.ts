import { Item } from "../Item";

const LogavanoFruitData = {
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
    id: 13428,
    name: "Logavano fruit"
  }
export const LogavanoFruit = Item.fromJson(LogavanoFruitData);
