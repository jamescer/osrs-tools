import { Item } from "../Item";

const KillersPrintData = {
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
    id: 1815,
    name: "Killer's print"
  }
export const KillersPrint = Item.fromJson(KillersPrintData);
