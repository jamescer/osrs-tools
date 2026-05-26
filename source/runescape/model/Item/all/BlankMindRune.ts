import { Item } from "../Item";

const BlankMindRuneData = {
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
    id: 9696,
    name: "Blank mind rune"
  }
export const BlankMindRune = Item.fromJson(BlankMindRuneData);
