import { Item } from "../Item";

const CatspeakAmuletData = {
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
    id: 4677,
    name: "Catspeak amulet"
  }
export const CatspeakAmulet = Item.fromJson(CatspeakAmuletData);
