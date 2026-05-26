import { Item } from "../Item";

const IncriminatingLetterData = {
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
    id: 28974,
    name: "Incriminating letter"
  }
export const IncriminatingLetter = Item.fromJson(IncriminatingLetterData);
