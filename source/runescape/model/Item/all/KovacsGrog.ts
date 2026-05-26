import { Item } from "../Item";

const KovacsGrogData = {
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
    id: 27014,
    name: "Kovac's grog"
  }
export const KovacsGrog = Item.fromJson(KovacsGrogData);
