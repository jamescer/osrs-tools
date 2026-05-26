import { Item } from "../Item";

const CreatureKeepersJournalData = {
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
    id: 20886,
    name: "Creature keeper's journal"
  }
export const CreatureKeepersJournal = Item.fromJson(CreatureKeepersJournalData);
