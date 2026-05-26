import { Item } from "../Item";

const EvacuationNoteData = {
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
    id: 28437,
    name: "Evacuation note"
  }
export const EvacuationNote = Item.fromJson(EvacuationNoteData);
