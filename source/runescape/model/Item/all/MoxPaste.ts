import { Item } from "../Item";

const MoxPasteData = {{
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
    id: 30005,
    name: "Mox paste"
  }
export const MoxPaste = Item.fromJson(MoxPasteData);