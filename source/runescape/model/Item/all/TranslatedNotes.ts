import { Item } from "../Item";

const TranslatedNotesData = {
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
    id: 10493,
    name: "Translated notes"
  }
export const TranslatedNotes = Item.fromJson(TranslatedNotesData);
