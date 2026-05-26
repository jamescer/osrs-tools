import { Item } from "../Item";

const IncompletePizzaData = {
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
    id: 2285,
    name: "Incomplete pizza"
  }
export const IncompletePizza = Item.fromJson(IncompletePizzaData);
