import { Item } from "../Item";

const LyePasteData = {
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
    id: 30009,
    name: "Lye paste"
  }
export const LyePaste = Item.fromJson(LyePasteData);
