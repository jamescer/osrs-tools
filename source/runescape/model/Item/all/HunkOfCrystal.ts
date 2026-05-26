import { Item } from "../Item";

const HunkOfCrystalData = {
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
    id: 742,
    name: "Hunk of crystal"
  }
export const HunkOfCrystal = Item.fromJson(HunkOfCrystalData);
