import { Item } from "../Item";

const GloughsJournalData = {
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
    id: 785,
    name: "Glough's journal"
  }
export const GloughsJournal = Item.fromJson(GloughsJournalData);
