import { Item } from "../Item";

const CattleprodData = {
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
    id: 278,
    name: "Cattleprod"
  }
export const Cattleprod = Item.fromJson(CattleprodData);
