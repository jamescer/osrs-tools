import { Item } from "../Item";

const RedFirefliesItemData = {
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
    id: 25283,
    name: "Red fireflies (item)"
  }
export const RedFirefliesItem = Item.fromJson(RedFirefliesItemData);
