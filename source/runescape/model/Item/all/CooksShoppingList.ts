import { Item } from "../Item";

const CooksShoppingListData = {
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
    id: 23103,
    name: "Cook's shopping list"
  }
export const CooksShoppingList = Item.fromJson(CooksShoppingListData);
