import { Item } from "../Item";

const WarningLetterData = {{
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
    id: 28429,
    name: "Warning letter"
  }
export const WarningLetter = Item.fromJson(WarningLetterData);