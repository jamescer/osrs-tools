import { Item } from "../Item";

const OrangeFeatherData = {
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
    id: 10091,
    name: "Orange feather"
  }
export const OrangeFeather = Item.fromJson(OrangeFeatherData);
