import { Item } from "../Item";

const RockshellSplinterData = {
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
    id: 6161,
    name: "Rock-shell splinter"
  }
export const RockshellSplinter = Item.fromJson(RockshellSplinterData);
