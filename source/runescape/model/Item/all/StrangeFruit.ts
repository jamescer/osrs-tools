import { Item } from "../Item";

const StrangeFruitData = {
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
    id: 464,
    name: "Strange fruit"
  }
export const StrangeFruit = Item.fromJson(StrangeFruitData);
