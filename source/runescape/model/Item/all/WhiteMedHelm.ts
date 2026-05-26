import { Item } from "../Item";

const WhiteMedHelmData = {
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
    id: 6621,
    name: "White med helm"
  }
export const WhiteMedHelm = Item.fromJson(WhiteMedHelmData);
