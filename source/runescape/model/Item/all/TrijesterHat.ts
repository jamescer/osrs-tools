import { Item } from "../Item";

const TrijesterHatData = {
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
    id: 6860,
    name: "Tri-jester hat"
  }
export const TrijesterHat = Item.fromJson(TrijesterHatData);
