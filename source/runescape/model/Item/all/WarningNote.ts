import { Item } from "../Item";

const WarningNoteData = {
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
    id: 27518,
    name: "Warning note"
  }
export const WarningNote = Item.fromJson(WarningNoteData);
