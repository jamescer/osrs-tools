import { Item } from "../Item";

const StarAmuletData = {{
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
    id: 4183,
    name: "Star amulet"
  }
export const StarAmulet = Item.fromJson(StarAmuletData);