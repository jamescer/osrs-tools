import { Item } from "../Item";

const RockUnobtainableItemData = {
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
    id: 9716,
    name: "Rock (unobtainable item)"
  }
export const RockUnobtainableItem = Item.fromJson(RockUnobtainableItemData);
