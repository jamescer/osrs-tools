import { Item } from "../Item";

const CrystalGrailData = {
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
    id: 24000,
    name: "Crystal grail"
  }
export const CrystalGrail = Item.fromJson(CrystalGrailData);
