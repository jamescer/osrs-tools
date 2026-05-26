import { Item } from "../Item";

const HumanEmblemData = {
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
    id: 26957,
    name: "Human emblem"
  }
export const HumanEmblem = Item.fromJson(HumanEmblemData);
