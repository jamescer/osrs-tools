import { Item } from "../Item";

const PrisonersLetterData = {
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
    id: 28412,
    name: "Prisoner's letter"
  }
export const PrisonersLetter = Item.fromJson(PrisonersLetterData);
