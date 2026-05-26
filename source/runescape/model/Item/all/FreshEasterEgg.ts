import { Item } from "../Item";

const FreshEasterEggData = {
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
    id: 21217,
    name: "Fresh easter egg"
  }
export const FreshEasterEgg = Item.fromJson(FreshEasterEggData);
