import { Item } from "../Item";

const MagicHoodData = {{
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
    id: 9764,
    name: "Magic hood"
  }
export const MagicHood = Item.fromJson(MagicHoodData);