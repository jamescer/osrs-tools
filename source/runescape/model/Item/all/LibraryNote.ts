import { Item } from "../Item";

const LibraryNoteData = {{
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
    id: 28428,
    name: "Library note"
  }
export const LibraryNote = Item.fromJson(LibraryNoteData);