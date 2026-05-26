import { Item } from "../Item";

const PoleUnobtainableItemData = {
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
    id: 4495,
    name: "Pole (unobtainable item)"
  }
export const PoleUnobtainableItem = Item.fromJson(PoleUnobtainableItemData);
