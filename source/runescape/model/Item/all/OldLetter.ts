import { Item } from "../Item";

const OldLetterData = {{
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
    id: 31121,
    name: "Old letter"
  }
export const OldLetter = Item.fromJson(OldLetterData);