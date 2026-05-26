import { Item } from "../Item";

const RedberriesData = {
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
    id: 1951,
    name: "Redberries"
  }
export const Redberries = Item.fromJson(RedberriesData);
