import { Item } from "../Item";

const KnapsackopenData = {
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
    id: 33218,
    name: "Knapsack#Open"
  }
export const Knapsackopen = Item.fromJson(KnapsackopenData);
