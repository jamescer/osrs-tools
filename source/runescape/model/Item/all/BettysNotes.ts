import { Item } from "../Item";

const BettysNotesData = {
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
    id: 29905,
    name: "Betty's notes"
  }
export const BettysNotes = Item.fromJson(BettysNotesData);
