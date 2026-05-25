import { Item } from "../Item";

const EmptyPlantPotData = {{
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
    id: 5350,
    name: "Empty plant pot"
  }
export const EmptyPlantPot = Item.fromJson(EmptyPlantPotData);