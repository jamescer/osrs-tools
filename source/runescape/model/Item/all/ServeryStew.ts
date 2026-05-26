import { Item } from "../Item";

const ServeryStewData = {
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
    id: 13418,
    name: "Servery stew"
  }
export const ServeryStew = Item.fromJson(ServeryStewData);
