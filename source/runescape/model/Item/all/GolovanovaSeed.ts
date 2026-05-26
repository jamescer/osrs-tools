import { Item } from "../Item";

const GolovanovaSeedData = {
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
    id: 13423,
    name: "Golovanova seed"
  }
export const GolovanovaSeed = Item.fromJson(GolovanovaSeedData);
