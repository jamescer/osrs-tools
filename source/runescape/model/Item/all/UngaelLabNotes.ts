import { Item } from "../Item";

const UngaelLabNotesData = {
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
    id: 25702,
    name: "Ungael lab notes"
  }
export const UngaelLabNotes = Item.fromJson(UngaelLabNotesData);
