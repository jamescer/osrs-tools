import { Item } from "../Item";

const VolatileOrbData = {
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
    id: 24514,
    name: "Volatile orb"
  }
export const VolatileOrb = Item.fromJson(VolatileOrbData);
