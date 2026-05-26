import { Item } from "../Item";

const EmptyCupData = {
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
    id: 1980,
    name: "Empty cup"
  }
export const EmptyCup = Item.fromJson(EmptyCupData);
