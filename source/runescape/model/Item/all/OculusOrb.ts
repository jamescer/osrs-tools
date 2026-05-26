import { Item } from "../Item";

const OculusOrbData = {
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
    id: 22364,
    name: "Oculus orb"
  }
export const OculusOrb = Item.fromJson(OculusOrbData);
