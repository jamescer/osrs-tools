import { Item } from "../Item";

const EscapeCrystalData = {
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
    id: 22517,
    name: "Escape crystal"
  }
export const EscapeCrystal = Item.fromJson(EscapeCrystalData);
