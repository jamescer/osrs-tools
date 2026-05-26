import { Item } from "../Item";

const DevilsElementData = {
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
    id: 30371,
    name: "Devil's element"
  }
export const DevilsElement = Item.fromJson(DevilsElementData);
