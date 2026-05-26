import { Item } from "../Item";

const DamianaWaterData = {
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
    id: 30979,
    name: "Damiana water"
  }
export const DamianaWater = Item.fromJson(DamianaWaterData);
