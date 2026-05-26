import { Item } from "../Item";

const ClueNestBeginnerData = {
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
    id: 23127,
    name: "Clue nest (beginner)"
  }
export const ClueNestBeginner = Item.fromJson(ClueNestBeginnerData);
