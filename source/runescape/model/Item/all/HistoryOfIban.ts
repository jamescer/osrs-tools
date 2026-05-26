import { Item } from "../Item";

const HistoryOfIbanData = {
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
    id: 1494,
    name: "History of iban"
  }
export const HistoryOfIban = Item.fromJson(HistoryOfIbanData);
