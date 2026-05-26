import { Item } from "../Item";

const AstralRuneData = {
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
    id: 9075,
    name: "Astral rune"
  }
export const AstralRune = Item.fromJson(AstralRuneData);
