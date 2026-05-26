import { Item } from "../Item";

const EyeOfTheDukeData = {
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
    id: 28321,
    name: "Eye of the duke"
  }
export const EyeOfTheDuke = Item.fromJson(EyeOfTheDukeData);
