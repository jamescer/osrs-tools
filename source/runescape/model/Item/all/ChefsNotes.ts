import { Item } from "../Item";

const ChefsNotesData = {
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
    id: 29428,
    name: "Chef's notes"
  }
export const ChefsNotes = Item.fromJson(ChefsNotesData);
