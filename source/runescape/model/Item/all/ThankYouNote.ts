import { Item } from "../Item";

const ThankYouNoteData = {{
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
    id: 28435,
    name: "Thank you note"
  }
export const ThankYouNote = Item.fromJson(ThankYouNoteData);