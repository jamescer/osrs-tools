import { Item } from "../Item";

const DwarvenStoutData = {{
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
    id: 1913,
    name: "Dwarven stout"
  }
export const DwarvenStout = Item.fromJson(DwarvenStoutData);