import { Item } from "../Item";

const GrimyRoguesPurseData = {
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
    id: 1533,
    name: "Grimy rogue's purse"
  }
export const GrimyRoguesPurse = Item.fromJson(GrimyRoguesPurseData);
