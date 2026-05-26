import { Item } from "../Item";

const DarkJournalData = {
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
    id: 20899,
    name: "Dark journal"
  }
export const DarkJournal = Item.fromJson(DarkJournalData);
