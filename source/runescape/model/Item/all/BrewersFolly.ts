import { Item } from "../Item";

const BrewersFollyData = {
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
    id: 23105,
    name: "Brewer's folly"
  }
export const BrewersFolly = Item.fromJson(BrewersFollyData);
