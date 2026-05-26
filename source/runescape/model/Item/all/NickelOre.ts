import { Item } from "../Item";

const NickelOreData = {
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
    id: 31719,
    name: "Nickel ore"
  }
export const NickelOre = Item.fromJson(NickelOreData);
