import { Item } from "../Item";

const MinorEliteScrollCaseData = {
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
    id: 30918,
    name: "Minor elite scroll case"
  }
export const MinorEliteScrollCase = Item.fromJson(MinorEliteScrollCaseData);
