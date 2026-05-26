import { Item } from "../Item";

const DogTagUnobtainableItemData = {
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
    id: 30940,
    name: "Dog tag (unobtainable item)"
  }
export const DogTagUnobtainableItem = Item.fromJson(DogTagUnobtainableItemData);
