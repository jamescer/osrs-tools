import { Item } from "../Item";

const HerbalistsNotesData = {{
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
    id: 29427,
    name: "Herbalist's notes"
  }
export const HerbalistsNotes = Item.fromJson(HerbalistsNotesData);