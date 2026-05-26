import { Item } from "../Item";

const CollectionLogBlackData = {
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
    id: 30585,
    name: "Collection log (black)"
  }
export const CollectionLogBlack = Item.fromJson(CollectionLogBlackData);
