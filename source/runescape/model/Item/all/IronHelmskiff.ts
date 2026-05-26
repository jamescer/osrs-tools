import { Item } from "../Item";

const IronHelmskiffData = {
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
    id: 32143,
    name: "Iron helm#Skiff"
  }
export const IronHelmskiff = Item.fromJson(IronHelmskiffData);
