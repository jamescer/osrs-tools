import { Item } from "../Item";

const BottleOfWineData = {{
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
    id: 7919,
    name: "Bottle of wine"
  }
export const BottleOfWine = Item.fromJson(BottleOfWineData);