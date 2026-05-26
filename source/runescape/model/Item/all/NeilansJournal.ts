import { Item } from "../Item";

const NeilansJournalData = {
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
    id: 25152,
    name: "Neilan's journal"
  }
export const NeilansJournal = Item.fromJson(NeilansJournalData);
