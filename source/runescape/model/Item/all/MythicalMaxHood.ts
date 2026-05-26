import { Item } from "../Item";

const MythicalMaxHoodData = {
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
    id: 24857,
    name: "Mythical max hood"
  }
export const MythicalMaxHood = Item.fromJson(MythicalMaxHoodData);
