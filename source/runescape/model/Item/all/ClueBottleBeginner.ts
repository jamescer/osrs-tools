import { Item } from "../Item";

const ClueBottleBeginnerData = {
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
    id: 23129,
    name: "Clue bottle (beginner)"
  }
export const ClueBottleBeginner = Item.fromJson(ClueBottleBeginnerData);
