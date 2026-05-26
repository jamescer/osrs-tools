import { Item } from "../Item";

const DrakesToothData = {
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
    id: 22960,
    name: "Drake's tooth"
  }
export const DrakesTooth = Item.fromJson(DrakesToothData);
