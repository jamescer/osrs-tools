import { Item } from "../Item";

const BurntChompyData = {
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
    id: 7226,
    name: "Burnt chompy"
  }
export const BurntChompy = Item.fromJson(BurntChompyData);
