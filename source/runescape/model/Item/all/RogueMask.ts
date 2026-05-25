import { Item } from "../Item";

const RogueMaskData = {{
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
    id: 5554,
    name: "Rogue mask"
  }
export const RogueMask = Item.fromJson(RogueMaskData);