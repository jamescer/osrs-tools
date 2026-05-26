import { Item } from "../Item";

const ServeryDishData = {
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
    id: 13400,
    name: "Servery dish"
  }
export const ServeryDish = Item.fromJson(ServeryDishData);
