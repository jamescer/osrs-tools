import { Item } from "../Item";

const NoteNumbersData = {
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
    id: 4598,
    name: "Note (numbers)"
  }
export const NoteNumbers = Item.fromJson(NoteNumbersData);
