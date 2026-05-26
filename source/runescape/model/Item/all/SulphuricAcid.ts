import { Item } from "../Item";

const SulphuricAcidData = {
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
    id: 25966,
    name: "Sulphuric acid"
  }
export const SulphuricAcid = Item.fromJson(SulphuricAcidData);
