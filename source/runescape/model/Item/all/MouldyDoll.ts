import { Item } from "../Item";

const MouldyDollData = {
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
    id: 32869,
    name: "Mouldy doll"
  }
export const MouldyDoll = Item.fromJson(MouldyDollData);
