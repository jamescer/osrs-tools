import { Item } from "../Item";

const RottenAppleData = {{
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
    id: 1984,
    name: "Rotten apple"
  }
export const RottenApple = Item.fromJson(RottenAppleData);