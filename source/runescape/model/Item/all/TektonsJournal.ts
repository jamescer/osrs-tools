import { Item } from "../Item";

const TektonsJournalData = {
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
    id: 20890,
    name: "Tekton's journal"
  }
export const TektonsJournal = Item.fromJson(TektonsJournalData);
