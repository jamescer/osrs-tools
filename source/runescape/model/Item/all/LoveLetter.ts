import { Item } from "../Item";

const LoveLetterData = {
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
    id: 28986,
    name: "Love letter"
  }
export const LoveLetter = Item.fromJson(LoveLetterData);
