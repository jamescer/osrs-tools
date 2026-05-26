import { Item } from "../Item";

const BerserkerHelmData = {
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
    id: 3751,
    name: "Berserker helm"
  }
export const BerserkerHelm = Item.fromJson(BerserkerHelmData);
