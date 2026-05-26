import { Item } from "../Item";

const BluegillData = {
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
    id: 22826,
    name: "Bluegill"
  }
export const Bluegill = Item.fromJson(BluegillData);
