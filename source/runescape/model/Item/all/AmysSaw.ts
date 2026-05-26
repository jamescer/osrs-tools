import { Item } from "../Item";

const AmysSawData = {
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
    id: 24880,
    name: "Amy's saw"
  }
export const AmysSaw = Item.fromJson(AmysSawData);
