import { Item } from "../Item";

const GoldLocksData = {{
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
    id: 25454,
    name: "Gold locks"
  }
export const GoldLocks = Item.fromJson(GoldLocksData);