import { Item } from "../Item";

const ToyDollnormalData = {
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
    id: 7763,
    name: "Toy doll#Normal"
  }
export const ToyDollnormal = Item.fromJson(ToyDollnormalData);
