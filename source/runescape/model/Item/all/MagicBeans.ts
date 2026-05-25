import { Item } from "../Item";

const MagicBeansData = {{
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
    id: 11211,
    name: "Magic beans"
  }
export const MagicBeans = Item.fromJson(MagicBeansData);