import { Item } from "../Item";

const ServeryPizzaBaseData = {
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
    id: 13404,
    name: "Servery pizza base"
  }
export const ServeryPizzaBase = Item.fromJson(ServeryPizzaBaseData);
