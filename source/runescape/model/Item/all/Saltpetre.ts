import { Item } from "../Item";

const SaltpetreData = {
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
    id: 13421,
    name: "Saltpetre"
  }
export const Saltpetre = Item.fromJson(SaltpetreData);
