import { Item } from "../Item";

const DecorativeBloodData = {
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
    id: 8125,
    name: "Decorative blood"
  }
export const DecorativeBlood = Item.fromJson(DecorativeBloodData);
