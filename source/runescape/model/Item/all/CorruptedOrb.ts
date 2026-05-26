import { Item } from "../Item";

const CorruptedOrbData = {
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
    id: 23833,
    name: "Corrupted orb"
  }
export const CorruptedOrb = Item.fromJson(CorruptedOrbData);
