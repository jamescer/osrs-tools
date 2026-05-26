import { Item } from "../Item";

const CollectionLogRuneData = {
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
    id: 30591,
    name: "Collection log (rune)"
  }
export const CollectionLogRune = Item.fromJson(CollectionLogRuneData);
