import { Item } from "../Item";

const WiggreyData = {
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
    id: 2421,
    name: "Wig#Grey"
  }
export const Wiggrey = Item.fromJson(WiggreyData);
