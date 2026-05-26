import { Item } from "../Item";

const TranslationBookData = {
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
    id: 784,
    name: "Translation book"
  }
export const TranslationBook = Item.fromJson(TranslationBookData);
