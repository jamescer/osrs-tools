import { Item } from "../Item";

const SettlementsNoteData = {{
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
    id: 27602,
    name: "Settlements note"
  }
export const SettlementsNote = Item.fromJson(SettlementsNoteData);