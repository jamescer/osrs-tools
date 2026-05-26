import { Item } from "../Item";

const MuckyNoteData = {
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
    id: 28401,
    name: "Mucky note"
  }
export const MuckyNote = Item.fromJson(MuckyNoteData);
