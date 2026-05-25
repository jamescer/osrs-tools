import { Item } from "../Item";

const CannonBaseData = {{
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
    id: 6,
    name: "Cannon base"
  }
export const CannonBase = Item.fromJson(CannonBaseData);