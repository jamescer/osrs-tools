import { Item } from "../Item";

const CookingAppleData = {
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
    id: 1955,
    name: "Cooking apple"
  }
export const CookingApple = Item.fromJson(CookingAppleData);
