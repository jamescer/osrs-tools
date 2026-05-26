import { Item } from "../Item";

const MspeakAmuletData = {
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
    id: 4021,
    name: "M'speak amulet"
  }
export const MspeakAmulet = Item.fromJson(MspeakAmuletData);
