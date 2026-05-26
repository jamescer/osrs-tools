import { Item } from "../Item";

const DuradelsNotesData = {
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
    id: 29596,
    name: "Duradel's notes"
  }
export const DuradelsNotes = Item.fromJson(DuradelsNotesData);
