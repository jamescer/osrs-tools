import { Item } from "../Item";

const CooksLetterData = {{
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
    id: 23104,
    name: "Cook's letter"
  }
export const CooksLetter = Item.fromJson(CooksLetterData);