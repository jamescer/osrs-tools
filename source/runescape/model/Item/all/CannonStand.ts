import { Item } from "../Item";

const CannonStandData = {{
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
    id: 8,
    name: "Cannon stand"
  }
export const CannonStand = Item.fromJson(CannonStandData);