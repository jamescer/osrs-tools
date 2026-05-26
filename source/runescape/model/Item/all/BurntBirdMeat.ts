import { Item } from "../Item";

const BurntBirdMeatData = {
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
    id: 9982,
    name: "Burnt bird meat"
  }
export const BurntBirdMeat = Item.fromJson(BurntBirdMeatData);
