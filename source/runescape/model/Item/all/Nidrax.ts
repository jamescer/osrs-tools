import { Item } from "../Item";

const NidraxData = {
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
    id: 29838,
    name: "Nid#Rax"
  }
export const Nidrax = Item.fromJson(NidraxData);
