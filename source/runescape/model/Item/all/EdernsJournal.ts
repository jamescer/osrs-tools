import { Item } from "../Item";

const EdernsJournalData = {{
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
    id: 6649,
    name: "Edern's journal"
  }
export const EdernsJournal = Item.fromJson(EdernsJournalData);