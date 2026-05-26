import { Item } from "../Item";

const SealedLetterData = {
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
    id: 683,
    name: "Sealed letter"
  }
export const SealedLetter = Item.fromJson(SealedLetterData);
