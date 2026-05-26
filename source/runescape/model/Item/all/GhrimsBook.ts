import { Item } from "../Item";

const GhrimsBookData = {
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
    id: 3901,
    name: "Ghrim's book"
  }
export const GhrimsBook = Item.fromJson(GhrimsBookData);
