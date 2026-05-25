import { Item } from "../Item";

const ScrawledNoteData = {{
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
    id: 717,
    name: "Scrawled note"
  }
export const ScrawledNote = Item.fromJson(ScrawledNoteData);