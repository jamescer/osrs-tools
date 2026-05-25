import { Item } from "../Item";

const PurpleHatData = {{
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
    id: 2940,
    name: "Purple hat"
  }
export const PurpleHat = Item.fromJson(PurpleHatData);