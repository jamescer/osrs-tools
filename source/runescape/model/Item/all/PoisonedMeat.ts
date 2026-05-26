import { Item } from "../Item";

const PoisonedMeatData = {
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
    id: 10541,
    name: "Poisoned meat"
  }
export const PoisonedMeat = Item.fromJson(PoisonedMeatData);
