import { Item } from "../Item";

const SuperPotionSetData = {
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
    id: 13066,
    name: "Super potion set"
  }
export const SuperPotionSet = Item.fromJson(SuperPotionSetData);
