import { Item } from "../Item";

const JournalPageData = {
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
    id: 24686,
    name: "Journal page"
  }
export const JournalPage = Item.fromJson(JournalPageData);
