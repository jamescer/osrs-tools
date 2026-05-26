import { Item } from "../Item";

const GrailBellData = {
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
    id: 17,
    name: "Grail bell"
  }
export const GrailBell = Item.fromJson(GrailBellData);
