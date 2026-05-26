import { Item } from "../Item";

const DruidicSpellData = {
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
    id: 2968,
    name: "Druidic spell"
  }
export const DruidicSpell = Item.fromJson(DruidicSpellData);
