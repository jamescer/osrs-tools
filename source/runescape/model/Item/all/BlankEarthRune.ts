import { Item } from "../Item";

const BlankEarthRuneData = {
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
    id: 9694,
    name: "Blank earth rune"
  }
export const BlankEarthRune = Item.fromJson(BlankEarthRuneData);
