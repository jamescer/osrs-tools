import { Item } from "../Item";

const MalumacsJournalData = {{
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
    id: 22037,
    name: "Malumac's journal"
  }
export const MalumacsJournal = Item.fromJson(MalumacsJournalData);