import { Item } from "../Item";

const TomberriesData = {
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
    id: 21713,
    name: "Tomberries"
  }
export const Tomberries = Item.fromJson(TomberriesData);
