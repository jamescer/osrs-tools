import { Item } from "../Item";

const HardLeatherShieldData = {
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
    id: 22269,
    name: "Hard leather shield"
  }
export const HardLeatherShield = Item.fromJson(HardLeatherShieldData);
