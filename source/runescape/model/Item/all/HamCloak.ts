import { Item } from "../Item";

const HamCloakData = {
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
    id: 4304,
    name: "Ham cloak"
  }
export const HamCloak = Item.fromJson(HamCloakData);
