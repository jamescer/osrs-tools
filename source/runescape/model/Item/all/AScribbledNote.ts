import { Item } from "../Item";

const AScribbledNoteData = {
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
    id: 718,
    name: "A scribbled note"
  }
export const AScribbledNote = Item.fromJson(AScribbledNoteData);
