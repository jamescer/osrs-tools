import { Item } from "../Item";

const WaterOrbData = {
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
    id: 571,
    name: "Water orb"
  }
export const WaterOrb = Item.fromJson(WaterOrbData);
