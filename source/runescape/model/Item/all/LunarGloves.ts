import { Item } from "../Item";

const LunarGlovesData = {
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
    id: 9099,
    name: "Lunar gloves"
  }
export const LunarGloves = Item.fromJson(LunarGlovesData);
