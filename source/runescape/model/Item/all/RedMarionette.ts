import { Item } from "../Item";

const RedMarionetteData = {
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
    id: 6867,
    name: "Red marionette"
  }
export const RedMarionette = Item.fromJson(RedMarionetteData);
