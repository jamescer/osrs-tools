import { Item } from "../Item";

const GolovanovaFruitData = {
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
    id: 13426,
    name: "Golovanova fruit"
  }
export const GolovanovaFruit = Item.fromJson(GolovanovaFruitData);
