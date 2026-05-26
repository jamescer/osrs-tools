import { Item } from "../Item";

const PoisonedCheeseData = {
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
    id: 6768,
    name: "Poisoned cheese"
  }
export const PoisonedCheese = Item.fromJson(PoisonedCheeseData);
