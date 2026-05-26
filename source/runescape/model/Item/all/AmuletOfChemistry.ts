import { Item } from "../Item";

const AmuletOfChemistryData = {
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
    id: 21163,
    name: "Amulet of chemistry"
  }
export const AmuletOfChemistry = Item.fromJson(AmuletOfChemistryData);
