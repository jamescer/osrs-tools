import { Item } from "../Item";

const PoisonedFishFoodData = {{
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
    id: 274,
    name: "Poisoned fish food"
  }
export const PoisonedFishFood = Item.fromJson(PoisonedFishFoodData);