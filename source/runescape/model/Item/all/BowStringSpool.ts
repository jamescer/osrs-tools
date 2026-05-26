import { Item } from "../Item";

const BowStringSpoolData = {
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
    id: 31052,
    name: "Bow string spool"
  }
export const BowStringSpool = Item.fromJson(BowStringSpoolData);
