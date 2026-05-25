import { Item } from "../Item";

const StrongholdNotesData = {{
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
    id: 9004,
    name: "Stronghold notes"
  }
export const StrongholdNotes = Item.fromJson(StrongholdNotesData);