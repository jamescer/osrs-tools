import { Item } from "../Item";

const ArcaneSpiritShieldData = {
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
    id: 12825,
    name: "Arcane spirit shield"
  }
export const ArcaneSpiritShield = Item.fromJson(ArcaneSpiritShieldData);
