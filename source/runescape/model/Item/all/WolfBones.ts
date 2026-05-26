import { Item } from "../Item";

const WolfBonesData = {
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
    id: 2859,
    name: "Wolf bones"
  }
export const WolfBones = Item.fromJson(WolfBonesData);
