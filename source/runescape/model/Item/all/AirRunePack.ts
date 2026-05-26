import { Item } from "../Item";

const AirRunePackData = {
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
    id: 12728,
    name: "Air rune pack"
  }
export const AirRunePack = Item.fromJson(AirRunePackData);
