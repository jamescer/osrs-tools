import { Item } from "../Item";

const NulodionsNotesData = {
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
    id: 3,
    name: "Nulodion's notes"
  }
export const NulodionsNotes = Item.fromJson(NulodionsNotesData);
