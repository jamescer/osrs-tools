import { Item } from "../Item";

const GoldLeafUnobtainableItemData = {
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
    id: 4692,
    name: "Gold leaf (unobtainable item)"
  }
export const GoldLeafUnobtainableItem = Item.fromJson(GoldLeafUnobtainableItemData);
