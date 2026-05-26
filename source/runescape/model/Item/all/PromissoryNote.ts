import { Item } from "../Item";

const PromissoryNoteData = {
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
    id: 3709,
    name: "Promissory note"
  }
export const PromissoryNote = Item.fromJson(PromissoryNoteData);
