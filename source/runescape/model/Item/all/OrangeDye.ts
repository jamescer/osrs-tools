import { Item } from "../Item";

const OrangeDyeData = {{
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
    id: 1769,
    name: "Orange dye"
  }
export const OrangeDye = Item.fromJson(OrangeDyeData);