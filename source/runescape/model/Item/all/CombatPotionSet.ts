import { Item } from "../Item";

const CombatPotionSetData = {{
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
    id: 13064,
    name: "Combat potion set"
  }
export const CombatPotionSet = Item.fromJson(CombatPotionSetData);