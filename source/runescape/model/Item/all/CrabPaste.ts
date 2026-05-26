import { Item } from "../Item";

const CrabPasteData = {
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
    id: 31708,
    name: "Crab paste"
  }
export const CrabPaste = Item.fromJson(CrabPasteData);
