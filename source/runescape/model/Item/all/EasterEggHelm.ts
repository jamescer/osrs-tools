import { Item } from "../Item";

const EasterEggHelmData = {
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
    id: 21214,
    name: "Easter egg helm"
  }
export const EasterEggHelm = Item.fromJson(EasterEggHelmData);
