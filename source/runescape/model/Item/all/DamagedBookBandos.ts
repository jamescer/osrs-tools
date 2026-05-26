import { Item } from "../Item";

const DamagedBookBandosData = {
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
    id: 12607,
    name: "Damaged book (Bandos)"
  }
export const DamagedBookBandos = Item.fromJson(DamagedBookBandosData);
