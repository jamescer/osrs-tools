import { Item } from "../Item";

const KasondesJournalData = {
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
    id: 27511,
    name: "Kasonde's journal"
  }
export const KasondesJournal = Item.fromJson(KasondesJournalData);
