import { Item } from "../Item";

const RubyAmuletData = {{
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
    id: 1698,
    name: "Ruby amulet"
  }
export const RubyAmulet = Item.fromJson(RubyAmuletData);