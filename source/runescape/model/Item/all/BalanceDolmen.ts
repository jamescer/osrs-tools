import { Item } from "../Item";

const BalanceDolmenData = {
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
    id: 29551,
    name: "Balance dolmen"
  }
export const BalanceDolmen = Item.fromJson(BalanceDolmenData);
