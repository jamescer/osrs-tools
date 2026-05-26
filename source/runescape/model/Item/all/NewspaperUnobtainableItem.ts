import { Item } from "../Item";

const NewspaperUnobtainableItemData = {
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
    id: 11169,
    name: "Newspaper (unobtainable item)"
  }
export const NewspaperUnobtainableItem = Item.fromJson(NewspaperUnobtainableItemData);
