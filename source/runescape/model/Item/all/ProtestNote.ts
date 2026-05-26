import { Item } from "../Item";

const ProtestNoteData = {
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
    id: 28436,
    name: "Protest note"
  }
export const ProtestNote = Item.fromJson(ProtestNoteData);
