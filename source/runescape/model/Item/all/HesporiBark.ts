import { Item } from "../Item";

const HesporiBarkData = {
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
    id: 25968,
    name: "Hespori bark"
  }
export const HesporiBark = Item.fromJson(HesporiBarkData);
