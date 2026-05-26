import { Item } from "../Item";

const CrystalBlessingData = {
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
    id: 30384,
    name: "Crystal blessing"
  }
export const CrystalBlessing = Item.fromJson(CrystalBlessingData);
