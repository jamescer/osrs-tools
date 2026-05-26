import { Item } from "../Item";

const LetterTheGolemData = {
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
    id: 4615,
    name: "Letter (The Golem)"
  }
export const LetterTheGolem = Item.fromJson(LetterTheGolemData);
