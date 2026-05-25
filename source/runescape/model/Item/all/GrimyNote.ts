import { Item } from "../Item";

const GrimyNoteData = {{
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
    id: 29558,
    name: "Grimy note"
  }
export const GrimyNote = Item.fromJson(GrimyNoteData);