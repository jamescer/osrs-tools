import { Item } from "../Item";

const BurntCakeData = {{
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
    id: 1903,
    name: "Burnt cake"
  }
export const BurntCake = Item.fromJson(BurntCakeData);