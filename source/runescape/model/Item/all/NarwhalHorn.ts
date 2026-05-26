import { Item } from "../Item";

const NarwhalHornData = {
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
    id: 31954,
    name: "Narwhal horn"
  }
export const NarwhalHorn = Item.fromJson(NarwhalHornData);
