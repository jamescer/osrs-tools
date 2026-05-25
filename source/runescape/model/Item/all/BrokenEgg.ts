import { Item } from "../Item";

const BrokenEggData = {{
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
    id: 24544,
    name: "Broken egg"
  }
export const BrokenEgg = Item.fromJson(BrokenEggData);