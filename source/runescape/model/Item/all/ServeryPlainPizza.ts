import { Item } from "../Item";

const ServeryPlainPizzaData = {
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
    id: 13409,
    name: "Servery plain pizza"
  }
export const ServeryPlainPizza = Item.fromJson(ServeryPlainPizzaData);
