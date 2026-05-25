import { Item } from "../Item";

const CombatDummyData = {{
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
    id: 20745,
    name: "Combat dummy"
  }
export const CombatDummy = Item.fromJson(CombatDummyData);