import { Item } from "../Item";

const AUsedSpellData = {{
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
    id: 2969,
    name: "A used spell"
  }
export const AUsedSpell = Item.fromJson(AUsedSpellData);