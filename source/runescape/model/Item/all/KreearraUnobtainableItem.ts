import { Item } from "../Item";

const KreearraUnobtainableItemData = {
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
    id: 12693,
    name: "Kree'arra (unobtainable item)"
  }
export const KreearraUnobtainableItem = Item.fromJson(KreearraUnobtainableItemData);
