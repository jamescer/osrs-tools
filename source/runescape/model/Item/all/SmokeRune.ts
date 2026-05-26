import { Item } from "../Item";

const SmokeRuneData = {
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
    id: 4697,
    name: "Smoke rune"
  }
export const SmokeRune = Item.fromJson(SmokeRuneData);
