import { Item } from "../Item";

const PrimedMindBarData = {
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
    id: 9728,
    name: "Primed mind bar"
  }
export const PrimedMindBar = Item.fromJson(PrimedMindBarData);
