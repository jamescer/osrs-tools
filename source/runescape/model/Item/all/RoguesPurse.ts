import { Item } from "../Item";

const RoguesPurseData = {{
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
    id: 1534,
    name: "Rogue's purse"
  }
export const RoguesPurse = Item.fromJson(RoguesPurseData);