import { Item } from "../Item";

const ServeryCheeseData = {
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
    id: 13407,
    name: "Servery cheese"
  }
export const ServeryCheese = Item.fromJson(ServeryCheeseData);
