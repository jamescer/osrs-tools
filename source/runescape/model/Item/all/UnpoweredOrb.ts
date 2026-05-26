import { Item } from "../Item";

const UnpoweredOrbData = {
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
    id: 567,
    name: "Unpowered orb"
  }
export const UnpoweredOrb = Item.fromJson(UnpoweredOrbData);
