import { Item } from "../Item";

const TatteredRequestNoteData = {{
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
    id: 29317,
    name: "Tattered request note"
  }
export const TatteredRequestNote = Item.fromJson(TatteredRequestNoteData);