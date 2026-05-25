import { Item } from "../Item";

const MustySmellingNoteData = {{
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
    id: 21676,
    name: "Musty smelling note"
  }
export const MustySmellingNote = Item.fromJson(MustySmellingNoteData);