import { Item } from "../Item";

const FluffyEasterEggData = {
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
    id: 21224,
    name: "Fluffy easter egg"
  }
export const FluffyEasterEgg = Item.fromJson(FluffyEasterEggData);
