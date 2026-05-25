import { Item } from "../Item";

const StoneSealData = {{
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
    id: 9042,
    name: "Stone seal"
  }
export const StoneSeal = Item.fromJson(StoneSealData);