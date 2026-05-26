import { Item } from "../Item";

const ScrumpledNoteData = {
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
    id: 719,
    name: "Scrumpled note"
  }
export const ScrumpledNote = Item.fromJson(ScrumpledNoteData);
