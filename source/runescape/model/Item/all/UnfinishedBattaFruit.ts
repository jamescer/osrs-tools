import { Item } from "../Item";

const UnfinishedBattaFruitData = {
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
    id: 9479,
    name: "Unfinished batta (fruit)"
  }
export const UnfinishedBattaFruit = Item.fromJson(UnfinishedBattaFruitData);
