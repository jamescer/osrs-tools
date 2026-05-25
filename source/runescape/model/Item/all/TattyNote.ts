import { Item } from "../Item";

const TattyNoteData = {{
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
    id: 23007,
    name: "Tatty note"
  }
export const TattyNote = Item.fromJson(TattyNoteData);