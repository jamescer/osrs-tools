import { Item } from "../Item";

const DeadOrbData = {
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
    id: 2529,
    name: "Dead orb"
  }
export const DeadOrb = Item.fromJson(DeadOrbData);
