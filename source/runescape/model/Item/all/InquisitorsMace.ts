import { Item } from "../Item";

const InquisitorsMaceData = {
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
    id: 24417,
    name: "Inquisitor's mace"
  }
export const InquisitorsMace = Item.fromJson(InquisitorsMaceData);
