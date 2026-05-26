import { Item } from "../Item";

const IronMedHelmData = {
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
    id: 1137,
    name: "Iron med helm"
  }
export const IronMedHelm = Item.fromJson(IronMedHelmData);
