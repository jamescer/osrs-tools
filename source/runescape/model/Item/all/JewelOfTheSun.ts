import { Item } from "../Item";

const JewelOfTheSunData = {
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
    id: 27289,
    name: "Jewel of the sun"
  }
export const JewelOfTheSun = Item.fromJson(JewelOfTheSunData);
