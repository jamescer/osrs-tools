import { Item } from "../Item";

const NoteRockingOutData = {
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
    id: 31343,
    name: "Note (Rocking Out)"
  }
export const NoteRockingOut = Item.fromJson(NoteRockingOutData);
