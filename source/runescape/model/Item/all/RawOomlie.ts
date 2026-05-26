import { Item } from "../Item";

const RawOomlieData = {
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
    id: 2337,
    name: "Raw oomlie"
  }
export const RawOomlie = Item.fromJson(RawOomlieData);
