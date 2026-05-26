import { Item } from "../Item";

const HosidiusLetterData = {
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
    id: 13528,
    name: "Hosidius letter"
  }
export const HosidiusLetter = Item.fromJson(HosidiusLetterData);
