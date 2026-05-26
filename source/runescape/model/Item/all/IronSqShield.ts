import { Item } from "../Item";

const IronSqShieldData = {
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
    id: 1175,
    name: "Iron sq shield"
  }
export const IronSqShield = Item.fromJson(IronSqShieldData);
