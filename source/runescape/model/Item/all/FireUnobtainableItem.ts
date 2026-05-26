import { Item } from "../Item";

const FireUnobtainableItemData = {
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
    id: 4653,
    name: "Fire (unobtainable item)"
  }
export const FireUnobtainableItem = Item.fromJson(FireUnobtainableItemData);
