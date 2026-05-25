import { Item } from "../Item";

const DragonSwordData = {{
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
    id: 21009,
    name: "Dragon sword"
  }
export const DragonSword = Item.fromJson(DragonSwordData);