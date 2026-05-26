import { Item } from "../Item";

const LunarRingData = {
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
    id: 9104,
    name: "Lunar ring"
  }
export const LunarRing = Item.fromJson(LunarRingData);
