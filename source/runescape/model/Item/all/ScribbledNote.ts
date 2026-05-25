import { Item } from "../Item";

const ScribbledNoteData = {{
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
    id: 21664,
    name: "Scribbled note"
  }
export const ScribbledNote = Item.fromJson(ScribbledNoteData);