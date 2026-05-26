import { Item } from "../Item";

const ProboscisData = {
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
    id: 6319,
    name: "Proboscis"
  }
export const Proboscis = Item.fromJson(ProboscisData);
