import { Item } from "../Item";

const LargeEggData = {
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
    id: 30967,
    name: "Large egg"
  }
export const LargeEgg = Item.fromJson(LargeEggData);
