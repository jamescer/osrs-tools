import { Item } from "../Item";

const VatCleanedData = {
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
    id: 26933,
    name: "Vat (cleaned)"
  }
export const VatCleaned = Item.fromJson(VatCleanedData);
