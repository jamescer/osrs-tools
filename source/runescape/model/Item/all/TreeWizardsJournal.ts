import { Item } from "../Item";

const TreeWizardsJournalData = {
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
    id: 25474,
    name: "Tree wizards' journal"
  }
export const TreeWizardsJournal = Item.fromJson(TreeWizardsJournalData);
