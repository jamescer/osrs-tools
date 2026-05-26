import { Item } from "../Item";

const OrbsOfProtectionData = {
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
    id: 588,
    name: "Orbs of protection"
  }
export const OrbsOfProtection = Item.fromJson(OrbsOfProtectionData);
