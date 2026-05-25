import { Item } from "../Item";

const GreenHatData = {{
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
    id: 658,
    name: "Green hat"
  }
export const GreenHat = Item.fromJson(GreenHatData);