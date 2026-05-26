import { Item } from "../Item";

const RottenCarrotData = {
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
    id: 22437,
    name: "Rotten carrot"
  }
export const RottenCarrot = Item.fromJson(RottenCarrotData);
