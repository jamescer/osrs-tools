import { Item } from "../Item";

const GraniteShieldData = {
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
    id: 3122,
    name: "Granite shield"
  }
export const GraniteShield = Item.fromJson(GraniteShieldData);
