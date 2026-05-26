import { Item } from "../Item";

const PagesUnobtainableItemData = {
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
    id: 4572,
    name: "Pages (unobtainable item)"
  }
export const PagesUnobtainableItem = Item.fromJson(PagesUnobtainableItemData);
