import { Item } from "../Item";

const NormalSnowballData = {{
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
    id: 26330,
    name: "Normal snowball"
  }
export const NormalSnowball = Item.fromJson(NormalSnowballData);