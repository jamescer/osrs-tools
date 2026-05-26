import { Item } from "../Item";

const MixologyLabNotesData = {
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
    id: 30032,
    name: "Mixology lab notes"
  }
export const MixologyLabNotes = Item.fromJson(MixologyLabNotesData);
