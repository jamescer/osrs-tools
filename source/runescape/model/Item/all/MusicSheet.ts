import { Item } from "../Item";

const MusicSheetData = {
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
    id: 11198,
    name: "Music sheet"
  }
export const MusicSheet = Item.fromJson(MusicSheetData);
