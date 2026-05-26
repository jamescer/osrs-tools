import { Item } from "../Item";

const WillowShieldData = {
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
    id: 22254,
    name: "Willow shield"
  }
export const WillowShield = Item.fromJson(WillowShieldData);
