import { Item } from "../Item";

const BankersNoteItemData = {{
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
    id: 28767,
    name: "Banker's note (item)"
  }
export const BankersNoteItem = Item.fromJson(BankersNoteItemData);