import { Item } from "../Item";

const StolenCircletData = {
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
    id: 13436,
    name: "Stolen circlet"
  }
export const StolenCirclet = Item.fromJson(StolenCircletData);
