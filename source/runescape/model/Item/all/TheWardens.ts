import { Item } from "../Item";

const TheWardensData = {
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
    id: 27310,
    name: "The wardens"
  }
export const TheWardens = Item.fromJson(TheWardensData);
