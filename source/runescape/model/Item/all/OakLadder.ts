import { Item } from "../Item";

const OakLadderData = {
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
    id: 8306,
    name: "Oak ladder"
  }
export const OakLadder = Item.fromJson(OakLadderData);
