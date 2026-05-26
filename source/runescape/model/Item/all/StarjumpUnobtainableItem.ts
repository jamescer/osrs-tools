import { Item } from "../Item";

const StarjumpUnobtainableItemData = {
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
    id: 10949,
    name: "Starjump (unobtainable item)"
  }
export const StarjumpUnobtainableItem = Item.fromJson(StarjumpUnobtainableItemData);
