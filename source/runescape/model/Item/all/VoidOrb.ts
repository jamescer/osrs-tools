import { Item } from "../Item";

const VoidOrbData = {{
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
    id: 32433,
    name: "Void orb"
  }
export const VoidOrb = Item.fromJson(VoidOrbData);