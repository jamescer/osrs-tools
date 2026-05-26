import { Item } from "../Item";

const LetterJorralData = {
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
    id: 6757,
    name: "Letter (Jorral)"
  }
export const LetterJorral = Item.fromJson(LetterJorralData);
