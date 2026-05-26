import { Item } from "../Item";

const CookingPotUnobtainableItemData = {
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
    id: 977,
    name: "Cooking pot (unobtainable item)"
  }
export const CookingPotUnobtainableItem = Item.fromJson(CookingPotUnobtainableItemData);
