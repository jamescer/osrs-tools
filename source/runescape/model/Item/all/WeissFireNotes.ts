import { Item } from "../Item";

const WeissFireNotesData = {
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
    id: 22591,
    name: "Weiss fire notes"
  }
export const WeissFireNotes = Item.fromJson(WeissFireNotesData);
