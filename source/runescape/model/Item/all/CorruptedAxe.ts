import { Item } from "../Item";

const CorruptedAxeData = {{
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
    id: 23821,
    name: "Corrupted axe"
  }
export const CorruptedAxe = Item.fromJson(CorruptedAxeData);