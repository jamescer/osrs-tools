import { Item } from "../Item";

const BrokenCoffinData = {{
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
    id: 25457,
    name: "Broken coffin"
  }
export const BrokenCoffin = Item.fromJson(BrokenCoffinData);