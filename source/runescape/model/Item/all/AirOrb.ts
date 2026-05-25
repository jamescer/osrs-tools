import { Item } from "../Item";

const AirOrbData = {{
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
    id: 573,
    name: "Air orb"
  }
export const AirOrb = Item.fromJson(AirOrbData);