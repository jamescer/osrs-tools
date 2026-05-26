import { Item } from "../Item";

const LithkrenVaultNotesData = {
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
    id: 25704,
    name: "Lithkren vault notes"
  }
export const LithkrenVaultNotes = Item.fromJson(LithkrenVaultNotesData);
