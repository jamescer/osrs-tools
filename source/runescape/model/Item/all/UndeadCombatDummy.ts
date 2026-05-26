import { Item } from "../Item";

const UndeadCombatDummyData = {
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
    id: 20746,
    name: "Undead combat dummy"
  }
export const UndeadCombatDummy = Item.fromJson(UndeadCombatDummyData);
