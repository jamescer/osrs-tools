import { Item } from "../Item";

const CombatRingData = {{
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
    id: 8025,
    name: "Combat ring"
  }
export const CombatRing = Item.fromJson(CombatRingData);