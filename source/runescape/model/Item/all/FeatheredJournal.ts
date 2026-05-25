import { Item } from "../Item";

const FeatheredJournalData = {{
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
    id: 10179,
    name: "Feathered journal"
  }
export const FeatheredJournal = Item.fromJson(FeatheredJournalData);