import { Item } from "../Item";

const BarrelStandData = {{
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
    id: 31733,
    name: "Barrel stand"
  }
export const BarrelStand = Item.fromJson(BarrelStandData);